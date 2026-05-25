export const SITE = {
  name: 'Prismix Image Converter',
  shortName: 'Prismix',
  url: process.env.SITE_URL || 'https://prismix.online',
  enableAds: process.env.ENABLE_ADS !== 'false',
  adsenseClient: process.env.ADSENSE_CLIENT || 'ca-pub-1836416276880613'
};

export const LIMITS = {
  maxUploadFiles: Number(process.env.MAX_UPLOAD_FILES || 10),
  maxUploadMb: Number(process.env.MAX_UPLOAD_MB || 35)
};

export const supportedInputFormats = [
  'jpg', 'jpeg', 'png', 'webp', 'gif', 'bmp', 'tiff', 'svg', 'heic', 'heif', 'avif', 'raw', 'psd', 'ico', 'pdf'
];

export const supportedOutputFormats = [
  'jpg', 'jpeg', 'png', 'webp', 'gif', 'bmp', 'tiff', 'svg', 'heic', 'heif', 'avif', 'raw', 'ico', 'pdf'
];
