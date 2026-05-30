import 'dotenv/config';
import express from 'express';
import multer from 'multer';
import path from 'node:path';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'node:url';
import { LIMITS, SITE, supportedInputFormats, supportedOutputFormats } from './config.js';
import { imageEngineReadiness, packResult, parseOptions, processFiles, sharpSupportMatrix } from './image-engine.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.join(__dirname, '..');
const publicDir = path.join(root, 'public');
const app = express();
const port = Number(process.env.PORT || 3000);


const languageAlternates = [
  ['en', '/'], ['es', '/es/'], ['pt-BR', '/pt-br/'], ['de', '/de/'], ['fr', '/fr/'], ['it', '/it/'], ['tr', '/tr/'], ['id', '/id/'], ['ja', '/ja/'], ['ko', '/ko/'], ['zh-CN', '/zh-cn/'], ['ar', '/ar/'], ['hi', '/hi/'], ['ru', '/ru/']
];
const seoPaths = ['/', '/convert-image.html', '/compress-image.html', '/resize-image.html', '/crop-image.html', '/upscale-image.html', '/split-image.html', '/png-to-jpg.html', '/jpg-to-webp.html', '/webp-to-png.html', '/avif-to-jpg.html', '/heic-to-jpg.html', '/heif-to-jpg.html', '/jpg-to-heic.html', '/webp-converter.html', '/avif-converter.html', '/privacy.html', '/terms.html', '/contact.html'];
function siteUrl(pathname = '/') {
  const base = (SITE.url || 'https://prismix.online').replace(/\/$/, '');
  return `${base}${pathname}`;
}

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    files: LIMITS.maxUploadFiles,
    fileSize: LIMITS.maxUploadMb * 1024 * 1024
  }
});

app.disable('x-powered-by');
app.use(express.json({ limit: '256kb' }));
app.use(express.urlencoded({ extended: false, limit: '256kb' }));
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  next();
});

app.get('/robots.txt', (_req, res) => {
  res.type('text/plain').send(`User-agent: *\nAllow: /\nSitemap: ${siteUrl('/sitemap.xml')}\n`);
});

app.get('/sitemap.xml', (_req, res) => {
  const coreUrls = seoPaths.map((pathname) => `  <url><loc>${siteUrl(pathname)}</loc><changefreq>weekly</changefreq><priority>${pathname === '/' ? '1.0' : pathname.includes('split') ? '0.88' : '0.80'}</priority></url>`).join('\n');
  const localizedUrls = languageAlternates.filter(([code]) => code !== 'en').map(([code, pathname]) => {
    const alts = languageAlternates.map(([altCode, altPath]) => `    <xhtml:link rel="alternate" hreflang="${altCode}" href="${siteUrl(altPath)}"/>`).join('\n');
    return `  <url>\n    <loc>${siteUrl(pathname)}</loc>\n${alts}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl('/')}"/>\n    <changefreq>weekly</changefreq>\n    <priority>0.92</priority>\n  </url>`;
  }).join('\n');
  res.type('application/xml').send(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${coreUrls}\n${localizedUrls}\n</urlset>`);
});

app.use(express.static(publicDir, { extensions: ['html'], maxAge: '1h' }));

app.get('/api/config', (_req, res) => {
  res.json({
    site: SITE,
    limits: LIMITS,
    supportedInputFormats,
    supportedOutputFormats
  });
});

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    engine: 'sharp',
    support: sharpSupportMatrix(),
    readiness: imageEngineReadiness(),
    note: 'Baseline image conversion is production-ready for common web formats. HEIC/HEIF input uses Sharp when available and a fallback decoder when Sharp cannot read the file. HEIC/HEIF output requires server HEIF/HEVC encoder support.'
  });
});


const contactRateMap = new Map();
function cleanContactText(value = '', max = 5000) {
  return String(value || '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
}
function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}
function smtpConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE || 'false') === 'true',
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });
}

app.post('/api/contact', async (req, res) => {
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.ip || 'unknown';
  const now = Date.now();
  const recent = (contactRateMap.get(ip) || []).filter((time) => now - time < 10 * 60 * 1000);
  if (recent.length >= 5) {
    contactRateMap.set(ip, recent);
    return res.status(429).json({ ok: false, message: 'Too many contact attempts. Please try again later.' });
  }
  recent.push(now);
  contactRateMap.set(ip, recent);

  const name = cleanContactText(req.body?.name, 120);
  const email = cleanContactText(req.body?.email, 180).toLowerCase();
  const message = cleanContactText(req.body?.message, 5000);
  const language = cleanContactText(req.body?.language, 24);
  const page = cleanContactText(req.body?.page, 500);
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !emailOk || !message) {
    return res.status(400).json({ ok: false, message: 'Please provide a valid name, email and message.' });
  }
  if (!smtpConfigured()) {
    return res.status(503).json({ ok: false, message: 'SMTP is not configured. Set SMTP_HOST, SMTP_USER and SMTP_PASS in Render environment variables.' });
  }

  const to = process.env.CONTACT_TO || 'info@hakkiburakbakirci.com';
  const from = process.env.CONTACT_FROM || process.env.SMTP_USER;
  const safe = { name: escapeHtml(name), email: escapeHtml(email), message: escapeHtml(message).replace(/\n/g, '<br>'), language: escapeHtml(language), page: escapeHtml(page) };
  const textBody = [
    'New Prismix contact message',
    `Full name: ${name}`,
    `Email: ${email}`,
    `Language: ${language || '-'}`,
    `Page: ${page || '-'}`,
    '',
    message
  ].join('\n');
  const htmlBody = `<h2>New Prismix contact message</h2><p><strong>Full name:</strong> ${safe.name}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Language:</strong> ${safe.language || '-'}</p><p><strong>Page:</strong> ${safe.page || '-'}</p><hr><p>${safe.message}</p>`;

  try {
    const transporter = createTransporter();
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Prismix contact message from ${name}`,
      text: textBody,
      html: htmlBody
    });
    res.json({ ok: true, message: 'Message sent.' });
  } catch (error) {
    const messageText = error instanceof Error ? error.message : 'Email delivery failed.';
    res.status(502).json({ ok: false, message: messageText });
  }
});

app.post('/api/convert', upload.array('files', LIMITS.maxUploadFiles), async (req, res) => {
  try {
    const options = parseOptions(req.body);
    const processed = await processFiles(req.files || [], options);
    const result = await packResult(processed);
    res.setHeader('Content-Type', result.mime);
    res.setHeader('Content-Disposition', `attachment; filename="${result.filename}"`);
    res.setHeader('Cache-Control', 'no-store, max-age=0');
    res.setHeader('X-Original-Size', String(result.originalSize));
    res.setHeader('X-Output-Size', String(result.outputSize));
    res.setHeader('X-Output-Filename', encodeURIComponent(result.filename));
    res.setHeader('X-Output-Pieces', String(result.pieceCount || 1));
    res.send(result.buffer);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Conversion failed.';
    res.status(400).json({ ok: false, message });
  }
});

app.use((error, _req, res, next) => {
  if (!error) return next();
  const message = error instanceof Error ? error.message : 'Unexpected server error.';
  res.status(400).json({ ok: false, message });
});

app.use((req, res) => {
  if (req.path.includes('.')) return res.status(404).send('Not found');
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`${SITE.name} running at http://localhost:${port}`);
});
