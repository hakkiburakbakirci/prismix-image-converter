import sharp from 'sharp';
import JSZip from 'jszip';
import pngToIco from 'png-to-ico';
import { PDFDocument } from 'pdf-lib';
import { LIMITS, supportedOutputFormats } from './config.js';

let heicConvertLoader;
let heicToLoader;

export function normalizeFormat(format = 'webp') {
  const clean = String(format).toLowerCase().replace('.', '');
  return clean === 'jpg' ? 'jpeg' : clean;
}

export function extensionFor(format = 'webp') {
  const clean = normalizeFormat(format);
  if (clean === 'jpeg') return 'jpg';
  return clean;
}

export function mimeFor(format = 'webp') {
  const map = {
    jpeg: 'image/jpeg', jpg: 'image/jpeg', png: 'image/png', webp: 'image/webp', gif: 'image/gif',
    bmp: 'image/bmp', tiff: 'image/tiff', svg: 'image/svg+xml', heic: 'image/heic', heif: 'image/heif',
    avif: 'image/avif', raw: 'application/octet-stream', ico: 'image/x-icon', pdf: 'application/pdf', zip: 'application/zip'
  };
  return map[normalizeFormat(format)] || 'application/octet-stream';
}

export function safeBaseName(filename = 'image') {
  const normalized = filename.split(/[\\/]/).pop() || 'image';
  const withoutExtension = normalized.replace(/\.[^.]+$/, '');
  return withoutExtension.replace(/[^a-z0-9-_]+/gi, '-').replace(/^-+|-+$/g, '').toLowerCase() || 'image';
}

export function bytesToHuman(bytes = 0) {
  if (!Number.isFinite(bytes)) return '0 B';
  if (bytes < 1024) return `${bytes} B`;
  const units = ['KB', 'MB', 'GB'];
  let size = bytes / 1024;
  let index = 0;
  while (size >= 1024 && index < units.length - 1) {
    size /= 1024;
    index += 1;
  }
  return `${size.toFixed(size >= 10 ? 1 : 2)} ${units[index]}`;
}

function numberOption(value, fallback = undefined) {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

export function parseOptions(body = {}) {
  const outputFormat = normalizeFormat(body.outputFormat || 'webp');
  if (!supportedOutputFormats.map(normalizeFormat).includes(outputFormat)) {
    throw new Error(`Output format ${outputFormat} is not listed as a selectable output format.`);
  }
  const quality = Math.max(1, Math.min(100, Number(body.quality || 82)));
  const mode = String(body.mode || 'convert');
  const cropWidth = numberOption(body.cropWidth);
  const cropHeight = numberOption(body.cropHeight);
  const crop = cropWidth && cropHeight ? {
    left: Math.max(0, Number(body.cropLeft || 0)),
    top: Math.max(0, Number(body.cropTop || 0)),
    width: cropWidth,
    height: cropHeight
  } : undefined;

  const splitMethod = ['rows', 'columns', 'both'].includes(body.splitMethod) ? body.splitMethod : 'both';
  const rawRows = Math.max(1, Math.min(12, Math.trunc(Number(body.splitRows || 2)) || 2));
  const rawColumns = Math.max(1, Math.min(12, Math.trunc(Number(body.splitColumns || 2)) || 2));
  const splitRows = splitMethod === 'columns' ? 1 : rawRows;
  const splitColumns = splitMethod === 'rows' ? 1 : rawColumns;
  if (mode === 'split' && splitRows * splitColumns < 2) {
    throw new Error('Split Image needs at least two pieces. Increase rows or columns.');
  }
  if (mode === 'split' && splitRows * splitColumns > 144) {
    throw new Error('Split Image supports up to 144 pieces per image to keep downloads fast and stable.');
  }

  return {
    mode,
    outputFormat,
    quality,
    width: numberOption(body.width),
    height: numberOption(body.height),
    fit: ['inside', 'cover', 'contain', 'fill', 'outside'].includes(body.fit) ? body.fit : 'inside',
    withoutEnlargement: String(body.withoutEnlargement || 'true') !== 'false',
    targetKb: numberOption(body.targetKb),
    crop,
    split: {
      method: splitMethod,
      rows: splitRows,
      columns: splitColumns,
      naming: ['grid', 'sequence'].includes(body.splitNaming) ? body.splitNaming : 'grid'
    }
  };
}

export function validateFiles(files = []) {
  if (!files.length) throw new Error('Please upload at least one file.');
  if (files.length > LIMITS.maxUploadFiles) throw new Error(`Maximum ${LIMITS.maxUploadFiles} files can be uploaded at once.`);
  const maxBytes = LIMITS.maxUploadMb * 1024 * 1024;
  for (const file of files) {
    if (file.size > maxBytes) throw new Error(`${file.originalname} is too large. Max file size is ${LIMITS.maxUploadMb} MB.`);
  }
}

function extensionOf(file) {
  return String(file?.originalname || '').toLowerCase().split('.').pop() || '';
}

function isPdf(file) {
  return file.mimetype === 'application/pdf' || extensionOf(file) === 'pdf';
}

function isHeicLike(file) {
  const ext = extensionOf(file);
  return ['heic', 'heif', 'heics', 'heifs', 'hif'].includes(ext) || /image\/(heic|heif)/i.test(file.mimetype || '');
}

function isHeifOutput(format) {
  return ['heic', 'heif'].includes(normalizeFormat(format));
}

function unsupportedInputMessage(file) {
  const ext = extensionOf(file);
  if (['psd', 'raw', 'cr2', 'nef', 'arw', 'dng'].includes(ext)) {
    return `${file.originalname} needs a specialist RAW/PSD decoder. Prismix does not create fake output for formats the server cannot decode.`;
  }
  return null;
}

async function loadHeicConvert() {
  if (!heicConvertLoader) {
    heicConvertLoader = import('heic-convert')
      .then((mod) => mod.default || mod)
      .catch(() => null);
  }
  return heicConvertLoader;
}


async function loadHeicTo() {
  if (!heicToLoader) {
    heicToLoader = import('heic-to/next')
      .catch(() => import('heic-to'))
      .then((mod) => mod.heicTo || mod.default || mod)
      .catch(() => null);
  }
  return heicToLoader;
}

async function decodeHeicWithHeicTo(file) {
  const heicTo = await loadHeicTo();
  if (typeof heicTo !== 'function') return null;
  const mime = /image\/(heic|heif)/i.test(file.mimetype || '') ? file.mimetype : 'image/heic';
  const blob = new Blob([file.buffer], { type: mime });
  const output = await heicTo({ blob, type: 'image/png', quality: 1 });
  if (output && typeof output.arrayBuffer === 'function') {
    return Buffer.from(await output.arrayBuffer());
  }
  if (output instanceof ArrayBuffer) return Buffer.from(output);
  if (ArrayBuffer.isView(output)) return Buffer.from(output.buffer);
  return Buffer.from(output);
}

async function decodeHeicWithHeicConvert(file) {
  const heicConvert = await loadHeicConvert();
  if (typeof heicConvert !== 'function') return null;
  const output = await heicConvert({ buffer: file.buffer, format: 'PNG', quality: 1 });
  return Buffer.from(output);
}

async function sharpCanRead(buffer) {
  try {
    await sharp(buffer, { animated: true, failOn: 'none', limitInputPixels: 268402689 }).metadata();
    return true;
  } catch {
    return false;
  }
}

async function prepareInputBuffer(file) {
  if (!isHeicLike(file)) return file.buffer;

  const errors = [];

  // Primary portable path: heic-to ships a recent libheif-based WASM decoder and avoids
  // the common Sharp/libvips “No decoding plugin installed” HEIC/HEIF error.
  try {
    const decoded = await decodeHeicWithHeicTo(file);
    if (decoded?.length) return decoded;
  } catch (error) {
    errors.push(`heic-to: ${error instanceof Error ? error.message : String(error)}`);
  }

  // Secondary fallback for common iPhone HEIC files.
  try {
    const decoded = await decodeHeicWithHeicConvert(file);
    if (decoded?.length) return decoded;
  } catch (error) {
    errors.push(`heic-convert: ${error instanceof Error ? error.message : String(error)}`);
  }

  // Last resort: use the installed native Sharp/libvips decoder when the host has HEIF plugins.
  try {
    if (await sharpCanRead(file.buffer)) return file.buffer;
  } catch (error) {
    errors.push(`sharp: ${error instanceof Error ? error.message : String(error)}`);
  }

  throw new Error(`HEIC/HEIF input could not be decoded. Prismix tried the portable HEIC decoder, the fallback decoder and the native server decoder. Details: ${errors.join(' | ') || 'no decoder was available'}`);
}

function explainHeifOutputFailure(error) {
  const message = error instanceof Error ? error.message : String(error || 'unknown error');
  return `HEIC/HEIF output requires HEIF/HEVC encoder support in the server image engine. The current environment could not encode it: ${message}. For this server, choose JPG, PNG, WebP or AVIF, or deploy with libvips compiled with libheif, libde265 and x265.`;
}

function applyOutputFormat(pipe, outputFormat, quality) {
  const fmt = normalizeFormat(outputFormat);
  switch (fmt) {
    case 'jpeg': return pipe.jpeg({ quality, mozjpeg: true, chromaSubsampling: '4:2:0' });
    case 'png': return pipe.png({ quality, compressionLevel: 9, adaptiveFiltering: true });
    case 'webp': return pipe.webp({ quality, effort: 5 });
    case 'avif': return pipe.avif({ quality, effort: 5 });
    case 'gif': return pipe.gif({ effort: 7 });
    case 'tiff': return pipe.tiff({ quality, compression: 'lzw' });
    case 'raw': return pipe.raw();
    case 'heic':
    case 'heif': return pipe.heif({ quality, compression: 'hevc', effort: 4, chromaSubsampling: '4:2:0' });
    default: return pipe.png({ quality, compressionLevel: 9 });
  }
}

async function outputAsBmp(input) {
  const { data, info } = await input.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const rowSize = Math.floor((32 * info.width + 31) / 32) * 4;
  const pixelArraySize = rowSize * info.height;
  const fileSize = 54 + pixelArraySize;
  const buffer = Buffer.alloc(fileSize);
  buffer.write('BM', 0);
  buffer.writeUInt32LE(fileSize, 2);
  buffer.writeUInt32LE(54, 10);
  buffer.writeUInt32LE(40, 14);
  buffer.writeInt32LE(info.width, 18);
  buffer.writeInt32LE(info.height, 22);
  buffer.writeUInt16LE(1, 26);
  buffer.writeUInt16LE(32, 28);
  buffer.writeUInt32LE(0, 30);
  buffer.writeUInt32LE(pixelArraySize, 34);
  for (let y = 0; y < info.height; y += 1) {
    for (let x = 0; x < info.width; x += 1) {
      const src = ((info.height - y - 1) * info.width + x) * 4;
      const dst = 54 + y * rowSize + x * 4;
      buffer[dst] = data[src + 2];
      buffer[dst + 1] = data[src + 1];
      buffer[dst + 2] = data[src];
      buffer[dst + 3] = data[src + 3];
    }
  }
  return buffer;
}

async function outputAsSvgWrapper(input, quality) {
  const png = await input.png({ quality, compressionLevel: 9 }).toBuffer();
  const meta = await sharp(png).metadata();
  const width = meta.width || 1200;
  const height = meta.height || 900;
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><image width="${width}" height="${height}" href="data:image/png;base64,${png.toString('base64')}"/></svg>`);
}

async function makePipeline(buffer, options) {
  let pipeline = sharp(buffer, { animated: true, failOn: 'none', limitInputPixels: 268402689 }).rotate();
  const metadata = await pipeline.metadata();
  const transparentOutputs = ['png', 'webp', 'avif', 'gif', 'tiff', 'svg'];
  if (!transparentOutputs.includes(normalizeFormat(options.outputFormat))) {
    pipeline = pipeline.flatten({ background: '#ffffff' });
  }
  if (options.crop) {
    const width = metadata.width || options.crop.width;
    const height = metadata.height || options.crop.height;
    const left = Math.min(Math.max(0, Math.round(options.crop.left)), Math.max(0, width - 1));
    const top = Math.min(Math.max(0, Math.round(options.crop.top)), Math.max(0, height - 1));
    const cropWidth = Math.min(Math.round(options.crop.width), Math.max(1, width - left));
    const cropHeight = Math.min(Math.round(options.crop.height), Math.max(1, height - top));
    pipeline = pipeline.extract({ left, top, width: cropWidth, height: cropHeight });
  }
  if (options.width || options.height) {
    pipeline = pipeline.resize({
      width: options.width,
      height: options.height,
      fit: options.fit,
      withoutEnlargement: options.mode === 'upscale' ? false : options.withoutEnlargement,
      kernel: 'lanczos3'
    });
  }
  return pipeline;
}

async function encodeWithTarget(input, options) {
  const targetBytes = options.targetKb ? options.targetKb * 1024 : undefined;
  const fmt = normalizeFormat(options.outputFormat);
  if (!targetBytes || ['raw', 'svg', 'ico', 'bmp', 'pdf'].includes(fmt)) {
    const pipeline = await makePipeline(input, options);
    if (fmt === 'bmp') return outputAsBmp(pipeline);
    if (fmt === 'svg') return outputAsSvgWrapper(pipeline, options.quality);
    if (fmt === 'ico') {
      const png = await pipeline.resize({ width: 256, height: 256, fit: 'inside', withoutEnlargement: false }).png().toBuffer();
      return Buffer.from(await pngToIco(png));
    }
    return applyOutputFormat(pipeline, options.outputFormat, options.quality).toBuffer();
  }
  let quality = options.quality;
  let scale = 1;
  let best = Buffer.alloc(0);
  for (let attempt = 0; attempt < 12; attempt += 1) {
    let pipeline = await makePipeline(input, { ...options, quality });
    if (scale < 1) {
      const meta = await sharp(input).metadata();
      const width = meta.width ? Math.max(240, Math.round(meta.width * scale)) : undefined;
      pipeline = pipeline.resize({ width, fit: 'inside', withoutEnlargement: true });
    }
    best = await applyOutputFormat(pipeline, options.outputFormat, quality).toBuffer();
    if (best.length <= targetBytes) return best;
    if (quality > 42) quality -= 12;
    else scale *= 0.82;
  }
  return best;
}


function safeSplitFormat(format) {
  const fmt = normalizeFormat(format);
  if (['pdf', 'raw'].includes(fmt)) return 'png';
  return fmt;
}

async function encodePiece(piecePipeline, outputFormat, quality) {
  const fmt = safeSplitFormat(outputFormat);
  if (fmt === 'bmp') return outputAsBmp(piecePipeline);
  if (fmt === 'svg') return outputAsSvgWrapper(piecePipeline, quality);
  if (fmt === 'ico') {
    const png = await piecePipeline.resize({ width: 256, height: 256, fit: 'inside', withoutEnlargement: false }).png().toBuffer();
    return Buffer.from(await pngToIco(png));
  }
  return applyOutputFormat(piecePipeline, fmt, quality).toBuffer();
}

async function splitImage(file, options) {
  if (isPdf(file)) {
    throw new Error('Split Image works with image files. PDF page slicing requires a dedicated PDF raster renderer.');
  }
  const input = await prepareInputBuffer(file);
  const normalized = await sharp(input, { animated: false, failOn: 'none', limitInputPixels: 268402689 }).rotate().toBuffer();
  const meta = await sharp(normalized).metadata();
  const width = meta.width || 0;
  const height = meta.height || 0;
  if (!width || !height) throw new Error('Could not read image dimensions for splitting.');

  const rows = Math.max(1, Math.min(12, options.split?.rows || 2));
  const columns = Math.max(1, Math.min(12, options.split?.columns || 2));
  const pieceCount = rows * columns;
  if (pieceCount < 2) throw new Error('Split Image needs at least two pieces. Increase rows or columns.');
  if (pieceCount > 144) throw new Error('Split Image supports up to 144 pieces per image.');

  const outputFormat = safeSplitFormat(options.outputFormat);
  const transparentOutputs = ['png', 'webp', 'avif', 'gif', 'tiff', 'svg'];
  const base = safeBaseName(file.originalname);
  const pad = (value, size = 2) => String(value).padStart(size, '0');
  const results = [];

  for (let row = 0; row < rows; row += 1) {
    const top = Math.round((row * height) / rows);
    const bottom = Math.round(((row + 1) * height) / rows);
    for (let column = 0; column < columns; column += 1) {
      const left = Math.round((column * width) / columns);
      const right = Math.round(((column + 1) * width) / columns);
      const pieceWidth = Math.max(1, right - left);
      const pieceHeight = Math.max(1, bottom - top);
      let piece = sharp(normalized, { animated: false, failOn: 'none', limitInputPixels: 268402689 })
        .extract({ left, top, width: pieceWidth, height: pieceHeight });
      if (!transparentOutputs.includes(outputFormat)) {
        piece = piece.flatten({ background: '#ffffff' });
      }
      const buffer = await encodePiece(piece, outputFormat, options.quality);
      const suffix = options.split?.naming === 'sequence'
        ? `part-${pad(results.length + 1, Math.max(2, String(pieceCount).length))}`
        : `r${pad(row + 1)}-c${pad(column + 1)}`;
      results.push({
        filename: `${base}-${suffix}.${extensionFor(outputFormat)}`,
        buffer,
        mime: mimeFor(outputFormat),
        originalSize: results.length === 0 ? file.size : 0,
        outputSize: buffer.length
      });
    }
  }
  return results;
}

async function imagesToPdf(files) {
  const pdfDoc = await PDFDocument.create();
  for (const file of files) {
    const input = await prepareInputBuffer(file);
    const normalized = await sharp(input, { animated: false, failOn: 'none' }).rotate().flatten({ background: '#ffffff' }).png().toBuffer();
    const meta = await sharp(normalized).metadata();
    const width = meta.width || 1200;
    const height = meta.height || 900;
    const page = pdfDoc.addPage([width, height]);
    const image = await pdfDoc.embedPng(normalized);
    page.drawImage(image, { x: 0, y: 0, width, height });
  }
  return Buffer.from(await pdfDoc.save({ useObjectStreams: true }));
}

export async function processSingleFile(file, options) {
  const fmt = normalizeFormat(options.outputFormat);
  if (isPdf(file) && fmt !== 'pdf') {
    throw new Error('PDF to image conversion requires a PDF page raster renderer. Prismix currently supports image-to-PDF export; PDF page rendering should be deployed with a dedicated renderer such as PDF.js/canvas or Poppler.');
  }
  const inputWarning = unsupportedInputMessage(file);
  if (inputWarning) {
    try { await sharp(file.buffer, { failOn: 'none' }).metadata(); } catch { throw new Error(inputWarning); }
  }
  if (options.mode === 'split') {
    try {
      return await splitImage(file, options);
    } catch (error) {
      if (isHeifOutput(fmt)) throw new Error(explainHeifOutputFailure(error));
      throw error;
    }
  }

  if (fmt === 'pdf') {
    const pdf = await imagesToPdf([file]);
    return [{ filename: `${safeBaseName(file.originalname)}.pdf`, buffer: pdf, mime: 'application/pdf', originalSize: file.size, outputSize: pdf.length }];
  }

  const inputBuffer = await prepareInputBuffer(file);
  let buffer;
  try {
    buffer = await encodeWithTarget(inputBuffer, options);
  } catch (error) {
    if (isHeifOutput(fmt)) throw new Error(explainHeifOutputFailure(error));
    throw error;
  }
  return [{
    filename: `${safeBaseName(file.originalname)}.${extensionFor(options.outputFormat)}`,
    buffer,
    mime: mimeFor(options.outputFormat),
    originalSize: file.size,
    outputSize: buffer.length
  }];
}

export async function processFiles(files, options) {
  validateFiles(files);
  const fmt = normalizeFormat(options.outputFormat);
  if (options.mode !== 'split' && fmt === 'pdf' && files.length > 1) {
    const pdf = await imagesToPdf(files);
    return [{ filename: 'converted-images.pdf', buffer: pdf, mime: 'application/pdf', originalSize: files.reduce((s, f) => s + f.size, 0), outputSize: pdf.length }];
  }
  const processed = [];
  for (const file of files) processed.push(...await processSingleFile(file, options));
  return processed;
}

export async function packResult(processed) {
  if (processed.length === 1) return { ...processed[0], pieceCount: 1 };
  const zip = new JSZip();
  for (const file of processed) zip.file(file.filename, file.buffer);
  const buffer = Buffer.from(await zip.generateAsync({ type: 'uint8array', compression: 'DEFLATE', compressionOptions: { level: 7 } }));
  const splitResult = processed.some((file) => /-(r\d{2}-c\d{2}|part-\d+)\./.test(file.filename));
  return {
    filename: splitResult ? 'split-image-pieces.zip' : 'converted-images.zip',
    buffer,
    mime: 'application/zip',
    originalSize: processed.reduce((s, f) => s + f.originalSize, 0),
    outputSize: buffer.length,
    pieceCount: processed.length
  };
}

export function sharpSupportMatrix() {
  return sharp.format;
}

export function imageEngineReadiness() {
  const heif = sharp.format?.heif || {};
  return {
    sharpVersion: sharp.versions?.sharp,
    libvipsVersion: sharp.versions?.vips,
    heicHeif: {
      sharpInput: Boolean(heif.input?.file || heif.input?.buffer),
      sharpOutput: Boolean(heif.output?.file || heif.output?.buffer),
      fallbackInputDecoder: 'heic-to + heic-convert'
    },
    reliableBaselineOutputs: ['jpg', 'png', 'webp', 'avif', 'gif', 'tiff', 'svg', 'ico', 'pdf'],
    tools: ['convert', 'compress', 'resize', 'crop', 'upscale', 'split']
  };
}
