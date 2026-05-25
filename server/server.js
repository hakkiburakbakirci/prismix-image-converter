import 'dotenv/config';
import express from 'express';
import multer from 'multer';
import path from 'node:path';
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
