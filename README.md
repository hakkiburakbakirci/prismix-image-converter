# Prismix Image Converter v1.0.27

SEO-first, AdSense-ready, privacy-first image converter website built with HTML, CSS, SASS, LESS, JavaScript, TypeScript config, Node.js, Express and Sharp.

## Start on Windows

```powershell
npm install --registry=https://registry.npmjs.org/ --no-audit --no-fund
npm run dev
```

Open locally: http://localhost:3000

## Included tools

- Convert images between common formats
- Stronger HEIC/HEIF input decoding with `heic-to` first, `heic-convert` second and native Sharp/libvips as last fallback
- Compress with quality and target KB
- Resize by width, height and fit mode
- Interactive crop preview with draggable/resizable crop box
- Upscale by controlled resizing
- Image to PDF export
- Split Image tool for rows, columns and grid slicing
- Batch uploads up to 10 files

## Trust and legal pages

- Single light appearance only; no appearance switcher is included.
- Privacy, Terms and Contact pages are tailored for Prismix Image Converter.
- Contact form fields include full name, email and message.
- Official contact email: info@hakkiburakbakirci.com
- Footer includes dynamic current year and ownership notice for Hakkı Burak Bakırcı.

## SEO pages

The project includes homepage, conversion/compression/resize pages and long-tail landing pages such as PNG to JPG, JPG to WebP, WebP to PNG, HEIC to JPG, HEIF to JPG, JPG to HEIC, Image to PDF, Split Image, AVIF converter and more.

## v1.0.13 update

- Removed the appearance switcher from the sidebar, mobile view and JavaScript.
- Kept the whole site in one polished light appearance.
- Added `heic-to` as the primary HEIC/HEIF input decoder to avoid native server plugin errors such as “No decoding plugin installed”.
- Kept `heic-convert` and Sharp/libvips as fallback paths.
- Updated Privacy, Terms and Contact pages with trust-focused, project-specific content.
- Added a real contact form and official email address.
- Added dynamic copyright year and Hakkı Burak Bakırcı ownership/footer attribution.
- Fixed the cookie consent banner to the bottom of the viewport.

## Important format note

JPG, PNG, WebP, AVIF, GIF, TIFF, SVG, ICO and image-to-PDF are the strongest practical baseline for this project. HEIC/HEIF input is more robust in this version because Prismix now tries a newer portable decoder first. HEIC/HEIF output still depends on the host server having HEIF/HEVC encoder support available through the native image engine.


## v1.0.22 Global SEO and multilingual layer

This release adds a lightweight multilingual interface, browser-language detection, manual language selection, hreflang alternate links, localized landing pages and dynamic sitemap/robots generation using `SITE_URL`.


## v1.0.27 production domain and AdSense setup

- Production domain configured as `https://prismix.online`.
- Google AdSense account meta tag added: `ca-pub-1836416276880613`.
- AdSense loader snippet added to all HTML heads.
- `public/ads.txt` configured with `google.com, pub-1836416276880613, DIRECT, f08c47fec0942fa0`.
- `.env.example` updated with `SITE_URL=https://prismix.online`, `ENABLE_ADS=true` and the live AdSense client ID.
- Static and dynamic sitemap/robots output now point to the production domain when deployed.
