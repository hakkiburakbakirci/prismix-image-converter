import fs from 'node:fs';
import path from 'node:path';

const required = [
  'public/index.html',
  'public/convert-image.html',
  'public/compress-image.html',
  'public/resize-image.html',
  'public/sitemap.xml',
  'public/robots.txt',
  'public/ads.txt',
  'public/manifest.webmanifest'
];

let ok = true;
for (const file of required) {
  if (!fs.existsSync(path.join(process.cwd(), file))) {
    console.error(`Missing ${file}`);
    ok = false;
  }
}
const html = fs.readFileSync('public/index.html', 'utf8');
for (const token of ['<h1', 'application/ld+json', 'canonical', 'viewport', 'description']) {
  if (!html.includes(token)) {
    console.error(`SEO token missing: ${token}`);
    ok = false;
  }
}
if (!ok) process.exit(1);
console.log('SEO audit passed.');
