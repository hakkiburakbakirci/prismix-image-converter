const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const PRX_LOCALES = [{"code": "en", "englishName": "English", "nativeName": "English", "path": "/"}, {"code": "es", "englishName": "Spanish", "nativeName": "Español", "path": "/es/"}, {"code": "pt-BR", "englishName": "Portuguese", "nativeName": "Português", "path": "/pt-br/"}, {"code": "de", "englishName": "German", "nativeName": "Deutsch", "path": "/de/"}, {"code": "fr", "englishName": "French", "nativeName": "Français", "path": "/fr/"}, {"code": "it", "englishName": "Italian", "nativeName": "Italiano", "path": "/it/"}, {"code": "tr", "englishName": "Turkish", "nativeName": "Türkçe", "path": "/tr/"}, {"code": "id", "englishName": "Indonesian", "nativeName": "Indonesia", "path": "/id/"}, {"code": "ja", "englishName": "Japanese", "nativeName": "日本語", "path": "/ja/"}, {"code": "ko", "englishName": "Korean", "nativeName": "한국어", "path": "/ko/"}, {"code": "zh-CN", "englishName": "Chinese", "nativeName": "中文", "path": "/zh-cn/"}, {"code": "ar", "englishName": "Arabic", "nativeName": "العربية", "path": "/ar/"}, {"code": "hi", "englishName": "Hindi", "nativeName": "हिन्दी", "path": "/hi/"}, {"code": "ru", "englishName": "Russian", "nativeName": "Русский", "path": "/ru/"}];
const PRX_I18N = {"en": {"localeName": "English", "language": "Language", "chooseLanguage": "Choose language", "languageChanged": "Your language has been changed to {language} as requested. You can change it again at the bottom of the page.", "footerChangeLanguage": "Change language at any time", "seoTitle": "Prismix Image Converter | Free Image Converter, Compressor, Resizer & Split Image Tool", "seoDescription": "Free online image converter, image compressor, image resizer, crop tool, upscaler and split image tool for JPG, PNG, WebP, AVIF, HEIC, HEIF, SVG, TIFF and more.", "seoKeywords": "image converter, free image converter, convert image online, image compressor, resize image, crop image, split image, image slicer, HEIC to JPG, WebP converter, AVIF converter, PNG to JPG, JPG to WebP", "h1": "Prismix Image Converter", "eyebrow": "Free online image toolkit", "heroLine": "Fast. Beautiful. Powerful.", "heroP": "Convert, compress, resize, crop, upscale and split images with a colorful, privacy-first online image tool. Upload an image, choose your action and download the optimized result instantly.", "upload": "Upload image", "guides": "Read image guides", "start": "Start here", "uploadTitle": "Upload your images first", "uploadP": "No files are persisted. Refreshing the page clears selected files, object URLs and local previews.", "drop": "Drop up to 10 files here", "choose": "Choose Files", "processing": "Processing started...", "success": "Success! Your optimized file is ready.", "download": "Download", "brandSmall": "Image Converter", "nav": {"home": "Home", "convert": "Convert", "compress": "Compress", "resize": "Resize", "crop": "Crop", "split": "Split Image", "formats": "Formats", "guides": "Guides", "faq": "FAQ", "contact": "Contact"}, "modes": {"convert": "Convert", "compress": "Compress", "resize": "Resize", "crop": "Crop", "upscale": "Upscale", "split": "Split"}, "toolText": {"convert": "Convert your images to the format you need in a few clicks.", "compress": "Compress images to a target size with live quality control.", "resize": "Resize your image by pixels or percentage while keeping proportions.", "crop": "Drag the crop box, resize the handles and apply your exact frame.", "upscale": "Increase image dimensions carefully without unwanted enlargement.", "split": "Slice one image into equal rows, columns or a full grid, then download every piece as a ZIP."}, "toolButtons": {"convert": "Convert Now", "compress": "Compress Now", "resize": "Resize Now", "crop": "Apply Crop", "upscale": "Upscale Now", "split": "Split Image"}, "controls": {"outputFormat": "Output format", "quality": "Quality", "targetKb": "Target size KB", "width": "Width px", "height": "Height px", "fitMode": "Fit mode", "preventEnlargement": "Prevent unwanted enlargement", "splitMethod": "Split method", "rows": "Rows", "columns": "Columns", "namingStyle": "Naming style", "left": "Left", "top": "Top", "cropWidth": "Width", "cropHeight": "Height", "cropEmpty": "Upload an image to preview and select the crop area", "cropHelp": "Drag the crop box over the image, then resize it from the corners or edges. The numeric values update automatically for precise output.", "splitTip": "Split Image creates equal image pieces and downloads them as a ZIP. Use rows only for horizontal strips, columns only for vertical strips, or both rows and columns for a full grid."}, "options": {"fitInside": "Keep inside box", "fitCover": "Cover crop", "fitContain": "Contain with background", "fitFill": "Stretch fill", "fitOutside": "Outside", "splitBoth": "Both rows and columns", "splitRows": "Rows only", "splitColumns": "Columns only", "nameGrid": "Row and column labels", "nameSequence": "Simple sequence"}, "trust": ["Memory-only processing", "Batch limit: 10 files", "Convert • Compress • Resize • Crop • Split"], "sections": {"formatsTitle": "Convert between popular image formats", "popularTitle": "High-intent image conversion shortcuts", "benefits": "Platform benefits", "faqTitle": "Frequently asked questions"}, "dashboard": [["Convert", "Convert between 100+ formats"], ["Compress", "Reduce file size without losing clarity"], ["Resize", "Change dimensions instantly"], ["Crop", "Crop images with precision"], ["Split Image", "Slice images into rows and columns"], ["More Tools", "All formats in one place"]], "trustStrip": [["Secure & Private", "Memory-first processing"], ["Lightning Fast", "Convert in seconds"], ["No Sign Up Required", "Start instantly"]], "features": [["Fast image conversion", "Convert photos, graphics and screenshots into modern web formats with a simple upload, format selector and download flow."], ["Compression with target size", "Reduce large 20 MB images toward smaller targets such as 1 MB by combining quality optimization and careful resizing when needed."], ["Batch processing", "Upload one image or process up to 10 files at once, with clear result cards and ZIP output for multi-file conversion."], ["Privacy-first workflow", "Selected files are handled in memory for the current request. Browser-side previews are cleared when the page reloads."]], "faqEyebrow": "Questions", "faq": [["Can I convert PNG to JPG?", "Yes. Upload your PNG file, choose JPG as the output format and click Convert Now."], ["Can I convert JPG to WebP?", "Yes. WebP is a strong modern web format and is available in the output format selector."], ["Can I split an image into equal parts?", "Yes. Split Image can divide a picture into rows, columns or a full grid and download all parts as a ZIP."], ["Can I compress a 20 MB image close to 1 MB?", "Use Compress mode and set a target size such as 1024 KB. Very detailed images may need lower quality or smaller dimensions to reach the target."], ["Can I resize images to exact dimensions?", "Yes. Enter width and height values, then choose a fit mode such as inside, cover, contain, fill or outside."], ["Does crop mode show a preview?", "Yes. Crop mode includes an interactive preview. Users can drag and resize the crop area directly on the photo."], ["Do you store my images?", "No. Files are processed in memory for the current request and browser previews are cleared when the page reloads."], ["Is there a file limit?", "Yes. The interface limits batch uploads to 10 files to keep the tool stable and fast."]], "footer": "Secure, privacy-focused image conversion, compression, resizing, crop preview and split image tools. Created by", "footerRights": "All rights reserved.", "footerLinks": {"privacy": "Privacy", "terms": "Terms", "contact": "Contact", "sitemap": "Sitemap"}}, "tr": {"localeName": "Türkçe", "language": "Dil", "chooseLanguage": "Dil seçin", "languageChanged": "Diliniz isteğiniz üzerine {language} olarak değiştirildi. Sayfanın en altından tekrar değiştirebilirsiniz.", "footerChangeLanguage": "Dili istediğiniz zaman değiştirin", "seoTitle": "Prismix Image Converter | Ücretsiz Görsel Dönüştürücü, Sıkıştırıcı, Boyutlandırıcı ve Image Split Aracı", "seoDescription": "JPG, PNG, WebP, AVIF, HEIC, HEIF, SVG ve TIFF için ücretsiz online görsel dönüştürücü, görsel sıkıştırıcı, yeniden boyutlandırma, kırpma, büyütme ve image split aracı.", "seoKeywords": "görsel dönüştürücü, image converter, ücretsiz görsel dönüştürme, görsel sıkıştırma, resim boyutlandırma, resim kırpma, image split, görsel bölme, HEIC JPG çevirme, PNG JPG çevirme, WebP dönüştürücü", "h1": "Prismix Görsel Dönüştürücü", "eyebrow": "Ücretsiz online görsel araçları", "heroLine": "Hızlı. Şık. Güçlü.", "heroP": "Görsellerinizi dönüştürün, sıkıştırın, yeniden boyutlandırın, kırpın, büyütün ve parçalara bölün. Gizlilik odaklı Prismix ile görselinizi yükleyin, aracı seçin ve sonucu anında indirin.", "upload": "Görsel yükle", "guides": "Görsel rehberlerini oku", "start": "Buradan başlayın", "uploadTitle": "Önce görsellerinizi yükleyin", "uploadP": "Dosyalar kalıcı olarak saklanmaz. Sayfa yenilendiğinde seçili dosyalar, önizlemeler ve geçici bağlantılar temizlenir.", "drop": "Buraya en fazla 10 dosya bırakın", "choose": "Dosya Seç", "processing": "İşlem başlatıldı...", "success": "Başarılı! Optimize edilmiş dosyanız hazır.", "download": "İndir", "brandSmall": "Görsel Dönüştürücü", "nav": {"home": "Ana sayfa", "convert": "Dönüştür", "compress": "Sıkıştır", "resize": "Boyutlandır", "crop": "Kırp", "split": "Görseli Böl", "formats": "Formatlar", "guides": "Rehberler", "faq": "SSS", "contact": "İletişim"}, "modes": {"convert": "Dönüştür", "compress": "Sıkıştır", "resize": "Boyutlandır", "crop": "Kırp", "upscale": "Büyüt", "split": "Böl"}, "toolText": {"convert": "Görsellerinizi birkaç tıklamayla ihtiyacınız olan formata çevirin.", "compress": "Canlı kalite kontrolüyle görselleri hedef dosya boyutuna yaklaştırın.", "resize": "Oranları koruyarak piksel veya yüzde değerleriyle yeniden boyutlandırın.", "crop": "Kırpma alanını sürükleyin, köşelerden büyütüp küçültün ve net çerçeveyi alın.", "upscale": "İstenmeyen büyütmeyi önleyerek görsel boyutlarını dikkatli şekilde artırın.", "split": "Bir görseli eşit satır, sütun veya tam grid parçalarına ayırın ve ZIP olarak indirin."}, "toolButtons": {"convert": "Şimdi Dönüştür", "compress": "Şimdi Sıkıştır", "resize": "Boyutlandır", "crop": "Kırpmayı Uygula", "upscale": "Büyüt", "split": "Görseli Böl"}, "controls": {"outputFormat": "Çıktı formatı", "quality": "Kalite", "targetKb": "Hedef boyut KB", "width": "Genişlik px", "height": "Yükseklik px", "fitMode": "Sığdırma modu", "preventEnlargement": "İstenmeyen büyütmeyi önle", "splitMethod": "Bölme yöntemi", "rows": "Satır", "columns": "Sütun", "namingStyle": "İsimlendirme", "left": "Sol", "top": "Üst", "cropWidth": "Genişlik", "cropHeight": "Yükseklik", "cropEmpty": "Önizleme ve kırpma alanı seçimi için bir görsel yükleyin", "cropHelp": "Kırpma kutusunu görselin üzerine sürükleyin, köşe veya kenarlardan yeniden boyutlandırın. Sayısal değerler otomatik güncellenir.", "splitTip": "Split Image aracı görseli eşit parçalara böler ve ZIP olarak indirir. Yatay şeritler için satır, dikey şeritler için sütun, tam grid için satır ve sütun seçin."}, "options": {"fitInside": "Kutu içinde tut", "fitCover": "Kapla ve kırp", "fitContain": "Arka planla sığdır", "fitFill": "Esneterek doldur", "fitOutside": "Dışa taşır", "splitBoth": "Satır ve sütun birlikte", "splitRows": "Sadece satırlar", "splitColumns": "Sadece sütunlar", "nameGrid": "Satır ve sütun etiketleri", "nameSequence": "Basit sıra"}, "trust": ["Bellek odaklı işlem", "Toplu sınır: 10 dosya", "Dönüştür • Sıkıştır • Boyutlandır • Kırp • Böl"], "sections": {"formatsTitle": "Popüler görsel formatları arasında dönüştürme", "popularTitle": "Yüksek arama niyetli görsel dönüşüm kısayolları", "benefits": "Platform avantajları", "faqTitle": "Sıkça sorulan sorular"}, "dashboard": [["Dönüştür", "100+ format arasında dönüştür"], ["Sıkıştır", "Netliği koruyarak dosya boyutunu azalt"], ["Boyutlandır", "Ölçüleri anında değiştir"], ["Kırp", "Görselleri hassas biçimde kırp"], ["Görseli Böl", "Görseli satır ve sütunlara ayır"], ["Diğer Araçlar", "Tüm formatlar tek yerde"]], "trustStrip": [["Güvenli ve Gizli", "Bellek öncelikli işlem"], ["Çok Hızlı", "Saniyeler içinde dönüştür"], ["Kayıt Gerekmez", "Hemen başlayın"]], "features": [["Hızlı görsel dönüştürme", "Fotoğrafları, ekran görüntülerini ve grafik dosyalarını modern web formatlarına kolayca dönüştürün."], ["Hedef boyutla sıkıştırma", "20 MB gibi büyük görselleri kalite ve boyut dengesini koruyarak 1 MB gibi hedeflere yaklaştırın."], ["Toplu işlem", "Tek görsel yükleyin veya aynı anda 10 dosyaya kadar işlem yapın."], ["Gizlilik odaklı akış", "Seçilen dosyalar mevcut istek için işlenir; sayfa yenilendiğinde yerel önizlemeler temizlenir."]], "faqEyebrow": "Sorular", "faq": [["PNG dosyasını JPG formatına çevirebilir miyim?", "Evet. PNG dosyanızı yükleyin, çıktı formatı olarak JPG seçin ve dönüştürün."], ["JPG dosyasını WebP yapabilir miyim?", "Evet. WebP modern web için güçlü bir formattır ve çıktı seçeneklerinde bulunur."], ["Bir görseli eşit parçalara bölebilir miyim?", "Evet. Split Image aracı görseli satır, sütun veya grid olarak böler ve tüm parçaları ZIP halinde indirir."], ["20 MB görseli 1 MB seviyesine sıkıştırabilir miyim?", "Sıkıştır modunu kullanıp 1024 KB gibi hedef boyut belirleyin. Çok detaylı görsellerde kalite veya ölçü azaltımı gerekebilir."], ["Görselleri tam ölçüye göre boyutlandırabilir miyim?", "Evet. Genişlik ve yükseklik girip uygun sığdırma modunu seçebilirsiniz."], ["Kırpma modunda önizleme var mı?", "Evet. Kırpma alanını görsel üzerinde sürükleyip yeniden boyutlandırabilirsiniz."], ["Görsellerim saklanıyor mu?", "Hayır. Dosyalar mevcut işlem için bellekte işlenir; sayfa yenilendiğinde önizlemeler temizlenir."], ["Dosya sınırı var mı?", "Evet. Hız ve kararlılık için toplu yükleme 10 dosyayla sınırlıdır."]], "footer": "Güvenli, gizlilik odaklı görsel dönüştürme, sıkıştırma, boyutlandırma, kırpma ve image split araçları. Oluşturan", "footerRights": "Tüm hakları saklıdır.", "footerLinks": {"privacy": "Gizlilik", "terms": "Kullanım Şartları", "contact": "İletişim", "sitemap": "Site Haritası"}}, "es": {"localeName": "Español", "language": "Idioma", "chooseLanguage": "Elegir idioma", "languageChanged": "El idioma se cambió a {language} según tu preferencia. Puedes cambiarlo de nuevo al final de la página.", "footerChangeLanguage": "Cambiar idioma en cualquier momento", "seoTitle": "Prismix Image Converter | Convertidor, compresor, redimensionador y divisor de imágenes gratis", "seoDescription": "Convertidor de imágenes online gratis para convertir, comprimir, redimensionar, recortar, mejorar y dividir imágenes JPG, PNG, WebP, AVIF, HEIC, HEIF, SVG y TIFF.", "seoKeywords": "convertidor de imágenes, convertir imagen online, comprimir imagen, redimensionar imagen, recortar imagen, dividir imagen, image split, HEIC a JPG, PNG a JPG, JPG a WebP", "h1": "Convertidor de imágenes Prismix", "eyebrow": "Herramientas de imagen online gratis", "heroLine": "Rápido. Elegante. Potente.", "heroP": "Convierte, comprime, redimensiona, recorta, mejora y divide imágenes con una herramienta rápida, colorida y centrada en la privacidad.", "upload": "Subir imagen", "guides": "Leer guías de imagen", "start": "Empieza aquí", "uploadTitle": "Sube tus imágenes primero", "uploadP": "Los archivos no se guardan. Al recargar la página se borran los archivos seleccionados y las vistas previas locales.", "drop": "Suelta hasta 10 archivos aquí", "choose": "Elegir archivos", "processing": "Procesando...", "success": "¡Listo! Tu archivo optimizado está preparado.", "download": "Descargar", "brandSmall": "Convertidor de imágenes", "nav": {"home": "Inicio", "convert": "Convertir", "compress": "Comprimir", "resize": "Redimensionar", "crop": "Recortar", "split": "Dividir imagen", "formats": "Formatos", "guides": "Guías", "faq": "FAQ", "contact": "Contacto"}, "modes": {"convert": "Convertir", "compress": "Comprimir", "resize": "Redimensionar", "crop": "Recortar", "upscale": "Mejorar", "split": "Dividir"}, "toolText": {"convert": "Convierte imágenes al formato que necesitas en pocos clics.", "compress": "Comprime imágenes a un tamaño objetivo con control de calidad.", "resize": "Cambia el tamaño por píxeles o porcentaje manteniendo proporciones.", "crop": "Arrastra el cuadro de recorte y ajusta sus tiradores con precisión.", "upscale": "Aumenta dimensiones con cuidado y sin ampliación no deseada.", "split": "Divide una imagen en filas, columnas o cuadrícula y descarga un ZIP."}, "toolButtons": {"convert": "Convertir ahora", "compress": "Comprimir ahora", "resize": "Redimensionar", "crop": "Aplicar recorte", "upscale": "Mejorar ahora", "split": "Dividir imagen"}, "controls": {"outputFormat": "Formato de salida", "quality": "Calidad", "targetKb": "Tamaño objetivo KB", "width": "Ancho px", "height": "Alto px", "fitMode": "Modo de ajuste", "preventEnlargement": "Evitar ampliación no deseada", "splitMethod": "Método de división", "rows": "Filas", "columns": "Columnas", "namingStyle": "Estilo de nombres", "left": "Izquierda", "top": "Arriba", "cropWidth": "Ancho", "cropHeight": "Alto", "cropEmpty": "Sube una imagen para previsualizar y seleccionar el área de recorte", "cropHelp": "Arrastra el cuadro sobre la imagen y cambia su tamaño desde esquinas o bordes. Los valores numéricos se actualizan automáticamente.", "splitTip": "Split Image divide la imagen en piezas iguales y las descarga como ZIP. Usa filas para tiras horizontales, columnas para tiras verticales o ambas para una cuadrícula."}, "options": {"fitInside": "Mantener dentro del cuadro", "fitCover": "Cubrir y recortar", "fitContain": "Contener con fondo", "fitFill": "Estirar para llenar", "fitOutside": "Fuera", "splitBoth": "Filas y columnas", "splitRows": "Solo filas", "splitColumns": "Solo columnas", "nameGrid": "Etiquetas de fila y columna", "nameSequence": "Secuencia simple"}, "trust": ["Procesamiento en memoria", "Límite por lote: 10 archivos", "Convertir • Comprimir • Redimensionar • Recortar • Dividir"], "sections": {"formatsTitle": "Convierte entre formatos de imagen populares", "popularTitle": "Conversiones de imagen más buscadas", "benefits": "Beneficios de la plataforma", "faqTitle": "Preguntas frecuentes"}, "dashboard": [["Convert", "Convert between 100+ formats"], ["Compress", "Reduce file size without losing clarity"], ["Resize", "Change dimensions instantly"], ["Crop", "Crop images with precision"], ["Split Image", "Slice images into rows and columns"], ["More Tools", "All formats in one place"]], "trustStrip": [["Seguro y privado", "Procesamiento en memoria"], ["Muy rápido", "Convierte en segundos"], ["Sin registro", "Empieza al instante"]], "features": [["Conversión rápida de imágenes", "Convierte fotos, gráficos y capturas a formatos modernos con un flujo simple de subida, selector e descarga."], ["Compresión con tamaño objetivo", "Reduce imágenes grandes hacia objetivos como 1 MB equilibrando calidad y tamaño."], ["Procesamiento por lotes", "Sube una imagen o procesa hasta 10 archivos a la vez con resultados claros."], ["Flujo privado", "Los archivos seleccionados se procesan para la solicitud actual y las vistas previas se limpian al recargar."]], "faqEyebrow": "Preguntas", "faq": [["¿Puedo convertir PNG a JPG?", "Sí. Sube tu PNG, elige JPG como formato de salida y pulsa Convertir ahora."], ["¿Puedo convertir JPG a WebP?", "Sí. WebP es un formato moderno y está disponible en el selector de salida."], ["¿Puedo dividir una imagen en partes iguales?", "Sí. Split Image divide la imagen por filas, columnas o cuadrícula y descarga un ZIP."], ["¿Puedo comprimir una imagen de 20 MB cerca de 1 MB?", "Usa el modo Comprimir y define 1024 KB como tamaño objetivo. Las imágenes muy detalladas pueden necesitar menor calidad o tamaño."], ["¿Puedo redimensionar a medidas exactas?", "Sí. Introduce ancho y alto y elige un modo de ajuste."], ["¿El modo recorte tiene vista previa?", "Sí. Puedes arrastrar y redimensionar el área de recorte directamente sobre la foto."], ["¿Guardan mis imágenes?", "No. Los archivos se procesan en memoria para la solicitud actual y las vistas previas se borran al recargar."], ["¿Hay límite de archivos?", "Sí. El límite es de 10 archivos para mantener velocidad y estabilidad."]], "footer": "Herramientas seguras y privadas para convertir, comprimir, redimensionar, recortar y dividir imágenes. Creado por", "footerRights": "Todos los derechos reservados.", "footerLinks": {"privacy": "Privacidad", "terms": "Términos", "contact": "Contacto", "sitemap": "Mapa del sitio"}}, "pt-BR": {"localeName": "Português", "language": "Idioma", "chooseLanguage": "Escolher idioma", "languageChanged": "O idioma foi alterado para {language} conforme sua preferência. Você pode mudar novamente no final da página.", "footerChangeLanguage": "Alterar idioma a qualquer momento", "seoTitle": "Prismix Image Converter | Conversor, compressor, redimensionador e divisor de imagens grátis", "seoDescription": "Conversor de imagens online grátis para converter, comprimir, redimensionar, recortar, ampliar e dividir JPG, PNG, WebP, AVIF, HEIC, HEIF, SVG e TIFF.", "seoKeywords": "conversor de imagens, converter imagem online, comprimir imagem, redimensionar imagem, recortar imagem, dividir imagem, HEIC para JPG, PNG para JPG, JPG para WebP", "h1": "Conversor de Imagens Prismix", "eyebrow": "Kit gratuito de imagens online", "heroLine": "Rápido. Bonito. Poderoso.", "heroP": "Converta, comprima, redimensione, recorte, amplie e divida imagens com uma ferramenta rápida, colorida e focada em privacidade.", "upload": "Enviar imagem", "guides": "Ler guias de imagem", "start": "Comece aqui", "uploadTitle": "Envie suas imagens primeiro", "uploadP": "Os arquivos não são armazenados. Recarregar a página limpa arquivos selecionados e prévias locais.", "drop": "Solte até 10 arquivos aqui", "choose": "Escolher arquivos", "processing": "Processando...", "success": "Pronto! Seu arquivo otimizado está disponível.", "download": "Baixar", "brandSmall": "Conversor de imagens", "nav": {"home": "Início", "convert": "Converter", "compress": "Comprimir", "resize": "Redimensionar", "crop": "Recortar", "split": "Dividir imagem", "formats": "Formatos", "guides": "Guias", "faq": "FAQ", "contact": "Contato"}, "modes": {"convert": "Converter", "compress": "Comprimir", "resize": "Redimensionar", "crop": "Recortar", "upscale": "Ampliar", "split": "Dividir"}, "toolText": {"convert": "Converta imagens para o formato ideal em poucos cliques.", "compress": "Comprima imagens para um tamanho alvo com controle de qualidade.", "resize": "Redimensione por pixels ou porcentagem mantendo proporções.", "crop": "Arraste a caixa de recorte e ajuste com precisão.", "upscale": "Aumente dimensões com cuidado, sem ampliação indesejada.", "split": "Divida uma imagem em linhas, colunas ou grade e baixe um ZIP."}, "toolButtons": {"convert": "Converter agora", "compress": "Comprimir agora", "resize": "Redimensionar", "crop": "Aplicar recorte", "upscale": "Ampliar agora", "split": "Dividir imagem"}, "controls": {"outputFormat": "Formato de saída", "quality": "Qualidade", "targetKb": "Tamanho alvo KB", "width": "Largura px", "height": "Altura px", "fitMode": "Modo de ajuste", "preventEnlargement": "Evitar ampliação indesejada", "splitMethod": "Método de divisão", "rows": "Linhas", "columns": "Colunas", "namingStyle": "Estilo de nome", "left": "Esquerda", "top": "Topo", "cropWidth": "Largura", "cropHeight": "Altura", "cropEmpty": "Envie uma imagem para visualizar e selecionar a área de recorte", "cropHelp": "Arraste a caixa de recorte sobre a imagem e redimensione pelos cantos ou bordas. Os valores numéricos são atualizados automaticamente.", "splitTip": "Split Image divide a imagem em partes iguais e baixa tudo como ZIP. Use linhas para faixas horizontais, colunas para faixas verticais ou ambos para grade."}, "options": {"fitInside": "Manter dentro da caixa", "fitCover": "Cobrir e recortar", "fitContain": "Conter com fundo", "fitFill": "Preencher esticando", "fitOutside": "Fora", "splitBoth": "Linhas e colunas", "splitRows": "Apenas linhas", "splitColumns": "Apenas colunas", "nameGrid": "Rótulos de linha e coluna", "nameSequence": "Sequência simples"}, "trust": ["Processamento em memória", "Limite por lote: 10 arquivos", "Converter • Comprimir • Redimensionar • Recortar • Dividir"], "sections": {"formatsTitle": "Converta entre formatos de imagem populares", "popularTitle": "Atalhos de conversão mais buscados", "benefits": "Benefícios da plataforma", "faqTitle": "Perguntas frequentes"}, "dashboard": [["Converter", "Converter entre 100+ formatos"], ["Comprimir", "Reduzir tamanho sem perder clareza"], ["Redimensionar", "Alterar dimensões instantaneamente"], ["Recortar", "Recortar imagens com precisão"], ["Dividir imagem", "Fatiar em linhas e colunas"], ["Mais ferramentas", "Todos os formatos em um lugar"]], "trustStrip": [["Seguro e privado", "Processamento em memória"], ["Muito rápido", "Converter em segundos"], ["Sem cadastro", "Comece instantaneamente"]], "features": [["Fast image conversion", "Convert photos, graphics and screenshots into modern web formats with a simple upload, format selector and download flow."], ["Compression with target size", "Reduce large 20 MB images toward smaller targets such as 1 MB by combining quality optimization and careful resizing when needed."], ["Batch processing", "Upload one image or process up to 10 files at once, with clear result cards and ZIP output for multi-file conversion."], ["Privacy-first workflow", "Selected files are handled in memory for the current request. Browser-side previews are cleared when the page reloads."]], "faqEyebrow": "Perguntas", "faq": [["Posso converter PNG para JPG?", "Sim. Envie o PNG, escolha JPG como saída e clique em Converter agora."], ["Posso converter JPG para WebP?", "Sim. WebP é um formato moderno e está disponível no seletor de saída."], ["Posso dividir uma imagem em partes iguais?", "Sim. Split Image divide por linhas, colunas ou grade e baixa um ZIP."], ["Posso comprimir uma imagem de 20 MB para perto de 1 MB?", "Use Comprimir e defina 1024 KB como alvo. Imagens muito detalhadas podem exigir qualidade ou dimensão menor."], ["Posso redimensionar para medidas exatas?", "Sim. Informe largura, altura e escolha o modo de ajuste."], ["O modo recorte tem prévia?", "Sim. Você pode arrastar e redimensionar a área de recorte diretamente na foto."], ["Minhas imagens são armazenadas?", "Não. Os arquivos são processados em memória e as prévias são limpas ao recarregar."], ["Há limite de arquivos?", "Sim. O limite é de 10 arquivos para manter estabilidade e velocidade."]], "footer": "Ferramentas seguras e privadas para converter, comprimir, redimensionar, recortar e dividir imagens. Criado por", "footerRights": "Todos os direitos reservados.", "footerLinks": {"privacy": "Privacidade", "terms": "Termos", "contact": "Contato", "sitemap": "Mapa do site"}}, "de": {"localeName": "Deutsch", "language": "Sprache", "chooseLanguage": "Sprache wählen", "languageChanged": "Die Sprache wurde wie gewünscht auf {language} umgestellt. Du kannst sie unten auf der Seite erneut ändern.", "footerChangeLanguage": "Sprache jederzeit ändern", "seoTitle": "Prismix Image Converter | Kostenloser Bildkonverter, Kompressor, Resizer und Bildsplitter", "seoDescription": "Kostenloser Online-Bildkonverter zum Konvertieren, Komprimieren, Skalieren, Zuschneiden, Hochskalieren und Teilen von JPG, PNG, WebP, AVIF, HEIC, HEIF, SVG und TIFF.", "seoKeywords": "bildkonverter, bild online konvertieren, bild komprimieren, bildgröße ändern, bild zuschneiden, bild teilen, HEIC in JPG, PNG in JPG, JPG in WebP", "h1": "Prismix Bildkonverter", "eyebrow": "Kostenloses Online-Bildtool", "heroLine": "Schnell. Schön. Leistungsstark.", "heroP": "Konvertiere, komprimiere, skaliere, schneide, vergrößere und teile Bilder mit einem schnellen, privaten Online-Bildtool.", "upload": "Bild hochladen", "guides": "Bildanleitungen lesen", "start": "Hier starten", "uploadTitle": "Lade zuerst deine Bilder hoch", "uploadP": "Dateien werden nicht dauerhaft gespeichert. Beim Neuladen werden Auswahl und lokale Vorschauen gelöscht.", "drop": "Bis zu 10 Dateien hier ablegen", "choose": "Dateien auswählen", "processing": "Wird verarbeitet...", "success": "Fertig! Deine optimierte Datei ist bereit.", "download": "Herunterladen", "brandSmall": "Bildkonverter", "nav": {"home": "Start", "convert": "Konvertieren", "compress": "Komprimieren", "resize": "Größe ändern", "crop": "Zuschneiden", "split": "Bild teilen", "formats": "Formate", "guides": "Anleitungen", "faq": "FAQ", "contact": "Kontakt"}, "modes": {"convert": "Konvertieren", "compress": "Komprimieren", "resize": "Größe ändern", "crop": "Zuschneiden", "upscale": "Hochskalieren", "split": "Teilen"}, "toolText": {"convert": "Konvertiere Bilder mit wenigen Klicks ins gewünschte Format.", "compress": "Komprimiere Bilder auf eine Zielgröße mit Qualitätskontrolle.", "resize": "Ändere Größe nach Pixeln oder Prozenten und behalte Proportionen.", "crop": "Ziehe den Zuschnittbereich und passe die Griffe präzise an.", "upscale": "Erhöhe Bildabmessungen kontrolliert ohne unerwünschte Vergrößerung.", "split": "Teile ein Bild in Zeilen, Spalten oder Raster und lade ein ZIP herunter."}, "toolButtons": {"convert": "Jetzt konvertieren", "compress": "Jetzt komprimieren", "resize": "Größe ändern", "crop": "Zuschneiden", "upscale": "Hochskalieren", "split": "Bild teilen"}, "controls": {"outputFormat": "Ausgabeformat", "quality": "Qualität", "targetKb": "Zielgröße KB", "width": "Breite px", "height": "Höhe px", "fitMode": "Anpassungsmodus", "preventEnlargement": "Unerwünschte Vergrößerung verhindern", "splitMethod": "Teilungsmethode", "rows": "Zeilen", "columns": "Spalten", "namingStyle": "Benennung", "left": "Links", "top": "Oben", "cropWidth": "Breite", "cropHeight": "Höhe", "cropEmpty": "Lade ein Bild hoch, um den Zuschnittbereich auszuwählen", "cropHelp": "Ziehe den Zuschnittbereich über das Bild und ändere ihn an Ecken oder Kanten. Numerische Werte werden automatisch aktualisiert.", "splitTip": "Bild teilen erstellt gleiche Bildteile und lädt sie als ZIP herunter. Nutze Zeilen, Spalten oder beides für ein Raster."}, "options": {"fitInside": "In Box halten", "fitCover": "Abdecken und zuschneiden", "fitContain": "Mit Hintergrund einpassen", "fitFill": "Gestreckt füllen", "fitOutside": "Außen", "splitBoth": "Zeilen und Spalten", "splitRows": "Nur Zeilen", "splitColumns": "Nur Spalten", "nameGrid": "Zeilen- und Spaltenlabels", "nameSequence": "Einfache Reihenfolge"}, "trust": ["Speicherbasierte Verarbeitung", "Batch-Limit: 10 Dateien", "Konvertieren • Komprimieren • Skalieren • Zuschneiden • Teilen"], "sections": {"formatsTitle": "Zwischen beliebten Bildformaten konvertieren", "popularTitle": "Häufig gesuchte Bildkonvertierungen", "benefits": "Vorteile der Plattform", "faqTitle": "Häufige Fragen"}, "dashboard": [["Konvertieren", "Zwischen 100+ Formaten wechseln"], ["Komprimieren", "Dateigröße ohne Klarheitsverlust reduzieren"], ["Größe ändern", "Abmessungen sofort anpassen"], ["Zuschneiden", "Bilder präzise zuschneiden"], ["Bild teilen", "In Zeilen und Spalten schneiden"], ["Mehr Tools", "Alle Formate an einem Ort"]], "trustStrip": [["Sicher & privat", "Speicherbasierte Verarbeitung"], ["Blitzschnell", "In Sekunden konvertieren"], ["Keine Anmeldung", "Sofort starten"]], "features": [["Schnelle Bildkonvertierung", "Konvertiere Fotos, Grafiken und Screenshots mit Upload, Formatwahl und Download in moderne Formate."], ["Komprimierung mit Zielgröße", "Reduziere große Bilder gezielt, zum Beispiel Richtung 1 MB, mit ausgewogener Qualität."], ["Batch-Verarbeitung", "Verarbeite ein Bild oder bis zu 10 Dateien gleichzeitig mit klaren Ergebnis-Karten."], ["Datenschutzorientierter Ablauf", "Ausgewählte Dateien werden nur für die aktuelle Anfrage verarbeitet und lokale Vorschauen beim Neuladen gelöscht."]], "faqEyebrow": "Fragen", "faq": [["Kann ich PNG in JPG konvertieren?", "Ja. Lade dein PNG hoch, wähle JPG als Ausgabeformat und klicke auf Konvertieren."], ["Kann ich JPG in WebP konvertieren?", "Ja. WebP ist ein modernes Format und im Ausgabeformat verfügbar."], ["Kann ich ein Bild in gleiche Teile teilen?", "Ja. Bild teilen trennt nach Zeilen, Spalten oder Raster und lädt ein ZIP herunter."], ["Kann ich ein 20-MB-Bild Richtung 1 MB komprimieren?", "Nutze Komprimieren und setze 1024 KB als Ziel. Sehr detaillierte Bilder brauchen eventuell niedrigere Qualität oder kleinere Abmessungen."], ["Kann ich exakte Abmessungen einstellen?", "Ja. Gib Breite und Höhe ein und wähle den passenden Anpassungsmodus."], ["Gibt es eine Vorschau beim Zuschneiden?", "Ja. Der Zuschnittbereich kann direkt auf dem Foto gezogen und angepasst werden."], ["Werden meine Bilder gespeichert?", "Nein. Dateien werden im Speicher verarbeitet und lokale Vorschauen beim Neuladen gelöscht."], ["Gibt es ein Dateilimit?", "Ja. Maximal 10 Dateien für stabile und schnelle Verarbeitung."]], "footer": "Sichere, datenschutzorientierte Tools zum Konvertieren, Komprimieren, Skalieren, Zuschneiden und Teilen von Bildern. Erstellt von", "footerRights": "Alle Rechte vorbehalten.", "footerLinks": {"privacy": "Datenschutz", "terms": "Bedingungen", "contact": "Kontakt", "sitemap": "Sitemap"}}, "fr": {"localeName": "Français", "language": "Langue", "chooseLanguage": "Choisir la langue", "languageChanged": "La langue a été changée en {language} selon votre préférence. Vous pouvez la modifier en bas de la page.", "footerChangeLanguage": "Changer la langue à tout moment", "seoTitle": "Prismix Image Converter | Convertisseur, compresseur, redimensionneur et découpeur d’images gratuit", "seoDescription": "Convertisseur d’images en ligne gratuit pour convertir, compresser, redimensionner, recadrer, améliorer et découper JPG, PNG, WebP, AVIF, HEIC, HEIF, SVG et TIFF.", "seoKeywords": "convertisseur image, convertir image en ligne, compresser image, redimensionner image, recadrer image, découper image, HEIC en JPG, PNG en JPG, JPG en WebP", "h1": "Convertisseur d’images Prismix", "eyebrow": "Boîte à outils image gratuite", "heroLine": "Rapide. Élégant. Puissant.", "heroP": "Convertissez, compressez, redimensionnez, recadrez, améliorez et découpez vos images avec un outil rapide et respectueux de la confidentialité.", "upload": "Importer une image", "guides": "Lire les guides image", "start": "Commencer ici", "uploadTitle": "Importez d’abord vos images", "uploadP": "Les fichiers ne sont pas conservés. Recharger la page supprime les sélections et aperçus locaux.", "drop": "Déposez jusqu’à 10 fichiers ici", "choose": "Choisir des fichiers", "processing": "Traitement...", "success": "Succès ! Votre fichier optimisé est prêt.", "download": "Télécharger", "brandSmall": "Convertisseur d’images", "nav": {"home": "Accueil", "convert": "Convertir", "compress": "Compresser", "resize": "Redimensionner", "crop": "Recadrer", "split": "Découper image", "formats": "Formats", "guides": "Guides", "faq": "FAQ", "contact": "Contact"}, "modes": {"convert": "Convertir", "compress": "Compresser", "resize": "Redimensionner", "crop": "Recadrer", "upscale": "Agrandir", "split": "Découper"}, "toolText": {"convert": "Convertissez vos images au format souhaité en quelques clics.", "compress": "Compressez les images vers une taille cible avec contrôle qualité.", "resize": "Redimensionnez par pixels ou pourcentage en conservant les proportions.", "crop": "Déplacez la zone de recadrage et ajustez-la avec précision.", "upscale": "Augmentez les dimensions avec soin.", "split": "Découpez une image en lignes, colonnes ou grille et téléchargez un ZIP."}, "toolButtons": {"convert": "Convertir", "compress": "Compresser", "resize": "Redimensionner", "crop": "Appliquer le recadrage", "upscale": "Agrandir", "split": "Découper l’image"}, "controls": {"outputFormat": "Format de sortie", "quality": "Qualité", "targetKb": "Taille cible KB", "width": "Largeur px", "height": "Hauteur px", "fitMode": "Mode d’ajustement", "preventEnlargement": "Éviter l’agrandissement non souhaité", "splitMethod": "Méthode de découpe", "rows": "Lignes", "columns": "Colonnes", "namingStyle": "Nommage", "left": "Gauche", "top": "Haut", "cropWidth": "Largeur", "cropHeight": "Hauteur", "cropEmpty": "Importez une image pour prévisualiser et choisir la zone de recadrage", "cropHelp": "Faites glisser la zone de recadrage puis redimensionnez-la depuis les coins ou les bords. Les valeurs numériques se mettent à jour.", "splitTip": "Split Image crée des morceaux égaux et les télécharge en ZIP. Utilisez lignes, colonnes ou les deux pour une grille."}, "options": {"fitInside": "Garder dans la zone", "fitCover": "Couvrir et recadrer", "fitContain": "Contenir avec fond", "fitFill": "Étirer pour remplir", "fitOutside": "Extérieur", "splitBoth": "Lignes et colonnes", "splitRows": "Lignes seulement", "splitColumns": "Colonnes seulement", "nameGrid": "Étiquettes ligne/colonne", "nameSequence": "Séquence simple"}, "trust": ["Traitement en mémoire", "Limite par lot : 10 fichiers", "Convertir • Compresser • Redimensionner • Recadrer • Découper"], "sections": {"formatsTitle": "Convertir entre formats d’image populaires", "popularTitle": "Raccourcis de conversion les plus recherchés", "benefits": "Avantages de la plateforme", "faqTitle": "Questions fréquentes"}, "dashboard": [["Convertir", "Convertir entre plus de 100 formats"], ["Compresser", "Réduire la taille sans perdre en clarté"], ["Redimensionner", "Changer les dimensions instantanément"], ["Recadrer", "Recadrer avec précision"], ["Découper image", "Découper en lignes et colonnes"], ["Plus d’outils", "Tous les formats au même endroit"]], "trustStrip": [["Sécurisé et privé", "Traitement en mémoire"], ["Ultra rapide", "Conversion en secondes"], ["Sans inscription", "Commencer immédiatement"]], "features": [["Conversion rapide d’images", "Convertissez photos, graphiques et captures vers des formats web modernes avec un flux simple."], ["Compression avec taille cible", "Réduisez les grandes images vers des objectifs comme 1 MB en équilibrant qualité et taille."], ["Traitement par lot", "Traitez une image ou jusqu’à 10 fichiers à la fois avec des résultats clairs."], ["Flux privé", "Les fichiers sont traités pour la requête actuelle et les aperçus locaux sont supprimés au rechargement."]], "faqEyebrow": "Questions", "faq": [["Puis-je convertir PNG en JPG ?", "Oui. Importez le PNG, choisissez JPG comme format de sortie et lancez la conversion."], ["Puis-je convertir JPG en WebP ?", "Oui. WebP est un format moderne disponible dans le sélecteur de sortie."], ["Puis-je découper une image en parties égales ?", "Oui. Split Image découpe en lignes, colonnes ou grille et télécharge un ZIP."], ["Puis-je compresser une image de 20 MB vers 1 MB ?", "Utilisez Compresser et définissez 1024 KB comme cible. Les images très détaillées peuvent nécessiter une qualité ou dimension plus faible."], ["Puis-je redimensionner à des dimensions exactes ?", "Oui. Entrez largeur et hauteur puis choisissez le mode d’ajustement."], ["Le recadrage affiche-t-il un aperçu ?", "Oui. Vous pouvez déplacer et redimensionner la zone de recadrage sur la photo."], ["Stockez-vous mes images ?", "Non. Les fichiers sont traités en mémoire et les aperçus locaux sont supprimés au rechargement."], ["Y a-t-il une limite de fichiers ?", "Oui. La limite est de 10 fichiers pour garder l’outil stable et rapide."]], "footer": "Outils sécurisés et privés pour convertir, compresser, redimensionner, recadrer et découper des images. Créé par", "footerRights": "Tous droits réservés.", "footerLinks": {"privacy": "Confidentialité", "terms": "Conditions", "contact": "Contact", "sitemap": "Plan du site"}}, "it": {"localeName": "Italiano", "language": "Lingua", "chooseLanguage": "Scegli lingua", "languageChanged": "La lingua è stata cambiata in {language} come richiesto. Puoi modificarla di nuovo in fondo alla pagina.", "footerChangeLanguage": "Cambia lingua in qualsiasi momento", "seoTitle": "Prismix Image Converter | Convertitore, compressore, ridimensionatore e divisore immagini gratis", "seoDescription": "Convertitore immagini online gratis per convertire, comprimere, ridimensionare, ritagliare, migliorare e dividere JPG, PNG, WebP, AVIF, HEIC, HEIF, SVG e TIFF.", "seoKeywords": "convertitore immagini, convertire immagine online, comprimere immagine, ridimensionare immagine, ritagliare immagine, dividere immagine, HEIC in JPG, PNG in JPG", "h1": "Convertitore immagini Prismix", "eyebrow": "Toolkit immagini online gratuito", "heroLine": "Veloce. Elegante. Potente.", "heroP": "Converti, comprimi, ridimensiona, ritaglia, ingrandisci e dividi immagini con uno strumento rapido e attento alla privacy.", "upload": "Carica immagine", "guides": "Leggi le guide", "start": "Inizia qui", "uploadTitle": "Carica prima le immagini", "uploadP": "I file non vengono salvati. Ricaricando la pagina, selezioni e anteprime locali vengono cancellate.", "drop": "Trascina qui fino a 10 file", "choose": "Scegli file", "processing": "Elaborazione...", "success": "Fatto! Il file ottimizzato è pronto.", "download": "Scarica", "brandSmall": "Convertitore immagini", "nav": {"home": "Home", "convert": "Converti", "compress": "Comprimi", "resize": "Ridimensiona", "crop": "Ritaglia", "split": "Dividi immagine", "formats": "Formati", "guides": "Guide", "faq": "FAQ", "contact": "Contatto"}, "modes": {"convert": "Converti", "compress": "Comprimi", "resize": "Ridimensiona", "crop": "Ritaglia", "upscale": "Ingrandisci", "split": "Dividi"}, "toolText": {"convert": "Converti immagini nel formato desiderato in pochi clic.", "compress": "Comprimi immagini a una dimensione target con controllo qualità.", "resize": "Ridimensiona in pixel o percentuale mantenendo le proporzioni.", "crop": "Trascina il riquadro di ritaglio e regola le maniglie con precisione.", "upscale": "Aumenta le dimensioni con attenzione.", "split": "Dividi un’immagine in righe, colonne o griglia e scarica un ZIP."}, "toolButtons": {"convert": "Converti ora", "compress": "Comprimi ora", "resize": "Ridimensiona", "crop": "Applica ritaglio", "upscale": "Ingrandisci", "split": "Dividi immagine"}, "controls": {"outputFormat": "Formato di uscita", "quality": "Qualità", "targetKb": "Dimensione target KB", "width": "Larghezza px", "height": "Altezza px", "fitMode": "Modalità adattamento", "preventEnlargement": "Evita ingrandimento indesiderato", "splitMethod": "Metodo di divisione", "rows": "Righe", "columns": "Colonne", "namingStyle": "Stile nomi", "left": "Sinistra", "top": "Alto", "cropWidth": "Larghezza", "cropHeight": "Altezza", "cropEmpty": "Carica un’immagine per visualizzare e selezionare l’area di ritaglio", "cropHelp": "Trascina il riquadro di ritaglio sull’immagine e ridimensionalo da angoli o bordi. I valori si aggiornano automaticamente.", "splitTip": "Split Image divide l’immagine in parti uguali e scarica un ZIP. Usa righe, colonne o entrambi per una griglia."}, "options": {"fitInside": "Mantieni nel riquadro", "fitCover": "Copri e ritaglia", "fitContain": "Contieni con sfondo", "fitFill": "Allunga per riempire", "fitOutside": "Esterno", "splitBoth": "Righe e colonne", "splitRows": "Solo righe", "splitColumns": "Solo colonne", "nameGrid": "Etichette riga e colonna", "nameSequence": "Sequenza semplice"}, "trust": ["Elaborazione in memoria", "Limite batch: 10 file", "Converti • Comprimi • Ridimensiona • Ritaglia • Dividi"], "sections": {"formatsTitle": "Converti tra formati immagine popolari", "popularTitle": "Conversioni immagini più cercate", "benefits": "Vantaggi della piattaforma", "faqTitle": "Domande frequenti"}, "dashboard": [["Converti", "Converti tra oltre 100 formati"], ["Comprimi", "Riduci il peso senza perdere chiarezza"], ["Ridimensiona", "Cambia dimensioni subito"], ["Ritaglia", "Ritaglia con precisione"], ["Dividi immagine", "Taglia in righe e colonne"], ["Altri strumenti", "Tutti i formati in un posto"]], "trustStrip": [["Sicuro e privato", "Elaborazione in memoria"], ["Velocissimo", "Converti in secondi"], ["Nessuna registrazione", "Inizia subito"]], "features": [["Conversione immagini veloce", "Converti foto, grafiche e screenshot in formati web moderni con un flusso semplice."], ["Compressione con target", "Riduci immagini grandi verso obiettivi come 1 MB bilanciando qualità e peso."], ["Elaborazione batch", "Elabora una immagine o fino a 10 file insieme con risultati chiari."], ["Workflow privacy-first", "I file selezionati vengono gestiti per la richiesta attuale e le anteprime si cancellano al reload."]], "faqEyebrow": "Domande", "faq": [["Posso convertire PNG in JPG?", "Sì. Carica il PNG, scegli JPG come uscita e avvia la conversione."], ["Posso convertire JPG in WebP?", "Sì. WebP è un formato moderno disponibile nel selettore di uscita."], ["Posso dividere un’immagine in parti uguali?", "Sì. Split Image divide in righe, colonne o griglia e scarica un ZIP."], ["Posso comprimere un’immagine da 20 MB verso 1 MB?", "Usa Comprimi e imposta 1024 KB come target. Immagini molto dettagliate possono richiedere qualità o dimensioni minori."], ["Posso ridimensionare a misure esatte?", "Sì. Inserisci larghezza e altezza e scegli il metodo di adattamento."], ["Il ritaglio mostra un’anteprima?", "Sì. Puoi trascinare e ridimensionare l’area di ritaglio sulla foto."], ["Salvate le mie immagini?", "No. I file sono elaborati in memoria e le anteprime locali vengono cancellate al reload."], ["C’è un limite di file?", "Sì. Il limite è 10 file per mantenere stabilità e velocità."]], "footer": "Strumenti sicuri e privati per convertire, comprimere, ridimensionare, ritagliare e dividere immagini. Creato da", "footerRights": "Tutti i diritti riservati.", "footerLinks": {"privacy": "Privacy", "terms": "Termini", "contact": "Contatto", "sitemap": "Mappa sito"}}, "id": {"localeName": "Indonesia", "language": "Bahasa", "chooseLanguage": "Pilih bahasa", "languageChanged": "Bahasa telah diubah ke {language} sesuai pilihan Anda. Anda dapat mengubahnya lagi di bagian bawah halaman.", "footerChangeLanguage": "Ubah bahasa kapan saja", "seoTitle": "Prismix Image Converter | Konverter, kompresor, resize, crop, dan split image gratis", "seoDescription": "Konverter gambar online gratis untuk mengubah, mengompres, mengubah ukuran, crop, upscale, dan split gambar JPG, PNG, WebP, AVIF, HEIC, HEIF, SVG, dan TIFF.", "seoKeywords": "konverter gambar, convert image online, kompres gambar, resize gambar, crop gambar, split image, HEIC ke JPG, PNG ke JPG, JPG ke WebP", "h1": "Prismix Image Converter", "eyebrow": "Toolkit gambar online gratis", "heroLine": "Cepat. Indah. Kuat.", "heroP": "Konversi, kompres, resize, crop, upscale, dan split gambar dengan alat online yang cepat dan menjaga privasi.", "upload": "Unggah gambar", "guides": "Baca panduan gambar", "start": "Mulai di sini", "uploadTitle": "Unggah gambar terlebih dahulu", "uploadP": "File tidak disimpan permanen. Memuat ulang halaman akan menghapus pilihan dan pratinjau lokal.", "drop": "Letakkan hingga 10 file di sini", "choose": "Pilih File", "processing": "Memproses...", "success": "Berhasil! File yang dioptimalkan sudah siap.", "download": "Unduh", "brandSmall": "Image Converter", "nav": {"home": "Beranda", "convert": "Konversi", "compress": "Kompres", "resize": "Resize", "crop": "Crop", "split": "Split Image", "formats": "Format", "guides": "Panduan", "faq": "FAQ", "contact": "Kontak"}, "modes": {"convert": "Konversi", "compress": "Kompres", "resize": "Resize", "crop": "Crop", "upscale": "Upscale", "split": "Split"}, "toolText": {"convert": "Konversi gambar ke format yang Anda butuhkan dalam beberapa klik.", "compress": "Kompres gambar ke ukuran target dengan kontrol kualitas.", "resize": "Resize berdasarkan piksel atau persentase sambil menjaga proporsi.", "crop": "Seret kotak crop dan atur handle dengan presisi.", "upscale": "Tingkatkan dimensi dengan hati-hati.", "split": "Potong gambar menjadi baris, kolom, atau grid lalu unduh ZIP."}, "toolButtons": {"convert": "Konversi Sekarang", "compress": "Kompres Sekarang", "resize": "Resize", "crop": "Terapkan Crop", "upscale": "Upscale", "split": "Split Image"}, "controls": {"outputFormat": "Format output", "quality": "Kualitas", "targetKb": "Ukuran target KB", "width": "Lebar px", "height": "Tinggi px", "fitMode": "Mode fit", "preventEnlargement": "Cegah pembesaran tidak diinginkan", "splitMethod": "Metode split", "rows": "Baris", "columns": "Kolom", "namingStyle": "Gaya nama", "left": "Kiri", "top": "Atas", "cropWidth": "Lebar", "cropHeight": "Tinggi", "cropEmpty": "Unggah gambar untuk pratinjau dan pilih area crop", "cropHelp": "Seret kotak crop di atas gambar lalu ubah ukuran dari sudut atau tepi. Nilai angka diperbarui otomatis.", "splitTip": "Split Image membagi gambar menjadi bagian yang sama dan mengunduhnya sebagai ZIP."}, "options": {"fitInside": "Tetap di dalam kotak", "fitCover": "Cover crop", "fitContain": "Contain dengan latar", "fitFill": "Regangkan isi", "fitOutside": "Outside", "splitBoth": "Baris dan kolom", "splitRows": "Hanya baris", "splitColumns": "Hanya kolom", "nameGrid": "Label baris dan kolom", "nameSequence": "Urutan sederhana"}, "trust": ["Pemrosesan di memori", "Batas batch: 10 file", "Konversi • Kompres • Resize • Crop • Split"], "sections": {"formatsTitle": "Konversi antar format gambar populer", "popularTitle": "Pintasan konversi yang sering dicari", "benefits": "Manfaat platform", "faqTitle": "Pertanyaan umum"}, "dashboard": [["Konversi", "Konversi 100+ format"], ["Kompres", "Kurangi ukuran tanpa kehilangan kejernihan"], ["Resize", "Ubah dimensi instan"], ["Crop", "Crop gambar dengan presisi"], ["Split Image", "Potong gambar menjadi baris dan kolom"], ["Alat lain", "Semua format di satu tempat"]], "trustStrip": [["Aman & privat", "Pemrosesan berbasis memori"], ["Sangat cepat", "Konversi dalam detik"], ["Tanpa daftar", "Mulai langsung"]], "features": [["Konversi gambar cepat", "Konversi foto, grafik, dan screenshot ke format web modern dengan alur sederhana."], ["Kompresi target ukuran", "Kurangi gambar besar menuju target seperti 1 MB dengan menjaga kualitas."], ["Pemrosesan batch", "Proses satu gambar atau hingga 10 file sekaligus."], ["Privasi utama", "File diproses untuk permintaan saat ini dan pratinjau lokal dibersihkan saat reload."]], "faqEyebrow": "Pertanyaan", "faq": [["Bisakah saya mengubah PNG ke JPG?", "Ya. Unggah PNG, pilih JPG sebagai output, lalu klik Konversi."], ["Bisakah saya mengubah JPG ke WebP?", "Ya. WebP tersedia di pilihan format output."], ["Bisakah saya membagi gambar menjadi bagian sama?", "Ya. Split Image membagi berdasarkan baris, kolom, atau grid dan mengunduh ZIP."], ["Bisakah gambar 20 MB dikompres mendekati 1 MB?", "Gunakan mode Kompres dan tetapkan 1024 KB. Gambar detail mungkin butuh kualitas atau ukuran lebih kecil."], ["Bisakah resize ke ukuran tepat?", "Ya. Masukkan lebar dan tinggi lalu pilih mode fit."], ["Apakah crop punya preview?", "Ya. Anda dapat menyeret dan mengubah ukuran area crop langsung pada foto."], ["Apakah gambar saya disimpan?", "Tidak. File diproses di memori dan preview lokal dibersihkan saat reload."], ["Apakah ada batas file?", "Ya. Maksimum 10 file agar alat tetap stabil dan cepat."]], "footer": "Alat aman dan privat untuk konversi, kompresi, resize, crop, dan split image. Dibuat oleh", "footerRights": "Hak cipta dilindungi.", "footerLinks": {"privacy": "Privasi", "terms": "Ketentuan", "contact": "Kontak", "sitemap": "Peta situs"}}, "ja": {"localeName": "日本語", "language": "言語", "chooseLanguage": "言語を選択", "languageChanged": "ご希望により言語が{language}に変更されました。ページ下部でいつでも変更できます。", "footerChangeLanguage": "いつでも言語を変更", "seoTitle": "Prismix Image Converter | 無料の画像変換・圧縮・リサイズ・分割ツール", "seoDescription": "JPG、PNG、WebP、AVIF、HEIC、HEIF、SVG、TIFF などをオンラインで変換、圧縮、リサイズ、切り抜き、拡大、分割できる無料画像ツールです。", "seoKeywords": "画像変換, 画像コンバーター, 画像圧縮, 画像リサイズ, 画像切り抜き, 画像分割, HEIC JPG 変換, PNG JPG 変換, WebP 変換", "h1": "Prismix 画像コンバーター", "eyebrow": "無料オンライン画像ツール", "heroLine": "高速。美しい。強力。", "heroP": "画像を変換、圧縮、リサイズ、切り抜き、拡大、分割できます。プライバシー重視の高速オンラインツールです。", "upload": "画像をアップロード", "guides": "画像ガイドを読む", "start": "ここから開始", "uploadTitle": "まず画像をアップロード", "uploadP": "ファイルは保存されません。ページを更新すると選択ファイルとプレビューは消去されます。", "drop": "最大10ファイルをここにドロップ", "choose": "ファイルを選択", "processing": "処理中...", "success": "成功！最適化されたファイルの準備ができました。", "download": "ダウンロード", "brandSmall": "画像コンバーター", "nav": {"home": "ホーム", "convert": "変換", "compress": "圧縮", "resize": "リサイズ", "crop": "切り抜き", "split": "画像分割", "formats": "形式", "guides": "ガイド", "faq": "FAQ", "contact": "お問い合わせ"}, "modes": {"convert": "変換", "compress": "圧縮", "resize": "リサイズ", "crop": "切り抜き", "upscale": "拡大", "split": "分割"}, "toolText": {"convert": "数クリックで画像を必要な形式に変換します。", "compress": "品質を調整しながら目標サイズに圧縮します。", "resize": "比率を保ちながらピクセルまたは割合でリサイズします。", "crop": "切り抜きボックスをドラッグして正確に調整します。", "upscale": "不要な拡大を避けながら寸法を増やします。", "split": "画像を行、列、グリッドに分割しZIPで保存します。"}, "toolButtons": {"convert": "今すぐ変換", "compress": "今すぐ圧縮", "resize": "リサイズ", "crop": "切り抜きを適用", "upscale": "拡大", "split": "画像を分割"}, "controls": {"outputFormat": "出力形式", "quality": "品質", "targetKb": "目標サイズ KB", "width": "幅 px", "height": "高さ px", "fitMode": "フィットモード", "preventEnlargement": "不要な拡大を防ぐ", "splitMethod": "分割方法", "rows": "行", "columns": "列", "namingStyle": "命名方式", "left": "左", "top": "上", "cropWidth": "幅", "cropHeight": "高さ", "cropEmpty": "画像をアップロードして切り抜き範囲を選択してください", "cropHelp": "画像上で切り抜きボックスをドラッグし、角や端からサイズを調整できます。数値は自動更新されます。", "splitTip": "Split Image は画像を均等なパーツに分割し、ZIPでダウンロードします。"}, "options": {"fitInside": "枠内に収める", "fitCover": "カバーして切り抜き", "fitContain": "背景付きで収める", "fitFill": "引き伸ばして埋める", "fitOutside": "外側", "splitBoth": "行と列", "splitRows": "行のみ", "splitColumns": "列のみ", "nameGrid": "行・列ラベル", "nameSequence": "連番"}, "trust": ["メモリ内処理", "一括上限: 10ファイル", "変換 • 圧縮 • リサイズ • 切り抜き • 分割"], "sections": {"formatsTitle": "人気の画像形式を変換", "popularTitle": "よく検索される画像変換", "benefits": "プラットフォームの利点", "faqTitle": "よくある質問"}, "dashboard": [["変換", "100以上の形式に変換"], ["圧縮", "鮮明さを保ってサイズ削減"], ["リサイズ", "寸法をすぐ変更"], ["切り抜き", "正確に画像を切り抜く"], ["画像分割", "行と列に分割"], ["その他ツール", "すべての形式を一か所に"]], "trustStrip": [["安全・プライベート", "メモリ優先処理"], ["高速", "数秒で変換"], ["登録不要", "すぐ開始"]], "features": [["高速画像変換", "写真やスクリーンショットを最新Web形式へ簡単に変換します。"], ["目標サイズ圧縮", "大きな画像を品質とサイズのバランスを保って圧縮します。"], ["一括処理", "1枚または最大10ファイルをまとめて処理できます。"], ["プライバシー重視", "選択ファイルは現在の処理だけに使われ、更新時にプレビューは消えます。"]], "faqEyebrow": "質問", "faq": [["PNGをJPGに変換できますか？", "はい。PNGをアップロードし、出力形式でJPGを選んで変換します。"], ["JPGをWebPに変換できますか？", "はい。WebPは出力形式セレクターで利用できます。"], ["画像を均等に分割できますか？", "はい。Split Imageは行、列、グリッドで分割しZIPでダウンロードできます。"], ["20MBの画像を1MB近くまで圧縮できますか？", "圧縮モードで1024KBなどを指定します。詳細な画像は品質や寸法の調整が必要です。"], ["正確な寸法にリサイズできますか？", "はい。幅と高さを入力し、フィットモードを選択します。"], ["切り抜きにプレビューはありますか？", "はい。写真上で切り抜き範囲をドラッグして調整できます。"], ["画像は保存されますか？", "いいえ。ファイルは現在の処理だけに使われ、更新時にプレビューは消えます。"], ["ファイル数制限はありますか？", "はい。安定性と速度のため最大10ファイルです。"]], "footer": "安全でプライバシー重視の画像変換、圧縮、リサイズ、切り抜き、分割ツール。作成者", "footerRights": "All rights reserved.", "footerLinks": {"privacy": "プライバシー", "terms": "利用規約", "contact": "お問い合わせ", "sitemap": "サイトマップ"}}, "ko": {"localeName": "한국어", "language": "언어", "chooseLanguage": "언어 선택", "languageChanged": "요청에 따라 언어가 {language}(으)로 변경되었습니다. 페이지 하단에서 다시 변경할 수 있습니다.", "footerChangeLanguage": "언제든지 언어 변경", "seoTitle": "Prismix Image Converter | 무료 이미지 변환, 압축, 크기 조절, 분할 도구", "seoDescription": "JPG, PNG, WebP, AVIF, HEIC, HEIF, SVG, TIFF 이미지를 온라인에서 무료로 변환, 압축, 리사이즈, 자르기, 업스케일, 분할하세요.", "seoKeywords": "이미지 변환, 이미지 컨버터, 이미지 압축, 이미지 크기 조절, 이미지 자르기, 이미지 분할, HEIC JPG 변환, PNG JPG 변환, WebP 변환", "h1": "Prismix 이미지 컨버터", "eyebrow": "무료 온라인 이미지 도구", "heroLine": "빠르고. 아름답고. 강력합니다.", "heroP": "개인정보를 중시하는 빠른 온라인 도구로 이미지를 변환, 압축, 크기 조절, 자르기, 확대, 분할하세요.", "upload": "이미지 업로드", "guides": "이미지 가이드 읽기", "start": "여기서 시작", "uploadTitle": "먼저 이미지를 업로드하세요", "uploadP": "파일은 저장되지 않습니다. 페이지를 새로고침하면 선택 파일과 미리보기가 지워집니다.", "drop": "최대 10개 파일을 여기에 놓기", "choose": "파일 선택", "processing": "처리 중...", "success": "성공! 최적화된 파일이 준비되었습니다.", "download": "다운로드", "brandSmall": "이미지 컨버터", "nav": {"home": "홈", "convert": "변환", "compress": "압축", "resize": "리사이즈", "crop": "자르기", "split": "이미지 분할", "formats": "형식", "guides": "가이드", "faq": "FAQ", "contact": "문의"}, "modes": {"convert": "변환", "compress": "압축", "resize": "리사이즈", "crop": "자르기", "upscale": "확대", "split": "분할"}, "toolText": {"convert": "몇 번의 클릭으로 원하는 형식으로 변환하세요.", "compress": "품질 제어와 함께 목표 크기로 압축하세요.", "resize": "비율을 유지하며 픽셀 또는 퍼센트로 크기를 조절하세요.", "crop": "자르기 상자를 드래그하고 핸들을 정확하게 조절하세요.", "upscale": "원치 않는 확대 없이 조심스럽게 크기를 늘리세요.", "split": "이미지를 행, 열 또는 그리드로 나누고 ZIP을 다운로드하세요."}, "toolButtons": {"convert": "지금 변환", "compress": "지금 압축", "resize": "리사이즈", "crop": "자르기 적용", "upscale": "확대", "split": "이미지 분할"}, "controls": {"outputFormat": "출력 형식", "quality": "품질", "targetKb": "목표 크기 KB", "width": "너비 px", "height": "높이 px", "fitMode": "맞춤 모드", "preventEnlargement": "원치 않는 확대 방지", "splitMethod": "분할 방식", "rows": "행", "columns": "열", "namingStyle": "이름 형식", "left": "왼쪽", "top": "위", "cropWidth": "너비", "cropHeight": "높이", "cropEmpty": "이미지를 업로드해 미리보기와 자르기 영역을 선택하세요", "cropHelp": "이미지 위에서 자르기 상자를 드래그하고 모서리나 가장자리에서 크기를 조절하세요. 숫자 값이 자동으로 업데이트됩니다.", "splitTip": "Split Image는 이미지를 같은 조각으로 나누고 ZIP으로 다운로드합니다."}, "options": {"fitInside": "상자 안에 유지", "fitCover": "덮고 자르기", "fitContain": "배경 포함 맞춤", "fitFill": "늘려 채우기", "fitOutside": "외부", "splitBoth": "행과 열", "splitRows": "행만", "splitColumns": "열만", "nameGrid": "행/열 라벨", "nameSequence": "단순 순번"}, "trust": ["메모리 처리", "배치 제한: 10개 파일", "변환 • 압축 • 리사이즈 • 자르기 • 분할"], "sections": {"formatsTitle": "인기 이미지 형식 변환", "popularTitle": "자주 찾는 이미지 변환", "benefits": "플랫폼 장점", "faqTitle": "자주 묻는 질문"}, "dashboard": [["변환", "100개 이상 형식 변환"], ["압축", "선명함을 유지하며 크기 축소"], ["리사이즈", "치수를 즉시 변경"], ["자르기", "정밀하게 이미지 자르기"], ["이미지 분할", "행과 열로 나누기"], ["더 많은 도구", "모든 형식을 한곳에"]], "trustStrip": [["안전 & 비공개", "메모리 우선 처리"], ["매우 빠름", "몇 초 안에 변환"], ["가입 불필요", "즉시 시작"]], "features": [["빠른 이미지 변환", "사진, 그래픽, 스크린샷을 현대 웹 형식으로 간단히 변환합니다."], ["목표 크기 압축", "큰 이미지를 품질과 용량의 균형을 맞춰 줄입니다."], ["배치 처리", "한 장 또는 최대 10개 파일을 한 번에 처리합니다."], ["개인정보 중심", "파일은 현재 요청에만 처리되며 새로고침 시 미리보기가 지워집니다."]], "faqEyebrow": "질문", "faq": [["PNG를 JPG로 변환할 수 있나요?", "예. PNG를 업로드하고 JPG를 출력 형식으로 선택한 뒤 변환하세요."], ["JPG를 WebP로 변환할 수 있나요?", "예. WebP는 출력 형식 선택기에서 사용할 수 있습니다."], ["이미지를 같은 조각으로 나눌 수 있나요?", "예. Split Image는 행, 열 또는 그리드로 나누고 ZIP으로 다운로드합니다."], ["20MB 이미지를 1MB에 가깝게 압축할 수 있나요?", "압축 모드에서 1024KB 같은 목표를 설정하세요. 세밀한 이미지는 품질이나 크기 조정이 필요할 수 있습니다."], ["정확한 치수로 리사이즈할 수 있나요?", "예. 너비와 높이를 입력하고 맞춤 모드를 선택하세요."], ["자르기 모드에 미리보기가 있나요?", "예. 사진 위에서 자르기 영역을 드래그하고 크기를 조절할 수 있습니다."], ["이미지를 저장하나요?", "아니요. 파일은 현재 요청에서 처리되고 새로고침 시 미리보기가 삭제됩니다."], ["파일 제한이 있나요?", "예. 안정성과 속도를 위해 최대 10개 파일입니다."]], "footer": "안전하고 개인정보를 중시하는 이미지 변환, 압축, 리사이즈, 자르기, 분할 도구. 제작자", "footerRights": "모든 권리 보유.", "footerLinks": {"privacy": "개인정보", "terms": "약관", "contact": "문의", "sitemap": "사이트맵"}}, "zh-CN": {"localeName": "中文", "language": "语言", "chooseLanguage": "选择语言", "languageChanged": "已按您的选择将语言切换为{language}。您可以在页面底部再次更改。", "footerChangeLanguage": "随时更改语言", "seoTitle": "Prismix Image Converter | 免费图片转换、压缩、调整大小和图片分割工具", "seoDescription": "免费在线图片工具，可转换、压缩、调整大小、裁剪、放大和分割 JPG、PNG、WebP、AVIF、HEIC、HEIF、SVG、TIFF 等格式。", "seoKeywords": "图片转换器,在线转换图片,压缩图片,调整图片大小,裁剪图片,图片分割,HEIC转JPG,PNG转JPG,JPG转WebP", "h1": "Prismix 图片转换器", "eyebrow": "免费在线图片工具", "heroLine": "快速。精美。强大。", "heroP": "使用注重隐私的在线工具转换、压缩、调整大小、裁剪、放大和分割图片，快速下载优化结果。", "upload": "上传图片", "guides": "阅读图片指南", "start": "从这里开始", "uploadTitle": "请先上传图片", "uploadP": "文件不会被永久保存。刷新页面会清除已选文件和本地预览。", "drop": "最多可拖入 10 个文件", "choose": "选择文件", "processing": "正在处理...", "success": "成功！优化后的文件已准备好。", "download": "下载", "brandSmall": "图片转换器", "nav": {"home": "首页", "convert": "转换", "compress": "压缩", "resize": "调整大小", "crop": "裁剪", "split": "分割图片", "formats": "格式", "guides": "指南", "faq": "FAQ", "contact": "联系"}, "modes": {"convert": "转换", "compress": "压缩", "resize": "调整大小", "crop": "裁剪", "upscale": "放大", "split": "分割"}, "toolText": {"convert": "几次点击即可将图片转换为所需格式。", "compress": "通过质量控制将图片压缩到目标大小。", "resize": "按像素或百分比调整大小并保持比例。", "crop": "拖动裁剪框并精确调整控制点。", "upscale": "谨慎增加图片尺寸，避免不必要放大。", "split": "将图片分割为行、列或网格并下载 ZIP。"}, "toolButtons": {"convert": "立即转换", "compress": "立即压缩", "resize": "调整大小", "crop": "应用裁剪", "upscale": "放大", "split": "分割图片"}, "controls": {"outputFormat": "输出格式", "quality": "质量", "targetKb": "目标大小 KB", "width": "宽度 px", "height": "高度 px", "fitMode": "适配模式", "preventEnlargement": "防止不必要放大", "splitMethod": "分割方式", "rows": "行", "columns": "列", "namingStyle": "命名方式", "left": "左", "top": "上", "cropWidth": "宽度", "cropHeight": "高度", "cropEmpty": "上传图片以预览并选择裁剪区域", "cropHelp": "在图片上拖动裁剪框，并从角或边调整大小。数值会自动更新。", "splitTip": "Split Image 会将图片平均分割并以 ZIP 下载。"}, "options": {"fitInside": "保持在框内", "fitCover": "覆盖裁剪", "fitContain": "带背景适配", "fitFill": "拉伸填充", "fitOutside": "外部", "splitBoth": "行和列", "splitRows": "仅行", "splitColumns": "仅列", "nameGrid": "行列标签", "nameSequence": "简单序号"}, "trust": ["内存处理", "批量上限：10 个文件", "转换 • 压缩 • 调整大小 • 裁剪 • 分割"], "sections": {"formatsTitle": "转换常用图片格式", "popularTitle": "热门图片转换入口", "benefits": "平台优势", "faqTitle": "常见问题"}, "dashboard": [["转换", "支持 100+ 格式转换"], ["压缩", "在保持清晰度的同时减小体积"], ["调整大小", "立即更改尺寸"], ["裁剪", "精确裁剪图片"], ["分割图片", "按行和列切割"], ["更多工具", "所有格式集中管理"]], "trustStrip": [["安全私密", "以内存处理为主"], ["高速", "几秒内完成转换"], ["无需注册", "立即开始"]], "features": [["快速图片转换", "将照片、图形和截图快速转换为现代网页格式。"], ["目标大小压缩", "在质量和文件大小之间取得平衡，压缩大图片。"], ["批量处理", "一次处理一张图片或最多 10 个文件。"], ["隐私优先流程", "文件仅用于当前请求，刷新页面后本地预览会被清除。"]], "faqEyebrow": "问题", "faq": [["可以把 PNG 转成 JPG 吗？", "可以。上传 PNG，选择 JPG 作为输出格式，然后点击转换。"], ["可以把 JPG 转成 WebP 吗？", "可以。WebP 可在输出格式选择器中使用。"], ["可以把图片平均分割吗？", "可以。Split Image 可按行、列或网格分割，并下载 ZIP。"], ["20MB 图片能压缩到接近 1MB 吗？", "使用压缩模式并设置 1024KB 等目标。高细节图片可能需要降低质量或尺寸。"], ["可以调整到精确尺寸吗？", "可以。输入宽度和高度，并选择适配模式。"], ["裁剪模式有预览吗？", "有。可直接在图片上拖动并调整裁剪区域。"], ["会保存我的图片吗？", "不会。文件仅在当前请求中处理，刷新后本地预览会清除。"], ["有文件数量限制吗？", "有。为保持稳定和速度，最多 10 个文件。"]], "footer": "安全、注重隐私的图片转换、压缩、调整大小、裁剪和分割工具。创建者", "footerRights": "保留所有权利。", "footerLinks": {"privacy": "隐私", "terms": "条款", "contact": "联系", "sitemap": "站点地图"}}, "ar": {"localeName": "العربية", "language": "اللغة", "chooseLanguage": "اختر اللغة", "languageChanged": "تم تغيير اللغة إلى {language} بناءً على طلبك. يمكنك تغييرها مرة أخرى من أسفل الصفحة.", "footerChangeLanguage": "تغيير اللغة في أي وقت", "seoTitle": "Prismix Image Converter | محول وضاغط ومغير حجم ومقسم صور مجاني", "seoDescription": "أداة مجانية عبر الإنترنت لتحويل الصور وضغطها وتغيير حجمها وقصها وتكبيرها وتقسيمها بصيغ JPG و PNG و WebP و AVIF و HEIC و HEIF و SVG و TIFF.", "seoKeywords": "محول صور, تحويل الصور أونلاين, ضغط الصور, تغيير حجم الصورة, قص الصورة, تقسيم الصورة, HEIC إلى JPG, PNG إلى JPG, JPG إلى WebP", "h1": "محول الصور Prismix", "eyebrow": "مجموعة أدوات صور مجانية", "heroLine": "سريع. جميل. قوي.", "heroP": "حوّل الصور واضغطها وغيّر حجمها واقصصها وكبّرها وقسّمها باستخدام أداة سريعة تحترم الخصوصية.", "upload": "رفع صورة", "guides": "قراءة أدلة الصور", "start": "ابدأ هنا", "uploadTitle": "ارفع صورك أولاً", "uploadP": "لا يتم حفظ الملفات. يؤدي تحديث الصفحة إلى مسح الملفات المحددة والمعاينات المحلية.", "drop": "اسحب حتى 10 ملفات هنا", "choose": "اختيار الملفات", "processing": "جارٍ المعالجة...", "success": "تم بنجاح! ملفك المحسن جاهز.", "download": "تنزيل", "brandSmall": "محول الصور", "nav": {"home": "الرئيسية", "convert": "تحويل", "compress": "ضغط", "resize": "تغيير الحجم", "crop": "قص", "split": "تقسيم الصورة", "formats": "الصيغ", "guides": "الأدلة", "faq": "الأسئلة", "contact": "اتصال"}, "modes": {"convert": "تحويل", "compress": "ضغط", "resize": "تغيير الحجم", "crop": "قص", "upscale": "تكبير", "split": "تقسيم"}, "toolText": {"convert": "حوّل الصور إلى الصيغة المطلوبة ببضع نقرات.", "compress": "اضغط الصور إلى حجم مستهدف مع التحكم بالجودة.", "resize": "غيّر الحجم بالبكسل أو النسبة مع حفظ الأبعاد.", "crop": "اسحب مربع القص واضبط المقابض بدقة.", "upscale": "زد أبعاد الصورة بحذر.", "split": "قسّم الصورة إلى صفوف أو أعمدة أو شبكة وحمّل ZIP."}, "toolButtons": {"convert": "حوّل الآن", "compress": "اضغط الآن", "resize": "غيّر الحجم", "crop": "تطبيق القص", "upscale": "تكبير", "split": "تقسيم الصورة"}, "controls": {"outputFormat": "صيغة الإخراج", "quality": "الجودة", "targetKb": "الحجم المستهدف KB", "width": "العرض px", "height": "الارتفاع px", "fitMode": "وضع الملاءمة", "preventEnlargement": "منع التكبير غير المرغوب", "splitMethod": "طريقة التقسيم", "rows": "الصفوف", "columns": "الأعمدة", "namingStyle": "نمط التسمية", "left": "يسار", "top": "أعلى", "cropWidth": "العرض", "cropHeight": "الارتفاع", "cropEmpty": "ارفع صورة للمعاينة واختيار منطقة القص", "cropHelp": "اسحب مربع القص فوق الصورة ثم غيّر حجمه من الزوايا أو الحواف. يتم تحديث القيم تلقائياً.", "splitTip": "يقسم Split Image الصورة إلى أجزاء متساوية ويحملها كملف ZIP."}, "options": {"fitInside": "إبقاؤها داخل الإطار", "fitCover": "تغطية وقص", "fitContain": "احتواء مع خلفية", "fitFill": "تمديد للملء", "fitOutside": "خارج", "splitBoth": "صفوف وأعمدة", "splitRows": "صفوف فقط", "splitColumns": "أعمدة فقط", "nameGrid": "تسميات الصف والعمود", "nameSequence": "تسلسل بسيط"}, "trust": ["معالجة في الذاكرة", "حد الدفعة: 10 ملفات", "تحويل • ضغط • تغيير الحجم • قص • تقسيم"], "sections": {"formatsTitle": "التحويل بين صيغ الصور الشائعة", "popularTitle": "اختصارات تحويل الصور الأكثر بحثاً", "benefits": "مزايا المنصة", "faqTitle": "الأسئلة الشائعة"}, "dashboard": [["تحويل", "التحويل بين أكثر من 100 صيغة"], ["ضغط", "تقليل الحجم مع الحفاظ على الوضوح"], ["تغيير الحجم", "تعديل الأبعاد فوراً"], ["قص", "قص الصور بدقة"], ["تقسيم الصورة", "تقطيع الصورة إلى صفوف وأعمدة"], ["أدوات أكثر", "كل الصيغ في مكان واحد"]], "trustStrip": [["آمن وخاص", "معالجة تعتمد على الذاكرة"], ["سريع جداً", "تحويل خلال ثوانٍ"], ["لا يحتاج تسجيل", "ابدأ فوراً"]], "features": [["تحويل صور سريع", "حوّل الصور واللقطات والرسومات إلى صيغ ويب حديثة بسهولة."], ["ضغط بحجم مستهدف", "قلل الصور الكبيرة نحو أهداف مثل 1 MB مع توازن الجودة والحجم."], ["معالجة جماعية", "عالج صورة واحدة أو حتى 10 ملفات دفعة واحدة."], ["خصوصية أولاً", "تتم معالجة الملفات للطلب الحالي فقط وتُمسح المعاينات عند التحديث."]], "faqEyebrow": "أسئلة", "faq": [["هل يمكن تحويل PNG إلى JPG؟", "نعم. ارفع ملف PNG واختر JPG كصيغة إخراج ثم اضغط تحويل."], ["هل يمكن تحويل JPG إلى WebP؟", "نعم. WebP متاح في محدد صيغة الإخراج."], ["هل يمكن تقسيم الصورة إلى أجزاء متساوية؟", "نعم. يقسم Split Image الصورة إلى صفوف أو أعمدة أو شبكة ويحمل ZIP."], ["هل يمكن ضغط صورة 20 MB إلى قرابة 1 MB؟", "استخدم وضع الضغط وحدد 1024 KB كهدف. الصور شديدة التفاصيل قد تحتاج تقليل الجودة أو الأبعاد."], ["هل يمكن تغيير الحجم إلى أبعاد دقيقة؟", "نعم. أدخل العرض والارتفاع واختر وضع الملاءمة."], ["هل يوجد معاينة في وضع القص؟", "نعم. يمكنك سحب منطقة القص وتغيير حجمها مباشرة على الصورة."], ["هل يتم تخزين صوري؟", "لا. تتم معالجة الملفات في الذاكرة للطلب الحالي وتمسح المعاينات عند التحديث."], ["هل يوجد حد للملفات؟", "نعم. الحد 10 ملفات للحفاظ على السرعة والاستقرار."]], "footer": "أدوات آمنة وخاصة لتحويل الصور وضغطها وتغيير حجمها وقصها وتقسيمها. أنشئت بواسطة", "footerRights": "جميع الحقوق محفوظة.", "footerLinks": {"privacy": "الخصوصية", "terms": "الشروط", "contact": "اتصال", "sitemap": "خريطة الموقع"}}, "hi": {"localeName": "हिन्दी", "language": "भाषा", "chooseLanguage": "भाषा चुनें", "languageChanged": "आपके अनुरोध पर भाषा {language} में बदल दी गई है। आप इसे पेज के नीचे फिर से बदल सकते हैं।", "footerChangeLanguage": "कभी भी भाषा बदलें", "seoTitle": "Prismix Image Converter | मुफ्त इमेज कन्वर्टर, कंप्रेसर, रीसाइज़र और इमेज स्प्लिट टूल", "seoDescription": "JPG, PNG, WebP, AVIF, HEIC, HEIF, SVG और TIFF इमेज को ऑनलाइन मुफ्त में कन्वर्ट, कंप्रेस, resize, crop, upscale और split करें।", "seoKeywords": "image converter, image convert online, image compressor, resize image, crop image, split image, HEIC to JPG, PNG to JPG, JPG to WebP", "h1": "Prismix इमेज कन्वर्टर", "eyebrow": "मुफ्त ऑनलाइन इमेज टूलकिट", "heroLine": "तेज़. सुंदर. शक्तिशाली.", "heroP": "गोपनीयता-केंद्रित ऑनलाइन टूल से इमेज को convert, compress, resize, crop, upscale और split करें।", "upload": "इमेज अपलोड करें", "guides": "इमेज गाइड पढ़ें", "start": "यहाँ शुरू करें", "uploadTitle": "पहले अपनी इमेज अपलोड करें", "uploadP": "फाइलें स्थायी रूप से सेव नहीं होतीं। पेज रीफ्रेश करने पर चयन और preview साफ हो जाते हैं।", "drop": "यहाँ अधिकतम 10 फाइलें छोड़ें", "choose": "फाइलें चुनें", "processing": "प्रोसेस हो रहा है...", "success": "सफल! आपकी optimized फाइल तैयार है।", "download": "डाउनलोड", "brandSmall": "इमेज कन्वर्टर", "nav": {"home": "होम", "convert": "कन्वर्ट", "compress": "कंप्रेस", "resize": "रीसाइज़", "crop": "क्रॉप", "split": "इमेज स्प्लिट", "formats": "फॉर्मेट", "guides": "गाइड", "faq": "FAQ", "contact": "संपर्क"}, "modes": {"convert": "कन्वर्ट", "compress": "कंप्रेस", "resize": "रीसाइज़", "crop": "क्रॉप", "upscale": "अपस्केल", "split": "स्प्लिट"}, "toolText": {"convert": "कुछ clicks में images को ज़रूरी format में convert करें।", "compress": "Quality control के साथ target size तक compress करें।", "resize": "Proportion रखते हुए pixel या percentage से resize करें।", "crop": "Crop box को drag करें और handles से precise adjust करें।", "upscale": "अनचाहे enlargement के बिना dimensions बढ़ाएँ।", "split": "Image को rows, columns या grid में split करें और ZIP download करें।"}, "toolButtons": {"convert": "अभी कन्वर्ट करें", "compress": "अभी कंप्रेस करें", "resize": "रीसाइज़", "crop": "क्रॉप लागू करें", "upscale": "अपस्केल", "split": "इमेज स्प्लिट"}, "controls": {"outputFormat": "आउटपुट फॉर्मेट", "quality": "क्वालिटी", "targetKb": "लक्ष्य आकार KB", "width": "चौड़ाई px", "height": "ऊँचाई px", "fitMode": "फिट मोड", "preventEnlargement": "अनचाहा enlargement रोकें", "splitMethod": "स्प्लिट विधि", "rows": "पंक्तियाँ", "columns": "कॉलम", "namingStyle": "नाम शैली", "left": "बायाँ", "top": "ऊपर", "cropWidth": "चौड़ाई", "cropHeight": "ऊँचाई", "cropEmpty": "Preview और crop area चुनने के लिए image upload करें", "cropHelp": "Crop box को image पर drag करें और corners/edges से resize करें। Numeric values अपने आप update होंगे।", "splitTip": "Split Image image को समान हिस्सों में बाँटता है और ZIP के रूप में download करता है।"}, "options": {"fitInside": "Box के अंदर रखें", "fitCover": "Cover crop", "fitContain": "Background के साथ contain", "fitFill": "Stretch fill", "fitOutside": "Outside", "splitBoth": "Rows और columns", "splitRows": "सिर्फ rows", "splitColumns": "सिर्फ columns", "nameGrid": "Row और column labels", "nameSequence": "Simple sequence"}, "trust": ["Memory-only processing", "Batch limit: 10 files", "Convert • Compress • Resize • Crop • Split"], "sections": {"formatsTitle": "लोकप्रिय इमेज फॉर्मेट के बीच कन्वर्ट करें", "popularTitle": "लोकप्रिय इमेज कन्वर्ज़न शॉर्टकट", "benefits": "प्लेटफॉर्म लाभ", "faqTitle": "अक्सर पूछे जाने वाले सवाल"}, "dashboard": [["कन्वर्ट", "100+ formats में convert करें"], ["कंप्रेस", "Clarity बनाए रखते हुए size घटाएँ"], ["रीसाइज़", "Dimensions तुरंत बदलें"], ["क्रॉप", "Image को precision से crop करें"], ["इमेज स्प्लिट", "Rows और columns में काटें"], ["More Tools", "सभी formats एक जगह"]], "trustStrip": [["सुरक्षित और निजी", "Memory-first processing"], ["बहुत तेज़", "Seconds में convert"], ["Sign up नहीं", "तुरंत शुरू करें"]], "features": [["तेज़ image conversion", "Photos, graphics और screenshots को modern web formats में आसानी से convert करें।"], ["Target size compression", "बड़ी images को 1 MB जैसे target के करीब quality balance के साथ कम करें।"], ["Batch processing", "एक image या 10 files तक एक साथ process करें।"], ["Privacy-first workflow", "Files current request के लिए process होती हैं और reload पर previews साफ हो जाते हैं।"]], "faqEyebrow": "सवाल", "faq": [["क्या PNG को JPG में बदल सकते हैं?", "हाँ। PNG upload करें, output में JPG चुनें और convert करें।"], ["क्या JPG को WebP में बदल सकते हैं?", "हाँ। WebP output format selector में उपलब्ध है।"], ["क्या image को समान हिस्सों में बाँट सकते हैं?", "हाँ। Split Image rows, columns या grid में बाँटता है और ZIP download करता है।"], ["क्या 20 MB image को 1 MB के करीब compress कर सकते हैं?", "Compress mode में 1024 KB जैसे target set करें। Detail images को lower quality या size की जरूरत हो सकती है।"], ["क्या exact dimensions में resize कर सकते हैं?", "हाँ। Width और height भरें और fit mode चुनें।"], ["क्या crop mode में preview है?", "हाँ। Photo पर crop area drag और resize कर सकते हैं।"], ["क्या images store होती हैं?", "नहीं। Files current request के लिए memory में process होती हैं और reload पर previews साफ होते हैं।"], ["क्या file limit है?", "हाँ। Stability और speed के लिए maximum 10 files हैं।"]], "footer": "सुरक्षित और गोपनीयता-केंद्रित इमेज कन्वर्ज़न, कंप्रेशन, रीसाइज़, क्रॉप और स्प्लिट टूल। निर्माता", "footerRights": "सर्वाधिकार सुरक्षित।", "footerLinks": {"privacy": "प्राइवेसी", "terms": "शर्तें", "contact": "संपर्क", "sitemap": "साइटमैप"}}, "ru": {"localeName": "Русский", "language": "Язык", "chooseLanguage": "Выберите язык", "languageChanged": "Язык был изменён на {language} по вашему запросу. Вы можете изменить его снова внизу страницы.", "footerChangeLanguage": "Изменить язык в любое время", "seoTitle": "Prismix Image Converter | Бесплатный конвертер, компрессор, изменение размера и разделение изображений", "seoDescription": "Бесплатный онлайн-инструмент для конвертации, сжатия, изменения размера, обрезки, увеличения и разделения JPG, PNG, WebP, AVIF, HEIC, HEIF, SVG и TIFF.", "seoKeywords": "конвертер изображений, конвертировать изображение онлайн, сжать изображение, изменить размер изображения, обрезать изображение, разделить изображение, HEIC в JPG, PNG в JPG, JPG в WebP", "h1": "Конвертер изображений Prismix", "eyebrow": "Бесплатные онлайн-инструменты для изображений", "heroLine": "Быстро. Красиво. Мощно.", "heroP": "Конвертируйте, сжимайте, изменяйте размер, обрезайте, увеличивайте и разделяйте изображения с помощью быстрого инструмента, ориентированного на конфиденциальность.", "upload": "Загрузить изображение", "guides": "Читать руководства", "start": "Начните здесь", "uploadTitle": "Сначала загрузите изображения", "uploadP": "Файлы не сохраняются постоянно. Обновление страницы очищает выбранные файлы и локальные превью.", "drop": "Перетащите сюда до 10 файлов", "choose": "Выбрать файлы", "processing": "Обработка...", "success": "Готово! Оптимизированный файл подготовлен.", "download": "Скачать", "brandSmall": "Конвертер изображений", "nav": {"home": "Главная", "convert": "Конвертировать", "compress": "Сжать", "resize": "Размер", "crop": "Обрезать", "split": "Разделить", "formats": "Форматы", "guides": "Гайды", "faq": "FAQ", "contact": "Контакты"}, "modes": {"convert": "Конвертировать", "compress": "Сжать", "resize": "Размер", "crop": "Обрезать", "upscale": "Увеличить", "split": "Разделить"}, "toolText": {"convert": "Конвертируйте изображения в нужный формат за несколько кликов.", "compress": "Сжимайте изображения до целевого размера с контролем качества.", "resize": "Меняйте размер в пикселях или процентах, сохраняя пропорции.", "crop": "Перетаскивайте рамку обрезки и точно настраивайте её.", "upscale": "Аккуратно увеличивайте размеры изображения.", "split": "Разделяйте изображение на строки, столбцы или сетку и скачивайте ZIP."}, "toolButtons": {"convert": "Конвертировать", "compress": "Сжать", "resize": "Изменить размер", "crop": "Применить обрезку", "upscale": "Увеличить", "split": "Разделить изображение"}, "controls": {"outputFormat": "Формат вывода", "quality": "Качество", "targetKb": "Целевой размер KB", "width": "Ширина px", "height": "Высота px", "fitMode": "Режим подгонки", "preventEnlargement": "Не увеличивать без необходимости", "splitMethod": "Способ разделения", "rows": "Строки", "columns": "Столбцы", "namingStyle": "Стиль именования", "left": "Слева", "top": "Сверху", "cropWidth": "Ширина", "cropHeight": "Высота", "cropEmpty": "Загрузите изображение для предпросмотра и выбора области обрезки", "cropHelp": "Перетащите рамку обрезки по изображению и изменяйте её за углы или края. Числа обновляются автоматически.", "splitTip": "Split Image делит изображение на равные части и скачивает их ZIP-архивом."}, "options": {"fitInside": "Внутри рамки", "fitCover": "Покрыть и обрезать", "fitContain": "Поместить с фоном", "fitFill": "Растянуть", "fitOutside": "Снаружи", "splitBoth": "Строки и столбцы", "splitRows": "Только строки", "splitColumns": "Только столбцы", "nameGrid": "Метки строк и столбцов", "nameSequence": "Простая последовательность"}, "trust": ["Обработка в памяти", "Лимит пакета: 10 файлов", "Конвертация • Сжатие • Размер • Обрезка • Разделение"], "sections": {"formatsTitle": "Конвертация популярных форматов изображений", "popularTitle": "Популярные запросы конвертации", "benefits": "Преимущества платформы", "faqTitle": "Частые вопросы"}, "dashboard": [["Конвертировать", "Более 100 форматов"], ["Сжать", "Уменьшить размер без потери ясности"], ["Размер", "Быстро изменить размеры"], ["Обрезать", "Точная обрезка изображений"], ["Разделить", "Разрезать на строки и столбцы"], ["Другие инструменты", "Все форматы в одном месте"]], "trustStrip": [["Безопасно и приватно", "Обработка в памяти"], ["Очень быстро", "Конвертация за секунды"], ["Без регистрации", "Начинайте сразу"]], "features": [["Быстрая конвертация", "Конвертируйте фото, графику и скриншоты в современные веб-форматы."], ["Сжатие до цели", "Уменьшайте большие изображения до целей вроде 1 MB с балансом качества."], ["Пакетная обработка", "Обрабатывайте одно изображение или до 10 файлов сразу."], ["Приватный процесс", "Файлы используются только для текущего запроса, превью очищаются при обновлении."]], "faqEyebrow": "Вопросы", "faq": [["Можно конвертировать PNG в JPG?", "Да. Загрузите PNG, выберите JPG как формат вывода и нажмите конвертацию."], ["Можно конвертировать JPG в WebP?", "Да. WebP доступен в выборе формата вывода."], ["Можно разделить изображение на равные части?", "Да. Split Image делит на строки, столбцы или сетку и скачивает ZIP."], ["Можно сжать изображение 20 MB почти до 1 MB?", "Используйте Сжатие и задайте 1024 KB. Детальным изображениям может понадобиться меньшее качество или размер."], ["Можно задать точные размеры?", "Да. Введите ширину и высоту и выберите режим подгонки."], ["В режиме обрезки есть предпросмотр?", "Да. Область обрезки можно перетаскивать и изменять прямо на фото."], ["Вы храните мои изображения?", "Нет. Файлы обрабатываются в памяти для текущего запроса, превью очищаются при обновлении."], ["Есть ограничение файлов?", "Да. Максимум 10 файлов для стабильности и скорости."]], "footer": "Безопасные инструменты для конвертации, сжатия, изменения размера, обрезки и разделения изображений. Создано", "footerRights": "Все права защищены.", "footerLinks": {"privacy": "Конфиденциальность", "terms": "Условия", "contact": "Контакты", "sitemap": "Карта сайта"}}};
const PRX_LANGUAGE_STORAGE_KEY = 'prismix-language';

const PRX_CREATOR_I18N = {
  en: { footer: 'Secure, privacy-focused image conversion, compression, resizing, crop preview and split image tools. Designed and developed by', rights: 'All rights reserved.', contactReady: 'Your message has been sent successfully.', contactSending: 'Sending your message...', contactFallback: 'Your email app has been opened with the message details. Please send it to complete delivery.', contactError: 'Message delivery could not be completed. Please email us directly at info@hakkiburakbakirci.com.', contactName: 'Full name', contactEmail: 'Email address', contactMessage: 'Message', contactButton: 'Send message', contactNamePh: 'Your full name', contactEmailPh: 'you@example.com', contactMessagePh: 'Write your message here' },
  tr: { footer: 'Güvenli, gizlilik odaklı görsel dönüştürme, sıkıştırma, boyutlandırma, kırpma önizleme ve görsel bölme araçları. Hakkı Burak Bakırcı tarafından tasarlanıp geliştirilmiştir:', rights: 'Tüm hakları saklıdır.', contactReady: 'Mesajınız başarıyla gönderildi.', contactSending: 'Mesajınız gönderiliyor...', contactFallback: 'E-posta uygulamanız mesaj bilgileriyle açıldı. Gönderimi tamamlamak için lütfen gönderin.', contactError: 'Mesaj gönderimi tamamlanamadı. Lütfen doğrudan info@hakkiburakbakirci.com adresine e-posta gönderin.', contactName: 'Ad soyad', contactEmail: 'E-posta adresi', contactMessage: 'Mesaj', contactButton: 'Mesaj gönder', contactNamePh: 'Adınızı ve soyadınızı yazın', contactEmailPh: 'ornek@eposta.com', contactMessagePh: 'Mesajınızı buraya yazın' },
  es: { footer: 'Herramientas seguras y centradas en la privacidad para convertir, comprimir, redimensionar, recortar y dividir imágenes. Diseñado y desarrollado por', rights: 'Todos los derechos reservados.', contactReady: 'Tu mensaje se ha enviado correctamente.', contactSending: 'Enviando tu mensaje...', contactFallback: 'Tu aplicación de correo se abrió con los detalles del mensaje. Envíalo para completar el envío.', contactError: 'No se pudo completar el envío. Escríbenos directamente a info@hakkiburakbakirci.com.', contactName: 'Nombre completo', contactEmail: 'Correo electrónico', contactMessage: 'Mensaje', contactButton: 'Enviar mensaje', contactNamePh: 'Tu nombre completo', contactEmailPh: 'tu@ejemplo.com', contactMessagePh: 'Escribe tu mensaje aquí' },
  'pt-BR': { footer: 'Ferramentas seguras e focadas em privacidade para converter, comprimir, redimensionar, recortar e dividir imagens. Projetado e desenvolvido por', rights: 'Todos os direitos reservados.', contactReady: 'Sua mensagem foi enviada com sucesso.', contactSending: 'Enviando sua mensagem...', contactFallback: 'Seu aplicativo de e-mail foi aberto com os detalhes da mensagem. Envie para concluir.', contactError: 'Não foi possível concluir o envio. Envie um e-mail direto para info@hakkiburakbakirci.com.', contactName: 'Nome completo', contactEmail: 'E-mail', contactMessage: 'Mensagem', contactButton: 'Enviar mensagem', contactNamePh: 'Seu nome completo', contactEmailPh: 'voce@exemplo.com', contactMessagePh: 'Escreva sua mensagem aqui' },
  de: { footer: 'Sichere, datenschutzorientierte Tools zum Konvertieren, Komprimieren, Ändern der Größe, Zuschneiden und Teilen von Bildern. Entworfen und entwickelt von', rights: 'Alle Rechte vorbehalten.', contactReady: 'Deine Nachricht wurde erfolgreich gesendet.', contactSending: 'Nachricht wird gesendet...', contactFallback: 'Deine E-Mail-App wurde mit den Nachrichtendaten geöffnet. Bitte senden, um die Zustellung abzuschließen.', contactError: 'Die Nachricht konnte nicht gesendet werden. Bitte sende direkt eine E-Mail an info@hakkiburakbakirci.com.', contactName: 'Vollständiger Name', contactEmail: 'E-Mail-Adresse', contactMessage: 'Nachricht', contactButton: 'Nachricht senden', contactNamePh: 'Dein vollständiger Name', contactEmailPh: 'du@beispiel.de', contactMessagePh: 'Schreibe deine Nachricht hier' },
  fr: { footer: 'Outils sécurisés et axés sur la confidentialité pour convertir, compresser, redimensionner, recadrer et découper des images. Conçu et développé par', rights: 'Tous droits réservés.', contactReady: 'Votre message a bien été envoyé.', contactSending: 'Envoi de votre message...', contactFallback: 'Votre application e-mail s’est ouverte avec les détails du message. Envoyez-le pour terminer.', contactError: 'L’envoi du message n’a pas pu être terminé. Écrivez-nous directement à info@hakkiburakbakirci.com.', contactName: 'Nom complet', contactEmail: 'Adresse e-mail', contactMessage: 'Message', contactButton: 'Envoyer le message', contactNamePh: 'Votre nom complet', contactEmailPh: 'vous@exemple.com', contactMessagePh: 'Écrivez votre message ici' },
  it: { footer: 'Strumenti sicuri e orientati alla privacy per convertire, comprimere, ridimensionare, ritagliare e dividere immagini. Progettato e sviluppato da', rights: 'Tutti i diritti riservati.', contactReady: 'Il messaggio è stato inviato correttamente.', contactSending: 'Invio del messaggio...', contactFallback: 'L’app e-mail si è aperta con i dettagli del messaggio. Invia per completare.', contactError: 'Invio non completato. Scrivici direttamente a info@hakkiburakbakirci.com.', contactName: 'Nome completo', contactEmail: 'Indirizzo e-mail', contactMessage: 'Messaggio', contactButton: 'Invia messaggio', contactNamePh: 'Il tuo nome completo', contactEmailPh: 'tu@esempio.com', contactMessagePh: 'Scrivi qui il tuo messaggio' },
  id: { footer: 'Alat konversi, kompresi, ubah ukuran, crop, dan split gambar yang aman serta mengutamakan privasi. Dirancang dan dikembangkan oleh', rights: 'Seluruh hak cipta dilindungi.', contactReady: 'Pesan Anda berhasil dikirim.', contactSending: 'Mengirim pesan Anda...', contactFallback: 'Aplikasi email Anda terbuka dengan detail pesan. Silakan kirim untuk menyelesaikan.', contactError: 'Pengiriman pesan belum selesai. Silakan email langsung ke info@hakkiburakbakirci.com.', contactName: 'Nama lengkap', contactEmail: 'Alamat email', contactMessage: 'Pesan', contactButton: 'Kirim pesan', contactNamePh: 'Nama lengkap Anda', contactEmailPh: 'anda@contoh.com', contactMessagePh: 'Tulis pesan Anda di sini' },
  ja: { footer: '安全でプライバシー重視の画像変換、圧縮、リサイズ、切り抜き、分割ツール。設計・開発:', rights: 'All rights reserved.', contactReady: 'メッセージを送信しました。', contactSending: 'メッセージを送信しています...', contactFallback: 'メールアプリがメッセージ内容付きで開きました。送信して完了してください。', contactError: '送信を完了できませんでした。info@hakkiburakbakirci.com へ直接メールしてください。', contactName: '氏名', contactEmail: 'メールアドレス', contactMessage: 'メッセージ', contactButton: 'メッセージを送信', contactNamePh: '氏名を入力', contactEmailPh: 'you@example.com', contactMessagePh: 'メッセージを入力してください' },
  ko: { footer: '안전하고 개인정보를 우선하는 이미지 변환, 압축, 리사이즈, 크롭 및 분할 도구. 설계 및 개발:', rights: '모든 권리 보유.', contactReady: '메시지가 성공적으로 전송되었습니다.', contactSending: '메시지를 보내는 중...', contactFallback: '메일 앱이 메시지 내용과 함께 열렸습니다. 전송을 눌러 완료하세요.', contactError: '메시지 전송을 완료할 수 없습니다. info@hakkiburakbakirci.com 으로 직접 이메일을 보내주세요.', contactName: '이름', contactEmail: '이메일 주소', contactMessage: '메시지', contactButton: '메시지 보내기', contactNamePh: '이름을 입력하세요', contactEmailPh: 'you@example.com', contactMessagePh: '메시지를 작성하세요' },
  'zh-CN': { footer: '安全、注重隐私的图片转换、压缩、调整尺寸、裁剪和拆分工具。由以下人员设计并开发：', rights: '保留所有权利。', contactReady: '消息已成功发送。', contactSending: '正在发送消息...', contactFallback: '邮件应用已打开并填入消息内容。请发送以完成提交。', contactError: '消息发送未完成。请直接发送邮件至 info@hakkiburakbakirci.com。', contactName: '姓名', contactEmail: '电子邮箱', contactMessage: '消息', contactButton: '发送消息', contactNamePh: '请输入姓名', contactEmailPh: 'you@example.com', contactMessagePh: '在此输入消息' },
  ar: { footer: 'أدوات آمنة وتركّز على الخصوصية لتحويل الصور وضغطها وتغيير حجمها وقصها وتقسيمها. صُممت وطُورت بواسطة', rights: 'جميع الحقوق محفوظة.', contactReady: 'تم إرسال رسالتك بنجاح.', contactSending: 'جارٍ إرسال رسالتك...', contactFallback: 'تم فتح تطبيق البريد مع تفاصيل الرسالة. يُرجى الإرسال لإكمال العملية.', contactError: 'تعذر إكمال الإرسال. راسلنا مباشرة على info@hakkiburakbakirci.com.', contactName: 'الاسم الكامل', contactEmail: 'البريد الإلكتروني', contactMessage: 'الرسالة', contactButton: 'إرسال الرسالة', contactNamePh: 'اكتب اسمك الكامل', contactEmailPh: 'you@example.com', contactMessagePh: 'اكتب رسالتك هنا' },
  hi: { footer: 'सुरक्षित, privacy-focused image conversion, compression, resize, crop और split image tools. Design और development:', rights: 'सर्वाधिकार सुरक्षित.', contactReady: 'आपका संदेश सफलतापूर्वक भेज दिया गया.', contactSending: 'आपका संदेश भेजा जा रहा है...', contactFallback: 'आपका email app message details के साथ खुल गया है. भेजने के लिए Send दबाएँ.', contactError: 'Message delivery पूरी नहीं हो सकी. कृपया सीधे info@hakkiburakbakirci.com पर email करें.', contactName: 'पूरा नाम', contactEmail: 'ईमेल पता', contactMessage: 'संदेश', contactButton: 'संदेश भेजें', contactNamePh: 'अपना पूरा नाम लिखें', contactEmailPh: 'you@example.com', contactMessagePh: 'अपना संदेश यहाँ लिखें' },
  ru: { footer: 'Безопасные инструменты с акцентом на приватность для конвертации, сжатия, изменения размера, кадрирования и разделения изображений. Дизайн и разработка:', rights: 'Все права защищены.', contactReady: 'Ваше сообщение успешно отправлено.', contactSending: 'Отправка сообщения...', contactFallback: 'Почтовое приложение открыто с данными сообщения. Отправьте письмо, чтобы завершить.', contactError: 'Не удалось завершить отправку. Напишите напрямую на info@hakkiburakbakirci.com.', contactName: 'Полное имя', contactEmail: 'Адрес электронной почты', contactMessage: 'Сообщение', contactButton: 'Отправить сообщение', contactNamePh: 'Ваше полное имя', contactEmailPh: 'you@example.com', contactMessagePh: 'Напишите сообщение здесь' }
};
function prxCreatorText(key, lang = currentLanguage) {
  const pack = PRX_CREATOR_I18N[normalizeLang(lang)] || PRX_CREATOR_I18N.en;
  return pack[key] || PRX_CREATOR_I18N.en[key] || '';
}


function normalizeLang(code = '') {
  const raw = String(code || '').trim();
  if (!raw) return 'en';
  const lower = raw.toLowerCase().replace('_', '-');
  if (lower.startsWith('pt')) return 'pt-BR';
  if (lower.startsWith('zh')) return 'zh-CN';
  const exact = PRX_LOCALES.find((item) => item.code.toLowerCase() === lower);
  if (exact) return exact.code;
  const base = lower.split('-')[0];
  const byBase = PRX_LOCALES.find((item) => item.code.toLowerCase().split('-')[0] === base);
  return byBase ? byBase.code : 'en';
}

function langFromPath() {
  const first = window.location.pathname.split('/').filter(Boolean)[0] || '';
  if (!first) return '';
  const match = PRX_LOCALES.find((item) => item.path.replaceAll('/', '').toLowerCase() === first.toLowerCase());
  return match?.code || '';
}

function detectLanguage() {
  const saved = localStorage.getItem(PRX_LANGUAGE_STORAGE_KEY);
  if (saved) return normalizeLang(saved);
  const fromPath = langFromPath();
  if (fromPath) return fromPath;
  return normalizeLang((navigator.languages && navigator.languages[0]) || navigator.language || 'en');
}

let currentLanguage = detectLanguage();
function i18n(key, fallback = '') {
  const langPack = PRX_I18N[currentLanguage] || PRX_I18N.en;
  return key.split('.').reduce((obj, part) => obj && obj[part], langPack) || key.split('.').reduce((obj, part) => obj && obj[part], PRX_I18N.en) || fallback;
}

function setNodeText(selector, value) {
  const node = document.querySelector(selector);
  if (node && value) node.textContent = value;
}

function setLabelPrefix(label, value) {
  if (!label || !value) return;
  const textNode = Array.from(label.childNodes).find((node) => node.nodeType === Node.TEXT_NODE && node.nodeValue.trim());
  if (textNode) textNode.nodeValue = value;
}

function localizeModeTabs() {
  document.querySelectorAll('.mode-tabs label').forEach((label) => {
    const input = label.querySelector('input[name="mode"]');
    if (!input) return;
    Array.from(label.childNodes).filter((node) => node.nodeType === Node.TEXT_NODE).forEach((node) => node.remove());
    label.append(` ${i18n(`modes.${input.value}`, input.value)}`);
  });
}


function buildLanguageOptions(select) {
  if (!select) return;
  select.innerHTML = '';
  PRX_LOCALES.forEach((item) => {
    const option = document.createElement('option');
    option.value = item.code;
    option.textContent = `${item.nativeName} · ${item.englishName}`;
    select.appendChild(option);
  });
}

function hasManualLanguageChoice() {
  return Boolean(localStorage.getItem(PRX_LANGUAGE_STORAGE_KEY));
}

function selectedLocaleName(code = currentLanguage) {
  return PRX_LOCALES.find((item) => item.code === normalizeLang(code))?.nativeName || code;
}

function syncLanguageSelects() {
  document.querySelectorAll('[data-language-select]').forEach((select) => {
    select.value = currentLanguage;
    select.setAttribute('aria-label', i18n('chooseLanguage', 'Choose language'));
  });
  document.querySelectorAll('[data-language-current]').forEach((node) => {
    node.textContent = selectedLocaleName();
  });
  document.querySelectorAll('[data-language-current-full]').forEach((node) => {
    const item = PRX_LOCALES.find((locale) => locale.code === normalizeLang(currentLanguage));
    node.textContent = item ? `${item.nativeName} · ${item.englishName}` : selectedLocaleName();
  });
  document.querySelectorAll('[data-language-sheet-title]').forEach((node) => {
    node.textContent = i18n('chooseLanguage', 'Choose language');
  });
  document.querySelectorAll('[data-language-sheet-subtitle]').forEach((node) => {
    node.textContent = getLanguageSheetSubtitle();
  });
  document.querySelectorAll('[data-language-option]').forEach((button) => {
    const isActive = normalizeLang(button.dataset.languageOption) === currentLanguage;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

function updateLanguagePlacement(manual = hasManualLanguageChoice()) {
  document.body.classList.toggle('language-choice-made', manual);
  const footer = document.querySelector('[data-language-footer]');
  const notice = document.querySelector('[data-language-footer-notice]');
  const footerTitle = document.querySelector('[data-language-footer-title]');
  if (footer) footer.hidden = !manual;
  if (footerTitle) footerTitle.textContent = i18n('footerChangeLanguage', 'Change language at any time');
  if (notice) notice.textContent = i18n('languageChanged', 'Your language has been changed to {language}.').replace('{language}', selectedLocaleName());
}

function handleLanguageChange(value, manual = true) {
  if (manual) localStorage.setItem(PRX_LANGUAGE_STORAGE_KEY, normalizeLang(value));
  applyLanguage(value, manual);
  if (manual) {
    closeLanguageSheet();
    showToast(i18n('languageChanged', 'Language changed to {language}.').replace('{language}', selectedLocaleName()), 2500);
  }
}

function getLanguageSheetSubtitle() {
  const generic = {
    en: 'The site will instantly switch to your selected language. You can change it again from the footer.',
    tr: 'Site seçtiğiniz dile anında döner. Dili daha sonra sayfanın en altından tekrar değiştirebilirsiniz.',
    es: 'El sitio cambiará al idioma elegido al instante. Puedes volver a cambiarlo desde el pie de página.',
    de: 'Die Website wechselt sofort zur gewählten Sprache. Du kannst sie später im Footer erneut ändern.',
    fr: 'Le site passe immédiatement dans la langue choisie. Vous pouvez la modifier à nouveau dans le pied de page.',
    'pt-BR': 'O site muda instantaneamente para o idioma escolhido. Você pode alterar novamente no rodapé.',
    ja: '選択した言語にすぐ切り替わります。あとでフッターから変更できます。',
    ar: 'سيتحول الموقع فورًا إلى اللغة المختارة. يمكنك تغييرها لاحقًا من أسفل الصفحة.',
    ru: 'Сайт сразу переключится на выбранный язык. Позже его можно изменить внизу страницы.'
  };
  return generic[currentLanguage] || generic.en;
}

function createLanguageSwitcher(kind = 'top') {
  const wrap = document.createElement(kind === 'footer' ? 'section' : 'div');
  wrap.className = kind === 'footer' ? 'prx-language-footer glass' : 'prx-language-switcher prx-language-top glass';
  wrap.dataset.languageSwitcher = kind;
  if (kind === 'footer') wrap.dataset.languageFooter = 'true';
  wrap.innerHTML = kind === 'footer'
    ? `<span class="prx-language-icon" aria-hidden="true">🌐</span><div><strong data-language-footer-title></strong><p data-language-footer-notice></p></div><label class="sr-only" for="footerLanguageSelect">Language</label><select id="footerLanguageSelect" data-language-select></select><button class="prx-language-change-button" type="button" data-open-language-sheet><span>🌐</span><b data-language-current></b></button>`
    : `<span class="prx-language-icon" aria-hidden="true">🌐</span><span class="prx-language-label"></span><select data-language-select></select><button class="prx-mobile-language-trigger" type="button" data-open-language-sheet aria-haspopup="dialog"><span>🌐</span><b data-language-current></b><i aria-hidden="true">⌄</i></button>`;
  const select = wrap.querySelector('select');
  buildLanguageOptions(select);
  select.addEventListener('change', () => handleLanguageChange(select.value, true));
  wrap.querySelectorAll('[data-open-language-sheet]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      openLanguageSheet();
    });
  });
  return wrap;
}

function createLanguageSheet() {
  const sheet = document.createElement('div');
  sheet.className = 'prx-language-sheet';
  sheet.hidden = true;
  sheet.setAttribute('role', 'dialog');
  sheet.setAttribute('aria-modal', 'true');
  sheet.setAttribute('aria-labelledby', 'prxLanguageSheetTitle');
  sheet.innerHTML = `<div class="prx-language-sheet-backdrop" data-close-language-sheet></div>
    <section class="prx-language-sheet-panel glass">
      <button class="prx-language-sheet-close" type="button" data-close-language-sheet aria-label="Close">×</button>
      <span class="prx-language-sheet-kicker">🌐 Prismix</span>
      <h2 id="prxLanguageSheetTitle" data-language-sheet-title></h2>
      <p data-language-sheet-subtitle></p>
      <div class="prx-language-grid"></div>
    </section>`;
  const grid = sheet.querySelector('.prx-language-grid');
  PRX_LOCALES.forEach((item) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'prx-language-option';
    button.dataset.languageOption = item.code;
    button.innerHTML = `<span>${item.nativeName}</span><small>${item.englishName}</small>`;
    button.addEventListener('click', () => handleLanguageChange(item.code, true));
    grid.appendChild(button);
  });
  sheet.querySelectorAll('[data-close-language-sheet]').forEach((button) => button.addEventListener('click', closeLanguageSheet));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLanguageSheet();
  });
  return sheet;
}

function openLanguageSheet() {
  const sheet = document.querySelector('.prx-language-sheet');
  if (!sheet) return;
  syncLanguageSelects();
  sheet.hidden = false;
  document.body.classList.add('language-sheet-open');
  window.setTimeout(() => sheet.classList.add('active'), 10);
  const active = sheet.querySelector('[data-language-option].active') || sheet.querySelector('[data-language-option]');
  active?.focus({ preventScroll: true });
}

function closeLanguageSheet() {
  const sheet = document.querySelector('.prx-language-sheet');
  if (!sheet || sheet.hidden) return;
  sheet.classList.remove('active');
  document.body.classList.remove('language-sheet-open');
  window.setTimeout(() => { sheet.hidden = true; }, 220);
}

function initLanguageSwitcher() {
  if (!document.querySelector('.prx-language-top')) document.body.appendChild(createLanguageSwitcher('top'));
  if (!document.querySelector('.prx-language-sheet')) document.body.appendChild(createLanguageSheet());
  const footer = document.querySelector('.footer');
  if (footer && !document.querySelector('[data-language-footer]')) footer.appendChild(createLanguageSwitcher('footer'));
  updateLanguagePlacement(hasManualLanguageChoice());
  syncLanguageSelects();
}

function setTextAll(selector, values) {
  const nodes = Array.from(document.querySelectorAll(selector));
  nodes.forEach((node, index) => {
    const value = Array.isArray(values) ? values[index] : values;
    if (node && value) node.textContent = value;
  });
}

function localizeSelectOptions(select, labels = []) {
  if (!select) return;
  Array.from(select.options).forEach((option, index) => {
    if (labels[index]) option.textContent = labels[index];
  });
}

function localizeDashboard(pack) {
  document.querySelectorAll('.dash-tool-card').forEach((card, index) => {
    const item = pack.dashboard?.[index];
    if (!item) return;
    const title = card.querySelector('strong');
    const desc = card.querySelector('small');
    if (title) title.textContent = item[0];
    if (desc) desc.textContent = item[1];
  });
  document.querySelectorAll('.dashboard-trust-strip span').forEach((card, index) => {
    const item = pack.trustStrip?.[index];
    if (!item) return;
    const title = card.querySelector('b');
    const desc = card.querySelector('small');
    if (title) title.textContent = item[0];
    if (desc) desc.textContent = item[1];
  });
  document.querySelectorAll('.feature-card').forEach((card, index) => {
    const item = pack.features?.[index];
    if (!item) return;
    const title = card.querySelector('h3');
    const desc = card.querySelector('p');
    if (title) title.textContent = item[0];
    if (desc) desc.textContent = item[1];
  });
}

function localizeFaq(pack) {
  setNodeText('.faq .eyebrow', pack.faqEyebrow || pack.sections?.faqTitle);
  setNodeText('.faq h2', pack.sections?.faqTitle);
  const details = Array.from(document.querySelectorAll('.faq details'));
  details.forEach((item, index) => {
    const faq = pack.faq?.[index];
    if (!faq) return;
    const summary = item.querySelector('summary');
    const p = item.querySelector('p');
    if (summary) summary.textContent = faq[0];
    if (p) p.textContent = faq[1];
  });
}

function localizeFooter(pack) {
  const footer = document.querySelector('.footer');
  if (!footer) return;
  const strong = footer.querySelector('div > strong');
  if (strong) strong.textContent = pack.h1 || 'Prismix Image Converter';
  const desc = footer.querySelector('div > p:not(.copyright)');
  if (desc) {
    const author = desc.querySelector('a')?.cloneNode(true) || document.createElement('a');
    author.href = 'https://www.hakkiburakbakirci.com';
    author.target = '_blank';
    author.rel = 'noopener';
    author.textContent = 'Hakkı Burak Bakırcı';
    desc.textContent = `${prxCreatorText('footer')} `;
    desc.appendChild(author);
    desc.append('.');
  }
  const rights = footer.querySelector('.copyright');
  if (rights) {
    const yearSpan = rights.querySelector('[data-current-year]');
    const year = yearSpan?.textContent || String(new Date().getFullYear());
    rights.innerHTML = `© <span data-current-year>${year}</span> Hakkı Burak Bakırcı. ${prxCreatorText('rights')}`;
  }
  const links = footer.querySelectorAll('nav a');
  const names = [pack.footerLinks?.privacy, pack.footerLinks?.terms, pack.footerLinks?.contact, pack.footerLinks?.sitemap];
  links.forEach((link, index) => { if (names[index]) link.textContent = names[index]; });
  setNodeText('[data-language-footer-title]', pack.footerChangeLanguage || pack.chooseLanguage || 'Change language');
}



function applyLanguage(lang = currentLanguage, manual = false) {
  currentLanguage = normalizeLang(lang);
  const pack = PRX_I18N[currentLanguage] || PRX_I18N.en;
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  document.body.dataset.language = currentLanguage;
  document.title = pack.seoTitle || document.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && pack.seoDescription) metaDesc.setAttribute('content', pack.seoDescription);
  const metaKeys = document.querySelector('meta[name="keywords"]');
  if (metaKeys && pack.seoKeywords) metaKeys.setAttribute('content', pack.seoKeywords);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && pack.seoTitle) ogTitle.setAttribute('content', pack.seoTitle);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && pack.seoDescription) ogDesc.setAttribute('content', pack.seoDescription);
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle && pack.seoTitle) twitterTitle.setAttribute('content', pack.seoTitle);
  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc && pack.seoDescription) twitterDesc.setAttribute('content', pack.seoDescription);

  setNodeText('.prx-language-label', pack.language || 'Language');
  setNodeText('.sidebar-brand small', pack.brandSmall || 'Image Converter');
  setNodeText('.launch-copy > .eyebrow', pack.eyebrow);
  setNodeText('#main-title', pack.h1);
  setNodeText('.hero-gradient-line', pack.heroLine);
  const heroP = document.querySelector('.launch-copy > p:not(.hero-gradient-line):not(.mobile-upload-note)');
  if (heroP && pack.heroP) heroP.textContent = pack.heroP;
  const heroButtons = document.querySelectorAll('.hero-actions a');
  if (heroButtons[0]) heroButtons[0].textContent = pack.upload;
  if (heroButtons[1]) heroButtons[1].textContent = pack.guides;
  document.querySelectorAll('.trust-row span').forEach((span, index) => { if (pack.trust?.[index]) span.textContent = pack.trust[index]; });

  setNodeText('.upload-panel .eyebrow', pack.start);
  setNodeText('.upload-panel h2', pack.uploadTitle);
  setNodeText('.upload-panel p', pack.uploadP);
  setNodeText('.dropzone strong', pack.drop);
  setNodeText('#chooseFilesButton', pack.choose);
  setNodeText('.crop-empty', pack.controls?.cropEmpty);
  setNodeText('.crop-help', pack.controls?.cropHelp);
  setNodeText('#splitTip', pack.controls?.splitTip);
  setNodeText('#downloadButton', pack.download || 'Download');

  document.querySelectorAll('.nav-item').forEach((link) => {
    const kind = link.dataset.navKind || getNavKind(link);
    const label = link.querySelector('em');
    if (label && pack.nav?.[kind]) label.textContent = pack.nav[kind];
  });
  localizeModeTabs();
  syncMobileTabbar();

  setLabelPrefix(document.querySelector('.controls label'), pack.controls?.outputFormat || 'Output format');
  setLabelPrefix(document.querySelector('.controls label:nth-child(2)'), pack.controls?.quality || 'Quality');
  setLabelPrefix(document.querySelector('#compressControls'), pack.controls?.targetKb || 'Target size KB');
  setLabelPrefix(document.querySelector('#resizeControls label:nth-child(1)'), pack.controls?.width || 'Width px');
  setLabelPrefix(document.querySelector('#resizeControls label:nth-child(2)'), pack.controls?.height || 'Height px');
  setLabelPrefix(document.querySelector('#resizeControls label:nth-child(3)'), pack.controls?.fitMode || 'Fit mode');
  const enlargement = document.querySelector('#withoutEnlargement')?.closest('label');
  if (enlargement) {
    const input = enlargement.querySelector('input');
    enlargement.textContent = ` ${pack.controls?.preventEnlargement || 'Prevent unwanted enlargement'}`;
    if (input) enlargement.prepend(input);
  }
  setLabelPrefix(document.querySelector('#splitControls label:nth-child(1)'), pack.controls?.splitMethod || 'Split method');
  setLabelPrefix(document.querySelector('#splitControls label:nth-child(2)'), pack.controls?.rows || 'Rows');
  setLabelPrefix(document.querySelector('#splitControls label:nth-child(3)'), pack.controls?.columns || 'Columns');
  setLabelPrefix(document.querySelector('#splitControls label:nth-child(4)'), pack.controls?.namingStyle || 'Naming style');
  setLabelPrefix(document.querySelector('.crop-controls label:nth-child(1)'), pack.controls?.left || 'Left');
  setLabelPrefix(document.querySelector('.crop-controls label:nth-child(2)'), pack.controls?.top || 'Top');
  setLabelPrefix(document.querySelector('.crop-controls label:nth-child(3)'), pack.controls?.cropWidth || 'Width');
  setLabelPrefix(document.querySelector('.crop-controls label:nth-child(4)'), pack.controls?.cropHeight || 'Height');

  localizeSelectOptions(document.querySelector('#fit'), [pack.options?.fitInside, pack.options?.fitCover, pack.options?.fitContain, pack.options?.fitFill, pack.options?.fitOutside]);
  localizeSelectOptions(document.querySelector('#splitMethod'), [pack.options?.splitBoth, pack.options?.splitRows, pack.options?.splitColumns]);
  localizeSelectOptions(document.querySelector('#splitNaming'), [pack.options?.nameGrid, pack.options?.nameSequence]);
  localizeOutputFormatOptions(pack);
  localizeMobileCopy(pack);

  setNodeText('.formats .eyebrow', pack.sections?.formatsEyebrow || 'Supported formats');
  setNodeText('.formats h2', pack.sections?.formatsTitle);
  setNodeText('.quick-links .eyebrow', pack.sections?.popularEyebrow || 'Popular searches');
  setNodeText('.quick-links h2', pack.sections?.popularTitle);
  localizeDashboard(pack);
  localizeFaq(pack);
  localizeFooter(pack);
  localizeCompletePage(pack);
  syncLanguageSelects();
  updateLanguagePlacement(hasManualLanguageChoice() || manual);
  refreshMobileToolText();
}




const PRX_COMPLETE_I18N = {
  en: {
    ads: ['Advertisement', 'Reserved Google AdSense area. Ads stay separated from upload, convert and download controls.'],
    sections: { supportedFormats: 'Supported formats', formatsPdf: 'Convert between popular image formats and PDF', popular: 'Popular searches', shortcuts: 'High-intent image conversion shortcuts', howEyebrow: 'How it works', howTitle: 'Convert, compress, resize, crop, upscale and split images in three clear steps', formatGuide: 'Format guide', formatTitle: 'Which image format should you choose?', optimization: 'Image optimization guide', why: 'Why image conversion and compression matters', history: 'Session history', recent: 'Recent actions' },
    formatsLead: 'Prismix uses a reliable Sharp-powered image engine for JPG, PNG, WebP, AVIF, GIF, TIFF, SVG, ICO, PDF and other popular image workflows. HEIC and HEIF input uses fallback decoding when native support is unavailable, and advanced output formats show a clear message when the server cannot encode them.',
    quick: ['PNG to JPG','JPG to WebP','WebP to PNG','AVIF to JPG','HEIC to JPG','HEIF to JPG','JPG to HEIC','Split Image','Compress image','Resize image','Crop image','Upscale image','WebP converter','AVIF converter'],
    how: [['Upload your image','Choose one image or up to 10 files. Prismix shows clean previews so users can confirm the right files before processing.'],['Select the output','Pick a format or tool mode, then tune quality, target size, dimensions, crop area or split grid.'],['Download instantly','The result card shows output details and gives a responsive download button that works well on mobile.']],
    seoCards: [['Free image converter for web creators','Convert PNG screenshots to JPG, export JPG photos as WebP, create AVIF files for modern websites, compress large images, resize assets and split images for design workflows.'],['Compress images without confusing settings','Use quality control and target size in KB for searches such as compress image to 1 MB, reduce JPG size, optimize PNG and make WebP smaller.'],['Resize images for websites and social media','Resize by width, height and fit mode for banners, product photos, avatars, thumbnails, marketplace images and mobile content.'],['Crop preview for safer editing','Crop mode provides an interactive preview so users can drag, resize and fine tune the crop area before downloading.'],['Split Image for grids and slices','Split Image divides a photo into rows, columns or a full grid and downloads every slice in an organized ZIP file.'],['AdSense-ready but user-first','Ads are separated from upload, processing and download controls so the site remains useful, trustworthy and policy friendly.']],
    table: { heads:['Format','Best for','Strength','Common search intent'], rows:[['JPG / JPEG','Photos and sharing','Wide compatibility','PNG to JPG, compress JPG'],['PNG','Transparency and screenshots','Lossless quality','WebP to PNG, resize PNG'],['WebP','Modern websites','Great size-to-quality balance','JPG to WebP, PNG to WebP'],['AVIF','Small modern images','Advanced compression','AVIF converter, AVIF to JPG'],['SVG','Logos and vectors','Scalable graphics','SVG converter'],['PDF','Documents and sharing','Easy packaging','Image to PDF']] },
    longform: ['Images are often the heaviest assets on a page. Prismix helps users choose a better format, reduce file size, resize dimensions and export files for the final use case.','For websites, WebP and AVIF can reduce image weight when browser support is acceptable. PNG is useful for transparency, JPG remains practical for photos and PDF is simple for documents.','Prismix targets real search workflows such as HEIC to JPG, JPG to WebP, PNG to JPG, compress image to 1 MB, resize image online, crop image with preview and split image into rows and columns.','The platform avoids fake promises. Common web formats are handled directly, HEIC and HEIF input uses fallback decoders and unsupported advanced output formats return a clear message instead of a broken file.'],
    extraFaq: [['Can I convert images to PDF?','Yes. Select PDF as the output format to create a PDF document from your uploaded image or images.'],['How does HEIC and HEIF conversion work?','Prismix uses fallback HEIC/HEIF decoders for common iPhone photos when native server decoding is unavailable.'],['Is Prismix Image Converter mobile-friendly?','Yes. Upload areas, controls, result cards and download buttons are responsive for mobile screens.'],['Can I use this for e-commerce images?','Yes. Resize and compression tools are useful for marketplace product photos, store images and catalog visuals.'],['What output should I choose for website speed?','WebP is a practical default for many websites. AVIF can be smaller, while JPG remains useful for broad compatibility.']],
    legal: { privacyTitle:'Privacy Policy', privacyEyebrow:'Privacy-first image tools', privacyIntro:'Prismix Image Converter is designed to feel trustworthy and simple: you choose an image, Prismix processes the current request, and your browser receives the result. The platform is created by', uploaded:'Uploaded files', uploadedP:'Uploaded files are processed in server memory for the active conversion request. Prismix does not create public media libraries, user profiles or permanent storage for uploaded images.', previews:'Local previews', previewsP:'Browser previews use temporary object URLs so you can see selected files and crop areas. Refreshing or leaving the page clears the current preview state.', storage:'Cookies and local storage', storageP:'Prismix uses necessary local storage to remember your cookie choice. Optional analytics and advertising preferences should only be used according to your consent and local requirements.', ads:'Advertising transparency', adsP:'Ad areas are separated from primary upload, convert and download controls to keep the tool usable and AdSense-ready.', contact:'Contact', contactP:'For privacy or support questions, contact', termsTitle:'Terms of Use', termsEyebrow:'Terms and responsible use', termsIntro:'Prismix Image Converter provides online image conversion, compression, resize, crop, upscale and split image tools. The website is created by', use:'Use of the service', useP:'You are responsible for the files you upload and for ensuring that you have the right to process, convert or download them. Do not upload illegal, harmful or rights-infringing material.', accuracy:'Output accuracy', accuracyP:'Prismix is built to provide reliable image processing for common formats. Advanced formats may depend on server codec support, and the system shows a clear error instead of a fake successful result.', noAccount:'No account requirement', noAccountP:'The core conversion flow does not require sign-in, which keeps access simple and avoids unnecessary user data collection.', availability:'Availability', availabilityP:'The website may be updated, improved or temporarily unavailable during maintenance. Features can change as the image engine and format support improve.', ownership:'Ownership', contactEyebrow:'Support and contact', contactTitle:'Contact Prismix Image Converter', contactIntro:'Have a question, bug report, business inquiry or privacy request? You can contact us at', fullName:'Full name', email:'Email address', message:'Message', send:'Send message', official:'Official contact email', created:'Designed and developed by', rights:'Rights notice' },
    cookies: { title:'Cookies & privacy', body:'We use essential cookies/local storage to remember your cookie choice and keep Prismix stable. Optional analytics and advertising preferences are only used when you allow them.', necessary:'Necessary', analytics:'Analytics', ads:'Ads personalization', reject:'Reject All', manage:'Manage Preferences', accept:'Accept All' },
    runtime: { uploadFirst:'Please upload at least one file first.', maxFiles:'You can upload a maximum of {max} files at once.', recentEmpty:'Your recent actions will appear here. Files are not stored.', result:'Old size: {old} • New size: {new} • Savings: {saving} • Pieces: {pieces}' }
  },
  tr: {
    ads:['Reklam','Google AdSense alanı. Reklamlar yükleme, dönüştürme ve indirme kontrollerinden ayrı tutulur.'],
    sections:{supportedFormats:'Desteklenen formatlar',formatsPdf:'Popüler görsel formatları ve PDF arasında dönüştürün',popular:'Popüler aramalar',shortcuts:'Yüksek niyetli görsel dönüştürme kısayolları',howEyebrow:'Nasıl çalışır',howTitle:'Görselleri üç net adımda dönüştürün, sıkıştırın, boyutlandırın, kırpın, büyütün ve bölün',formatGuide:'Format rehberi',formatTitle:'Hangi görsel formatını seçmelisiniz?',optimization:'Görsel optimizasyon rehberi',why:'Görsel dönüştürme ve sıkıştırma neden önemlidir?',history:'Oturum geçmişi',recent:'Son işlemler'},
    formatsLead:'Prismix; JPG, PNG, WebP, AVIF, GIF, TIFF, SVG, ICO, PDF ve popüler görsel işlemleri için güvenilir Sharp tabanlı bir motor kullanır. HEIC ve HEIF girişinde gerektiğinde yedek çözümleyiciler devreye girer, desteklenmeyen gelişmiş çıktılarda ise kırık dosya yerine net uyarı gösterilir.',
    quick:['PNG JPG çevir','JPG WebP çevir','WebP PNG çevir','AVIF JPG çevir','HEIC JPG çevir','HEIF JPG çevir','JPG HEIC çevir','Görseli böl','Görsel sıkıştır','Görsel boyutlandır','Görsel kırp','Görsel büyüt','WebP dönüştürücü','AVIF dönüştürücü'],
    how:[['Görselinizi yükleyin','Bir görsel veya en fazla 10 dosya seçin. Prismix işlemden önce doğru dosyaları kontrol etmeniz için temiz önizlemeler gösterir.'],['Çıktıyı seçin','Formatı veya araç modunu seçin; kalite, hedef boyut, ölçüler, kırpma alanı ya da bölme ızgarasını ayarlayın.'],['Anında indirin','Sonuç kartı çıktı bilgilerini gösterir ve mobilde taşmayan duyarlı bir indirme butonu sunar.']],
    seoCards:[['Web üreticileri için ücretsiz görsel dönüştürücü','PNG ekran görüntülerini JPG’ye çevirin, JPG fotoğrafları WebP olarak dışa aktarın, modern siteler için AVIF oluşturun, sıkıştırın, boyutlandırın ve görselleri bölün.'],['Kafa karıştırmayan görsel sıkıştırma','Kalite kontrolü ve KB hedefiyle görseli 1 MB’a düşürme, JPG boyutu küçültme, PNG optimize etme ve WebP sıkıştırma aramalarına uygun akış sağlar.'],['Web siteleri ve sosyal medya için boyutlandırma','Banner, ürün fotoğrafı, avatar, küçük görsel, pazar yeri ve mobil içerikler için genişlik, yükseklik ve sığdırma modu kullanın.'],['Daha güvenli düzenleme için kırpma önizlemesi','Kırpma modu, indirmeden önce alanı sürükleyip büyütmenize ve değerleri hassas biçimde ayarlamanıza izin verir.'],['Grid ve parça için Split Image','Split Image fotoğrafı satır, sütun veya tam ızgara halinde böler ve tüm parçaları düzenli bir ZIP dosyasıyla indirir.'],['AdSense uyumlu ama kullanıcı öncelikli','Reklamlar yükleme, işlem ve indirme kontrollerinden ayrı tutulur; site güvenilir, kullanışlı ve politika dostu kalır.']],
    table:{heads:['Format','En iyi kullanım','Güçlü yön','Yaygın arama amacı'],rows:[['JPG / JPEG','Fotoğraflar ve paylaşım','Geniş uyumluluk','PNG JPG çevir, JPG sıkıştır'],['PNG','Şeffaflık ve ekran görüntüsü','Kayıpsız kalite','WebP PNG çevir, PNG boyutlandır'],['WebP','Modern web siteleri','İyi boyut/kalite dengesi','JPG WebP çevir, PNG WebP çevir'],['AVIF','Küçük modern görseller','Gelişmiş sıkıştırma','AVIF dönüştürücü, AVIF JPG çevir'],['SVG','Logo ve vektörler','Ölçeklenebilir grafik','SVG dönüştürücü'],['PDF','Belge ve paylaşım','Kolay paketleme','Görsel PDF çevir']]},
    longform:['Görseller çoğu zaman bir sayfanın en ağır dosyalarıdır. Prismix kullanıcıların daha iyi format seçmesine, dosya boyutunu azaltmasına, ölçüleri değiştirmesine ve son kullanıma uygun çıktı almasına yardımcı olur.','Web sitelerinde WebP ve AVIF uygun tarayıcı desteği olduğunda görsel ağırlığını azaltabilir. PNG şeffaflık için, JPG fotoğraf paylaşımı için, PDF ise belge oluşturmak için pratiktir.','Prismix; HEIC JPG, JPG WebP, PNG JPG, görseli 1 MB’a sıkıştırma, online boyutlandırma, önizlemeli kırpma ve görseli satır/sütunlara bölme gibi gerçek arama akışlarını hedefler.','Platform sahte vaatlerden kaçınır. Yaygın formatlar doğrudan işlenir, HEIC/HEIF için yedek çözümleyiciler kullanılır ve desteklenmeyen gelişmiş çıktılarda kırık dosya yerine net mesaj verilir.'],
    extraFaq:[['Görselleri PDF’ye çevirebilir miyim?','Evet. Yüklediğiniz görsel veya görsellerden PDF belgesi oluşturmak için çıktı formatı olarak PDF seçin.'],['HEIC ve HEIF dönüşümü nasıl çalışır?','Prismix, sunucu yerel olarak okuyamadığında yaygın iPhone fotoğrafları için yedek HEIC/HEIF çözümleyicileri kullanır.'],['Prismix mobil uyumlu mu?','Evet. Yükleme alanları, kontroller, sonuç kartları ve indirme butonları mobil ekranlara uyumludur.'],['E-ticaret görselleri için kullanabilir miyim?','Evet. Boyutlandırma ve sıkıştırma araçları ürün fotoğrafları, mağaza görselleri ve kataloglar için uygundur.'],['Web sitesi hızı için hangi çıktıyı seçmeliyim?','WebP birçok site için pratik varsayılandır. AVIF daha küçük olabilir, JPG ise geniş uyumluluk için hâlâ kullanışlıdır.']],
    legal:{privacyTitle:'Gizlilik Politikası',privacyEyebrow:'Gizlilik odaklı görsel araçları',privacyIntro:'Prismix Image Converter güvenilir ve basit hissettirmek için tasarlandı: görselinizi seçersiniz, Prismix mevcut isteği işler ve tarayıcınız sonucu alır. Platformu oluşturan kişi',uploaded:'Yüklenen dosyalar',uploadedP:'Yüklenen dosyalar aktif dönüştürme isteği için sunucu belleğinde işlenir. Prismix bu proje yapısında herkese açık medya kütüphanesi, kullanıcı profili veya kalıcı görsel depolama oluşturmaz.',previews:'Yerel önizlemeler',previewsP:'Tarayıcı önizlemeleri geçici object URL kullanır. Sayfayı yenilemek veya ayrılmak mevcut önizleme durumunu temizler.',storage:'Çerezler ve yerel depolama',storageP:'Prismix çerez tercihinizi hatırlamak için gerekli yerel depolama kullanır. İsteğe bağlı analiz ve reklam tercihleri onayınıza ve yerel gerekliliklere göre kullanılmalıdır.',ads:'Reklam şeffaflığı',adsP:'Reklam alanları ana yükleme, dönüştürme ve indirme kontrollerinden ayrıdır; bu yapı aracı kullanışlı ve AdSense’e hazır tutar.',contact:'İletişim',contactP:'Gizlilik veya destek soruları için iletişim:',termsTitle:'Kullanım Şartları',termsEyebrow:'Şartlar ve sorumlu kullanım',termsIntro:'Prismix Image Converter online görsel dönüştürme, sıkıştırma, boyutlandırma, kırpma, büyütme ve bölme araçları sunar. Web sitesini oluşturan kişi',use:'Hizmet kullanımı',useP:'Yüklediğiniz dosyalardan ve bunları işleme, dönüştürme ya da indirme hakkına sahip olduğunuzdan siz sorumlusunuz. Yasa dışı, zararlı veya hak ihlali içeren materyal yüklemeyin.',accuracy:'Çıktı doğruluğu',accuracyP:'Prismix yaygın formatlar için güvenilir görsel işleme sağlamak üzere tasarlanmıştır. Gelişmiş formatlar sunucu codec desteğine bağlı olabilir; sistem sahte başarı yerine net hata gösterir.',noAccount:'Hesap gerektirmez',noAccountP:'Temel dönüştürme akışı giriş zorunluluğu istemez; erişim basit kalır ve gereksiz kullanıcı verisi toplanmaz.',availability:'Erişilebilirlik',availabilityP:'Site güncellenebilir, geliştirilebilir veya bakım sırasında geçici olarak kullanılamayabilir. Özellikler görsel motoru ve format desteği geliştikçe değişebilir.',ownership:'Sahiplik',contactEyebrow:'Destek ve iletişim',contactTitle:'Prismix Image Converter ile iletişim',contactIntro:'Soru, hata bildirimi, iş talebi veya gizlilik isteğiniz mi var? Bize şu adresten ulaşabilirsiniz:',fullName:'Ad soyad',email:'E-posta adresi',message:'Mesaj',send:'Mesaj gönder',official:'Resmi iletişim e-postası',created:'Tasarlayan ve geliştiren',rights:'Hak bildirimi'},
    cookies:{title:'Çerezler ve gizlilik',body:'Çerez tercihinizi hatırlamak ve Prismix’i stabil tutmak için gerekli çerez/yerel depolama kullanırız. İsteğe bağlı analiz ve reklam tercihleri yalnızca izin verdiğinizde kullanılır.',necessary:'Gerekli',analytics:'Analiz',ads:'Reklam kişiselleştirme',reject:'Tümünü Reddet',manage:'Tercihleri Yönet',accept:'Tümünü Kabul Et'},
    runtime:{uploadFirst:'Lütfen önce en az bir dosya yükleyin.',maxFiles:'Tek seferde en fazla {max} dosya yükleyebilirsiniz.',recentEmpty:'Son işlemleriniz burada görünecek. Dosyalar saklanmaz.',result:'Eski boyut: {old} • Yeni boyut: {new} • Kazanç: {saving} • Parça: {pieces}'}
  }
};

function prxCompletePack() {
  return PRX_COMPLETE_I18N[currentLanguage] || PRX_COMPLETE_I18N.en;
}


const PRX_MICRO_I18N = {
  es: {ad:'Publicidad',adDesc:'Área reservada para Google AdSense. Los anuncios permanecen separados de subir, convertir y descargar.',supported:'Formatos compatibles',popular:'Búsquedas populares',how:'Cómo funciona',formatGuide:'Guía de formatos',formatTitle:'¿Qué formato de imagen deberías elegir?',optimization:'Guía de optimización de imágenes',why:'Por qué importan la conversión y compresión de imágenes',history:'Historial de sesión',recent:'Acciones recientes',online:'Imagen online',instant:'Descargar al instante',upload:'Sube tu imagen',select:'Elige la salida',adsense:'Preparado para AdSense y centrado en el usuario',privacy:'Privacidad',terms:'Términos',contact:'Contacto',sitemap:'Mapa del sitio',cookieTitle:'Cookies y privacidad',necessary:'Necesarias',analytics:'Analítica',ads:'Personalización de anuncios',reject:'Rechazar todo',manage:'Gestionar preferencias',accept:'Aceptar todo',uploadFirst:'Sube al menos un archivo primero.',maxFiles:'Puedes subir un máximo de {max} archivos a la vez.',recentEmpty:'Tus acciones recientes aparecerán aquí. Los archivos no se almacenan.',quick:['PNG a JPG','JPG a WebP','WebP a PNG','AVIF a JPG','HEIC a JPG','HEIF a JPG','JPG a HEIC','Dividir imagen','Comprimir imagen','Redimensionar imagen','Recortar imagen','Aumentar imagen','Convertidor WebP','Convertidor AVIF']},
  'pt-BR': {ad:'Publicidade',adDesc:'Área reservada para Google AdSense. Os anúncios ficam separados dos controles de upload, conversão e download.',supported:'Formatos suportados',popular:'Pesquisas populares',how:'Como funciona',formatGuide:'Guia de formatos',formatTitle:'Qual formato de imagem escolher?',optimization:'Guia de otimização de imagens',why:'Por que conversão e compressão de imagens importam',history:'Histórico da sessão',recent:'Ações recentes',online:'Imagem online',instant:'Baixar instantaneamente',upload:'Envie sua imagem',select:'Escolha a saída',adsense:'Pronto para AdSense e focado no usuário',privacy:'Privacidade',terms:'Termos',contact:'Contato',sitemap:'Mapa do site',cookieTitle:'Cookies e privacidade',necessary:'Necessário',analytics:'Análises',ads:'Personalização de anúncios',reject:'Rejeitar tudo',manage:'Gerenciar preferências',accept:'Aceitar tudo',uploadFirst:'Envie pelo menos um arquivo primeiro.',maxFiles:'Você pode enviar no máximo {max} arquivos por vez.',recentEmpty:'Suas ações recentes aparecerão aqui. Os arquivos não são armazenados.',quick:['PNG para JPG','JPG para WebP','WebP para PNG','AVIF para JPG','HEIC para JPG','HEIF para JPG','JPG para HEIC','Dividir imagem','Comprimir imagem','Redimensionar imagem','Cortar imagem','Aumentar imagem','Conversor WebP','Conversor AVIF']},
  de: {ad:'Anzeige',adDesc:'Reservierter Google-AdSense-Bereich. Anzeigen bleiben von Upload, Konvertierung und Download getrennt.',supported:'Unterstützte Formate',popular:'Beliebte Suchanfragen',how:'So funktioniert es',formatGuide:'Formatratgeber',formatTitle:'Welches Bildformat solltest du wählen?',optimization:'Leitfaden zur Bildoptimierung',why:'Warum Bildkonvertierung und Komprimierung wichtig sind',history:'Sitzungsverlauf',recent:'Letzte Aktionen',online:'Bild online',instant:'Sofort herunterladen',upload:'Bild hochladen',select:'Ausgabe wählen',adsense:'AdSense-bereit und nutzerorientiert',privacy:'Datenschutz',terms:'Nutzungsbedingungen',contact:'Kontakt',sitemap:'Sitemap',cookieTitle:'Cookies & Datenschutz',necessary:'Notwendig',analytics:'Analyse',ads:'Anzeigenpersonalisierung',reject:'Alle ablehnen',manage:'Einstellungen verwalten',accept:'Alle akzeptieren',uploadFirst:'Bitte lade zuerst mindestens eine Datei hoch.',maxFiles:'Du kannst maximal {max} Dateien gleichzeitig hochladen.',recentEmpty:'Deine letzten Aktionen erscheinen hier. Dateien werden nicht gespeichert.',quick:['PNG zu JPG','JPG zu WebP','WebP zu PNG','AVIF zu JPG','HEIC zu JPG','HEIF zu JPG','JPG zu HEIC','Bild teilen','Bild komprimieren','Bildgröße ändern','Bild zuschneiden','Bild vergrößern','WebP-Konverter','AVIF-Konverter']},
  fr: {ad:'Publicité',adDesc:'Zone réservée à Google AdSense. Les annonces restent séparées des contrôles d’envoi, de conversion et de téléchargement.',supported:'Formats pris en charge',popular:'Recherches populaires',how:'Comment ça marche',formatGuide:'Guide des formats',formatTitle:'Quel format d’image choisir ?',optimization:'Guide d’optimisation des images',why:'Pourquoi la conversion et la compression d’images sont importantes',history:'Historique de session',recent:'Actions récentes',online:'Image en ligne',instant:'Télécharger instantanément',upload:'Importer votre image',select:'Choisir la sortie',adsense:'Compatible AdSense et pensé pour l’utilisateur',privacy:'Confidentialité',terms:'Conditions',contact:'Contact',sitemap:'Plan du site',cookieTitle:'Cookies et confidentialité',necessary:'Nécessaire',analytics:'Analyse',ads:'Personnalisation des annonces',reject:'Tout refuser',manage:'Gérer les préférences',accept:'Tout accepter',uploadFirst:'Veuillez d’abord importer au moins un fichier.',maxFiles:'Vous pouvez importer au maximum {max} fichiers à la fois.',recentEmpty:'Vos actions récentes apparaîtront ici. Les fichiers ne sont pas stockés.',quick:['PNG en JPG','JPG en WebP','WebP en PNG','AVIF en JPG','HEIC en JPG','HEIF en JPG','JPG en HEIC','Diviser image','Compresser image','Redimensionner image','Recadrer image','Agrandir image','Convertisseur WebP','Convertisseur AVIF']},
  it: {ad:'Pubblicità',adDesc:'Area riservata a Google AdSense. Gli annunci restano separati da upload, conversione e download.',supported:'Formati supportati',popular:'Ricerche popolari',how:'Come funziona',formatGuide:'Guida ai formati',formatTitle:'Quale formato immagine scegliere?',optimization:'Guida all’ottimizzazione immagini',why:'Perché conversione e compressione delle immagini sono importanti',history:'Cronologia sessione',recent:'Azioni recenti',online:'Immagine online',instant:'Scarica subito',upload:'Carica la tua immagine',select:'Scegli l’output',adsense:'Pronto per AdSense e orientato all’utente',privacy:'Privacy',terms:'Termini',contact:'Contatto',sitemap:'Mappa del sito',cookieTitle:'Cookie e privacy',necessary:'Necessari',analytics:'Analisi',ads:'Personalizzazione annunci',reject:'Rifiuta tutto',manage:'Gestisci preferenze',accept:'Accetta tutto',uploadFirst:'Carica prima almeno un file.',maxFiles:'Puoi caricare al massimo {max} file alla volta.',recentEmpty:'Le azioni recenti appariranno qui. I file non vengono salvati.',quick:['PNG in JPG','JPG in WebP','WebP in PNG','AVIF in JPG','HEIC in JPG','HEIF in JPG','JPG in HEIC','Dividi immagine','Comprimi immagine','Ridimensiona immagine','Ritaglia immagine','Aumenta immagine','Convertitore WebP','Convertitore AVIF']},
  id: {ad:'Iklan',adDesc:'Area Google AdSense yang disediakan. Iklan dipisahkan dari kontrol unggah, konversi, dan unduh.',supported:'Format yang didukung',popular:'Pencarian populer',how:'Cara kerja',formatGuide:'Panduan format',formatTitle:'Format gambar mana yang sebaiknya dipilih?',optimization:'Panduan optimasi gambar',why:'Mengapa konversi dan kompresi gambar penting',history:'Riwayat sesi',recent:'Aksi terbaru',online:'Gambar online',instant:'Unduh langsung',upload:'Unggah gambar',select:'Pilih output',adsense:'Siap AdSense dan mengutamakan pengguna',privacy:'Privasi',terms:'Ketentuan',contact:'Kontak',sitemap:'Peta situs',cookieTitle:'Cookie & privasi',necessary:'Wajib',analytics:'Analitik',ads:'Personalisasi iklan',reject:'Tolak Semua',manage:'Kelola Preferensi',accept:'Terima Semua',uploadFirst:'Unggah minimal satu file terlebih dahulu.',maxFiles:'Anda dapat mengunggah maksimal {max} file sekaligus.',recentEmpty:'Aksi terbaru akan muncul di sini. File tidak disimpan.',quick:['PNG ke JPG','JPG ke WebP','WebP ke PNG','AVIF ke JPG','HEIC ke JPG','HEIF ke JPG','JPG ke HEIC','Pisahkan gambar','Kompres gambar','Ubah ukuran gambar','Crop gambar','Perbesar gambar','Konverter WebP','Konverter AVIF']},
  ja: {ad:'広告',adDesc:'Google AdSense 用の予約領域です。広告はアップロード、変換、ダウンロード操作から分離されます。',supported:'対応フォーマット',popular:'人気の検索',how:'使い方',formatGuide:'フォーマットガイド',formatTitle:'どの画像形式を選ぶべきですか？',optimization:'画像最適化ガイド',why:'画像変換と圧縮が重要な理由',history:'セッション履歴',recent:'最近の操作',online:'オンライン画像',instant:'すぐにダウンロード',upload:'画像をアップロード',select:'出力を選択',adsense:'AdSense 対応・ユーザー優先',privacy:'プライバシー',terms:'利用規約',contact:'お問い合わせ',sitemap:'サイトマップ',cookieTitle:'Cookie とプライバシー',necessary:'必須',analytics:'分析',ads:'広告のパーソナライズ',reject:'すべて拒否',manage:'設定を管理',accept:'すべて許可',uploadFirst:'先に少なくとも1つのファイルをアップロードしてください。',maxFiles:'一度にアップロードできるのは最大 {max} ファイルです。',recentEmpty:'最近の操作がここに表示されます。ファイルは保存されません。',quick:['PNG から JPG','JPG から WebP','WebP から PNG','AVIF から JPG','HEIC から JPG','HEIF から JPG','JPG から HEIC','画像を分割','画像を圧縮','画像サイズ変更','画像を切り抜き','画像を拡大','WebP 変換','AVIF 変換']},
  ko: {ad:'광고',adDesc:'Google AdSense 예약 영역입니다. 광고는 업로드, 변환, 다운로드 컨트롤과 분리됩니다.',supported:'지원 형식',popular:'인기 검색',how:'작동 방식',formatGuide:'형식 가이드',formatTitle:'어떤 이미지 형식을 선택해야 하나요?',optimization:'이미지 최적화 가이드',why:'이미지 변환과 압축이 중요한 이유',history:'세션 기록',recent:'최근 작업',online:'온라인 이미지',instant:'즉시 다운로드',upload:'이미지 업로드',select:'출력 선택',adsense:'AdSense 준비 및 사용자 우선',privacy:'개인정보',terms:'약관',contact:'문의',sitemap:'사이트맵',cookieTitle:'쿠키 및 개인정보',necessary:'필수',analytics:'분석',ads:'광고 개인화',reject:'모두 거부',manage:'환경설정 관리',accept:'모두 허용',uploadFirst:'먼저 파일을 하나 이상 업로드하세요.',maxFiles:'한 번에 최대 {max}개 파일을 업로드할 수 있습니다.',recentEmpty:'최근 작업이 여기에 표시됩니다. 파일은 저장되지 않습니다.',quick:['PNG를 JPG로','JPG를 WebP로','WebP를 PNG로','AVIF를 JPG로','HEIC를 JPG로','HEIF를 JPG로','JPG를 HEIC로','이미지 분할','이미지 압축','이미지 크기 조정','이미지 자르기','이미지 확대','WebP 변환기','AVIF 변환기']},
  'zh-CN': {ad:'广告',adDesc:'预留的 Google AdSense 区域。广告与上传、转换和下载控件分开。',supported:'支持的格式',popular:'热门搜索',how:'工作方式',formatGuide:'格式指南',formatTitle:'应该选择哪种图片格式？',optimization:'图片优化指南',why:'为什么图片转换和压缩很重要',history:'会话历史',recent:'最近操作',online:'在线图片',instant:'立即下载',upload:'上传图片',select:'选择输出',adsense:'适合 AdSense 且以用户为先',privacy:'隐私',terms:'条款',contact:'联系',sitemap:'站点地图',cookieTitle:'Cookie 与隐私',necessary:'必要',analytics:'分析',ads:'广告个性化',reject:'全部拒绝',manage:'管理偏好',accept:'全部接受',uploadFirst:'请先上传至少一个文件。',maxFiles:'一次最多可上传 {max} 个文件。',recentEmpty:'最近操作会显示在这里。文件不会被存储。',quick:['PNG 转 JPG','JPG 转 WebP','WebP 转 PNG','AVIF 转 JPG','HEIC 转 JPG','HEIF 转 JPG','JPG 转 HEIC','分割图片','压缩图片','调整图片尺寸','裁剪图片','放大图片','WebP 转换器','AVIF 转换器']},
  ar: {ad:'إعلان',adDesc:'مساحة مخصصة لـ Google AdSense. تبقى الإعلانات منفصلة عن الرفع والتحويل والتنزيل.',supported:'الصيغ المدعومة',popular:'عمليات البحث الشائعة',how:'كيف يعمل',formatGuide:'دليل الصيغ',formatTitle:'ما صيغة الصورة المناسبة؟',optimization:'دليل تحسين الصور',why:'لماذا يهم تحويل الصور وضغطها؟',history:'سجل الجلسة',recent:'الإجراءات الأخيرة',online:'صورة عبر الإنترنت',instant:'تنزيل فوري',upload:'ارفع صورتك',select:'اختر الناتج',adsense:'جاهز لـ AdSense ويركز على المستخدم',privacy:'الخصوصية',terms:'الشروط',contact:'اتصال',sitemap:'خريطة الموقع',cookieTitle:'ملفات تعريف الارتباط والخصوصية',necessary:'ضروري',analytics:'التحليلات',ads:'تخصيص الإعلانات',reject:'رفض الكل',manage:'إدارة التفضيلات',accept:'قبول الكل',uploadFirst:'يرجى رفع ملف واحد على الأقل أولاً.',maxFiles:'يمكنك رفع {max} ملفات كحد أقصى في المرة الواحدة.',recentEmpty:'ستظهر إجراءاتك الأخيرة هنا. لا يتم تخزين الملفات.',quick:['PNG إلى JPG','JPG إلى WebP','WebP إلى PNG','AVIF إلى JPG','HEIC إلى JPG','HEIF إلى JPG','JPG إلى HEIC','تقسيم الصورة','ضغط الصورة','تغيير حجم الصورة','قص الصورة','تكبير الصورة','محول WebP','محول AVIF']},
  hi: {ad:'विज्ञापन',adDesc:'Google AdSense के लिए आरक्षित स्थान। विज्ञापन upload, convert और download controls से अलग रहते हैं।',supported:'समर्थित फॉर्मेट',popular:'लोकप्रिय खोजें',how:'कैसे काम करता है',formatGuide:'फॉर्मेट गाइड',formatTitle:'कौन सा image format चुनें?',optimization:'इमेज ऑप्टिमाइज़ेशन गाइड',why:'Image conversion और compression क्यों महत्वपूर्ण है',history:'सेशन हिस्ट्री',recent:'हाल की क्रियाएँ',online:'ऑनलाइन इमेज',instant:'तुरंत डाउनलोड',upload:'इमेज अपलोड करें',select:'आउटपुट चुनें',adsense:'AdSense-ready और user-first',privacy:'प्राइवेसी',terms:'शर्तें',contact:'संपर्क',sitemap:'साइटमैप',cookieTitle:'Cookies और privacy',necessary:'आवश्यक',analytics:'एनालिटिक्स',ads:'Ads personalization',reject:'सभी अस्वीकार करें',manage:'Preferences प्रबंधित करें',accept:'सभी स्वीकार करें',uploadFirst:'कृपया पहले कम से कम एक file upload करें।',maxFiles:'आप एक बार में अधिकतम {max} files upload कर सकते हैं।',recentEmpty:'आपकी हाल की actions यहाँ दिखाई देंगी। Files store नहीं होतीं।',quick:['PNG to JPG','JPG to WebP','WebP to PNG','AVIF to JPG','HEIC to JPG','HEIF to JPG','JPG to HEIC','Image split','Image compress','Image resize','Image crop','Image upscale','WebP converter','AVIF converter']},
  ru: {ad:'Реклама',adDesc:'Зарезервированная область Google AdSense. Реклама отделена от загрузки, обработки и скачивания.',supported:'Поддерживаемые форматы',popular:'Популярные запросы',how:'Как это работает',formatGuide:'Гид по форматам',formatTitle:'Какой формат изображения выбрать?',optimization:'Гид по оптимизации изображений',why:'Почему конвертация и сжатие изображений важны',history:'История сеанса',recent:'Последние действия',online:'Изображение онлайн',instant:'Скачать сразу',upload:'Загрузите изображение',select:'Выберите результат',adsense:'Готово для AdSense и ориентировано на пользователя',privacy:'Конфиденциальность',terms:'Условия',contact:'Контакты',sitemap:'Карта сайта',cookieTitle:'Cookies и конфиденциальность',necessary:'Необходимо',analytics:'Аналитика',ads:'Персонализация рекламы',reject:'Отклонить всё',manage:'Настроить',accept:'Принять всё',uploadFirst:'Сначала загрузите хотя бы один файл.',maxFiles:'За один раз можно загрузить максимум {max} файлов.',recentEmpty:'Последние действия появятся здесь. Файлы не сохраняются.',quick:['PNG в JPG','JPG в WebP','WebP в PNG','AVIF в JPG','HEIC в JPG','HEIF в JPG','JPG в HEIC','Разделить изображение','Сжать изображение','Изменить размер','Обрезать изображение','Увеличить изображение','Конвертер WebP','Конвертер AVIF']}
};


const PRX_CONTACT_LABELS = {
  en: ['Full name','Email address','Message','Send message','Official contact email','Designed and developed by','Rights notice'],
  tr: ['Ad soyad','E-posta adresi','Mesaj','Mesaj gönder','Resmi iletişim e-postası','Tasarlayan ve geliştiren','Hak bildirimi'],
  es: ['Nombre completo','Correo electrónico','Mensaje','Enviar mensaje','Correo oficial de contacto','Diseñado y desarrollado por','Aviso de derechos'],
  'pt-BR': ['Nome completo','Endereço de e-mail','Mensagem','Enviar mensagem','E-mail oficial de contato','Projetado e desenvolvido por','Aviso de direitos'],
  de: ['Vollständiger Name','E-Mail-Adresse','Nachricht','Nachricht senden','Offizielle Kontakt-E-Mail','Entworfen und entwickelt von','Rechtshinweis'],
  fr: ['Nom complet','Adresse e-mail','Message','Envoyer le message','E-mail de contact officiel','Conçu et développé par','Avis de droits'],
  it: ['Nome completo','Indirizzo e-mail','Messaggio','Invia messaggio','Email ufficiale di contatto','Progettato e sviluppato da','Avviso sui diritti'],
  id: ['Nama lengkap','Alamat email','Pesan','Kirim pesan','Email kontak resmi','Dirancang dan dikembangkan oleh','Pemberitahuan hak'],
  ja: ['氏名','メールアドレス','メッセージ','メッセージを送信','公式連絡先メール','設計・開発','権利表示'],
  ko: ['이름','이메일 주소','메시지','메시지 보내기','공식 연락 이메일','설계 및 개발','권리 고지'],
  'zh-CN': ['姓名','电子邮件地址','消息','发送消息','官方联系邮箱','设计与开发','权利声明'],
  ar: ['الاسم الكامل','البريد الإلكتروني','الرسالة','إرسال الرسالة','البريد الرسمي للتواصل','صُمم وطُور بواسطة','إشعار الحقوق'],
  hi: ['पूरा नाम','ईमेल पता','संदेश','संदेश भेजें','आधिकारिक संपर्क ईमेल','निर्माता','अधिकार सूचना'],
  ru: ['Полное имя','Адрес электронной почты','Сообщение','Отправить сообщение','Официальный контактный e-mail','Дизайн и разработка','Уведомление о правах']
};

function prxMergeI18nFallbacks() {
  Object.keys(PRX_I18N).forEach((code) => {
    const base = PRX_I18N[code] || PRX_I18N.en;
    if (!PRX_COMPLETE_I18N[code]) PRX_COMPLETE_I18N[code] = {};
    const c = PRX_COMPLETE_I18N[code];
    const m = PRX_MICRO_I18N[code] || PRX_MICRO_I18N[normalizeLang(code)] || {};
    if (code !== 'en' && code !== 'tr') {
      c.ads = [m.ad || base.language || PRX_COMPLETE_I18N.en.ads[0], m.adDesc || base.footer || PRX_COMPLETE_I18N.en.ads[1]];
      c.sections = { supportedFormats: m.supported || base.sections?.formatsTitle, formatsPdf: base.sections?.formatsTitle, popular: m.popular || base.sections?.popularTitle, shortcuts: base.sections?.popularTitle, howEyebrow: m.how || 'How', howTitle: base.heroP, formatGuide: m.formatGuide || base.sections?.formatsTitle, formatTitle: m.formatTitle || base.sections?.formatsTitle, optimization: m.optimization || base.sections?.benefits, why: m.why || base.seoTitle, history: m.history || base.footerChangeLanguage, recent: m.recent || base.footerChangeLanguage };
      c.formatsLead = base.seoDescription || base.heroP || PRX_COMPLETE_I18N.en.formatsLead;
      c.quick = m.quick || PRX_COMPLETE_I18N.en.quick;
      c.how = [[m.upload || base.upload, base.uploadP], [m.select || base.controls?.outputFormat, base.controls?.splitTip || base.heroP], [m.instant || base.download, base.success || base.heroP]];
      c.seoCards = (base.features || []).concat([[base.nav?.split || base.modes?.split, base.toolText?.split || base.heroP], [m.adsense || base.sections?.benefits, base.footer || base.seoDescription]]).slice(0, 6);
      c.table = { heads: PRX_COMPLETE_I18N.en.table.heads.map((h, i) => [m.formatGuide || h, m.select || h, base.sections?.benefits || h, m.popular || h][i] || h), rows: PRX_COMPLETE_I18N.en.table.rows.map((row) => [row[0], base.sections?.formatsTitle || row[1], base.sections?.benefits || row[2], row[3]]) };
      c.longform = [base.seoDescription, base.heroP, base.controls?.splitTip || base.toolText?.split, base.footer].filter(Boolean);
      c.extraFaq = [[base.nav?.formats || 'PDF', base.toolText?.convert || base.heroP], [base.nav?.guides || 'HEIC', base.controls?.splitTip || base.heroP], [base.nav?.home || 'Mobile', base.uploadP], [base.nav?.compress || 'Commerce', base.toolText?.compress || base.heroP], [base.nav?.resize || 'Speed', base.toolText?.convert || base.heroP]];
      c.legal = { ...PRX_COMPLETE_I18N.en.legal, privacyTitle: m.privacy || base.footerLinks?.privacy, privacyEyebrow: base.footerLinks?.privacy, privacyIntro: base.footer || PRX_COMPLETE_I18N.en.legal.privacyIntro, uploaded: base.uploadTitle, uploadedP: base.uploadP, previews: base.controls?.cropEmpty, previewsP: base.controls?.cropHelp, storage: m.cookieTitle || PRX_COMPLETE_I18N.en.legal.storage, storageP: m.adDesc || PRX_COMPLETE_I18N.en.legal.storageP, ads: m.adsense || PRX_COMPLETE_I18N.en.legal.ads, adsP: m.adDesc || PRX_COMPLETE_I18N.en.legal.adsP, contact: m.contact || base.footerLinks?.contact, contactP: base.footerLinks?.contact || PRX_COMPLETE_I18N.en.legal.contactP, termsTitle: m.terms || base.footerLinks?.terms, termsEyebrow: m.terms || base.footerLinks?.terms, termsIntro: base.footer || PRX_COMPLETE_I18N.en.legal.termsIntro, use: base.footerLinks?.terms || PRX_COMPLETE_I18N.en.legal.use, useP: base.uploadP, accuracy: base.success, accuracyP: base.seoDescription, noAccount: base.trustStrip?.[2]?.[0] || PRX_COMPLETE_I18N.en.legal.noAccount, noAccountP: base.trustStrip?.[2]?.[1] || PRX_COMPLETE_I18N.en.legal.noAccountP, availability: m.recent || PRX_COMPLETE_I18N.en.legal.availability, availabilityP: base.heroP, ownership: base.footerRights, contactEyebrow: m.contact || base.footerLinks?.contact, contactTitle: base.footerLinks?.contact || PRX_COMPLETE_I18N.en.legal.contactTitle, contactIntro: base.footerLinks?.contact || PRX_COMPLETE_I18N.en.legal.contactIntro, fullName: (PRX_CONTACT_LABELS[code] || PRX_CONTACT_LABELS.en)[0], email: (PRX_CONTACT_LABELS[code] || PRX_CONTACT_LABELS.en)[1], message: (PRX_CONTACT_LABELS[code] || PRX_CONTACT_LABELS.en)[2], send: (PRX_CONTACT_LABELS[code] || PRX_CONTACT_LABELS.en)[3], official: (PRX_CONTACT_LABELS[code] || PRX_CONTACT_LABELS.en)[4], created: (PRX_CONTACT_LABELS[code] || PRX_CONTACT_LABELS.en)[5], rights: (PRX_CONTACT_LABELS[code] || PRX_CONTACT_LABELS.en)[6] };
      c.cookies = { title: m.cookieTitle || PRX_COMPLETE_I18N.en.cookies.title, body: m.adDesc || base.uploadP, necessary: m.necessary || PRX_COMPLETE_I18N.en.cookies.necessary, analytics: m.analytics || PRX_COMPLETE_I18N.en.cookies.analytics, ads: m.ads || PRX_COMPLETE_I18N.en.cookies.ads, reject: m.reject || PRX_COMPLETE_I18N.en.cookies.reject, manage: m.manage || PRX_COMPLETE_I18N.en.cookies.manage, accept: m.accept || PRX_COMPLETE_I18N.en.cookies.accept };
      c.runtime = { uploadFirst: m.uploadFirst || PRX_COMPLETE_I18N.en.runtime.uploadFirst, maxFiles: m.maxFiles || PRX_COMPLETE_I18N.en.runtime.maxFiles, recentEmpty: m.recentEmpty || PRX_COMPLETE_I18N.en.runtime.recentEmpty, result: PRX_COMPLETE_I18N.en.runtime.result };
      c.seoOnline = m.online || 'Image Online';
    } else {
      c.ads ||= PRX_COMPLETE_I18N.en.ads;
      c.sections ||= PRX_COMPLETE_I18N.en.sections;
      c.formatsLead ||= base.heroP || PRX_COMPLETE_I18N.en.formatsLead;
      c.quick ||= PRX_COMPLETE_I18N.en.quick;
      c.how ||= PRX_COMPLETE_I18N.en.how;
      c.seoCards ||= (base.features || PRX_I18N.en.features || PRX_COMPLETE_I18N.en.seoCards).concat(PRX_COMPLETE_I18N.en.seoCards).slice(0, 6);
      c.table ||= PRX_COMPLETE_I18N.en.table;
      c.longform ||= [base.heroP || PRX_COMPLETE_I18N.en.longform[0], base.controls?.splitTip || PRX_COMPLETE_I18N.en.longform[1], base.seoDescription || PRX_COMPLETE_I18N.en.longform[2], PRX_COMPLETE_I18N.en.longform[3]];
      c.extraFaq ||= PRX_COMPLETE_I18N.en.extraFaq;
      c.legal ||= PRX_COMPLETE_I18N.en.legal;
      c.cookies ||= PRX_COMPLETE_I18N.en.cookies;
      c.runtime ||= PRX_COMPLETE_I18N.en.runtime;
      c.seoOnline ||= code === 'tr' ? 'Online Görsel' : 'Image Online';
    }
  });
}

prxMergeI18nFallbacks();

function setTexts(nodes, values) {
  Array.from(nodes || []).forEach((node, index) => {
    const value = Array.isArray(values) ? values[index] : values;
    if (node && value) node.textContent = value;
  });
}

function setAnchorTexts(nodes, values) {
  Array.from(nodes || []).forEach((node, index) => {
    const value = values?.[index];
    if (node && value) node.textContent = value;
  });
}

function getPageKey() {
  const path = window.location.pathname.toLowerCase();
  if (path.includes('compress-image')) return 'compress';
  if (path.includes('resize-image')) return 'resize';
  if (path.includes('crop-image')) return 'crop';
  if (path.includes('upscale-image')) return 'upscale';
  if (path.includes('split-image')) return 'split';
  if (path.includes('png-to-jpg')) return 'pngjpg';
  if (path.includes('jpg-to-webp')) return 'jpgwebp';
  if (path.includes('webp-to-png')) return 'webppng';
  if (path.includes('avif-to-jpg')) return 'avifjpg';
  if (path.includes('heic-to-jpg')) return 'heicjpg';
  if (path.includes('heif-to-jpg')) return 'heifjpg';
  if (path.includes('jpg-to-heic')) return 'jpgheic';
  if (path.includes('webp-converter')) return 'webp';
  if (path.includes('avif-converter')) return 'avif';
  if (path.includes('privacy')) return 'privacy';
  if (path.includes('terms')) return 'terms';
  if (path.includes('contact')) return 'contact';
  if (path.includes('convert-image')) return 'convert';
  return 'home';
}

function localizePageSpecific(pack, complete) {
  const page = getPageKey();
  const online = complete?.seoOnline || (currentLanguage === 'tr' ? 'Online Görsel' : 'Image Online');
  const converter = pack.nav?.convert || pack.modes?.convert || 'Convert';
  const names = {
    home: [pack.seoTitle, pack.h1, pack.heroP],
    convert: [converter + ' ' + online + ' | Prismix', converter + ' ' + online, pack.toolText?.convert],
    compress: [pack.nav?.compress + ' ' + online + ' | Prismix', pack.nav?.compress + ' ' + online, pack.toolText?.compress],
    resize: [pack.nav?.resize + ' ' + online + ' | Prismix', pack.nav?.resize + ' ' + online, pack.toolText?.resize],
    crop: [pack.nav?.crop + ' ' + online + ' | Prismix', pack.nav?.crop + ' ' + online, pack.toolText?.crop],
    upscale: [pack.modes?.upscale + ' ' + online + ' | Prismix', pack.modes?.upscale + ' ' + online, pack.toolText?.upscale],
    split: [pack.nav?.split + ' | Prismix', pack.nav?.split, pack.toolText?.split],
    pngjpg: ['PNG to JPG | Prismix', 'PNG to JPG', pack.seoDescription],
    jpgwebp: ['JPG to WebP | Prismix', 'JPG to WebP', pack.seoDescription],
    webppng: ['WebP to PNG | Prismix', 'WebP to PNG', pack.seoDescription],
    avifjpg: ['AVIF to JPG | Prismix', 'AVIF to JPG', pack.seoDescription],
    heicjpg: ['HEIC to JPG | Prismix', 'HEIC to JPG', pack.seoDescription],
    heifjpg: ['HEIF to JPG | Prismix', 'HEIF to JPG', pack.seoDescription],
    jpgheic: ['JPG to HEIC | Prismix', 'JPG to HEIC', pack.seoDescription],
    webp: ['WebP Converter | Prismix', 'WebP Converter', pack.seoDescription],
    avif: ['AVIF Converter | Prismix', 'AVIF Converter', pack.seoDescription]
  }[page];
  if (names) {
    if (names[0]) document.title = names[0];
    const h1 = document.querySelector('#main-title');
    if (h1 && names[1]) h1.textContent = names[1];
    const heroP = document.querySelector('.launch-copy > p:not(.hero-gradient-line):not(.mobile-upload-note)');
    if (heroP && names[2]) heroP.textContent = names[2];
  }
}


function localizeOutputFormatOptions(pack) {
  const select = document.querySelector('#outputFormat');
  if (!select) return;
  const generic = {
    en: ['Great web default','Best for photos','Best for photos','Transparent graphics','Small modern files','Animated/simple motion','Legacy bitmap','Archive/workflow','Raster wrapped safely','Favicons','Document output','iPhone photos','High-efficiency image','Raw pixels'],
    tr: ['Güçlü web varsayılanı','Fotoğraflar için ideal','Fotoğraflar için ideal','Şeffaf grafikler','Küçük modern dosyalar','Animasyon/basit hareket','Eski bitmap','Arşiv/iş akışı','Güvenli raster çıktı','Favicon dosyaları','Belge çıktısı','iPhone fotoğrafları','Yüksek verimli görsel','Ham piksel verisi'],
    es: ['Ideal para web','Mejor para fotos','Mejor para fotos','Gráficos transparentes','Archivos modernos pequeños','Animación simple','Bitmap antiguo','Archivo/flujo de trabajo','Raster seguro','Favicons','Salida de documento','Fotos de iPhone','Imagen de alta eficiencia','Píxeles sin procesar'],
    'pt-BR': ['Padrão web ideal','Melhor para fotos','Melhor para fotos','Gráficos transparentes','Arquivos modernos pequenos','Animação simples','Bitmap legado','Arquivo/fluxo de trabalho','Raster seguro','Favicons','Saída de documento','Fotos do iPhone','Imagem de alta eficiência','Pixels brutos'],
    de: ['Guter Web-Standard','Ideal für Fotos','Ideal für Fotos','Transparente Grafiken','Kleine moderne Dateien','Animation/einfache Bewegung','Legacy-Bitmap','Archiv/Workflow','Sicher gerastert','Favicons','Dokumentausgabe','iPhone-Fotos','Hocheffizientes Bild','Rohpixel'],
    fr: ['Excellent choix web','Idéal pour photos','Idéal pour photos','Graphiques transparents','Petits fichiers modernes','Animation simple','Bitmap ancien','Archive/flux de travail','Raster sécurisé','Favicons','Sortie document','Photos iPhone','Image haute efficacité','Pixels bruts'],
    it: ['Ottimo default web','Ideale per foto','Ideale per foto','Grafica trasparente','File moderni piccoli','Animazione semplice','Bitmap legacy','Archivio/flusso','Raster sicuro','Favicon','Output documento','Foto iPhone','Immagine ad alta efficienza','Pixel grezzi'],
    id: ['Default web bagus','Terbaik untuk foto','Terbaik untuk foto','Grafik transparan','File modern kecil','Animasi sederhana','Bitmap lama','Arsip/alur kerja','Raster aman','Favicon','Output dokumen','Foto iPhone','Gambar efisiensi tinggi','Pixel mentah'],
    ja: ['Web の標準に最適','写真に最適','写真に最適','透過グラフィック','小さい最新ファイル','簡単なアニメーション','旧式ビットマップ','アーカイブ/作業用','安全なラスター化','ファビコン','文書出力','iPhone 写真','高効率画像','RAW ピクセル'],
    ko: ['웹 기본에 적합','사진에 적합','사진에 적합','투명 그래픽','작은 최신 파일','간단한 애니메이션','레거시 비트맵','보관/워크플로','안전한 래스터','파비콘','문서 출력','iPhone 사진','고효율 이미지','Raw 픽셀'],
    'zh-CN': ['适合网页默认','适合照片','适合照片','透明图形','小型现代文件','简单动画','旧式位图','归档/工作流','安全栅格输出','网站图标','文档输出','iPhone 照片','高效图片','原始像素'],
    ar: ['افتراضي ممتاز للويب','الأفضل للصور','الأفضل للصور','رسومات شفافة','ملفات حديثة صغيرة','حركة/رسوم بسيطة','Bitmap قديم','أرشفة/سير عمل','تحويل آمن إلى Raster','أيقونات الموقع','إخراج مستند','صور iPhone','صورة عالية الكفاءة','بيكسلات خام'],
    hi: ['Web के लिए अच्छा default','Photos के लिए बेहतर','Photos के लिए बेहतर','Transparent graphics','छोटी modern files','Simple animation','Legacy bitmap','Archive/workflow','Safe raster output','Favicons','Document output','iPhone photos','High-efficiency image','Raw pixels'],
    ru: ['Отлично для веба','Лучше для фото','Лучше для фото','Прозрачная графика','Малые современные файлы','Простая анимация','Старый bitmap','Архив/процесс','Безопасный raster','Favicons','Вывод документа','Фото iPhone','Высокоэффективное изображение','Raw-пиксели']
  };
  const labels = generic[currentLanguage] || generic.en;
  const formats = ['WEBP','JPG','JPEG','PNG','AVIF','GIF','BMP','TIFF','SVG','ICO','PDF','HEIC','HEIF','RAW'];
  Array.from(select.options).forEach((option, index) => {
    if (formats[index] && labels[index]) option.textContent = `${formats[index]} — ${labels[index]}`;
  });
}

function localizeMobileCopy(pack) {
  const hero = document.querySelector('.mobile-hero-title');
  if (hero) {
    const h2 = hero.querySelector('h2');
    const p = hero.querySelector('p');
    if (h2) h2.innerHTML = `${pack.heroLine || ''}<br><span>${pack.eyebrow || ''}</span>`;
    if (p) p.textContent = pack.heroP || '';
  }
  setNodeText('.mobile-upload-note', pack.uploadP || '');
}

function localizeCompletePage(pack) {
  const c = prxCompletePack();
  localizePageSpecific(pack, c);
  setTexts(document.querySelectorAll('.ad-slot > span'), c.ads?.[0]);
  setTexts(document.querySelectorAll('.ad-box'), c.ads?.[1]);
  setNodeText('.formats .eyebrow', c.sections?.supportedFormats);
  setNodeText('.formats h2', c.sections?.formatsPdf || pack.sections?.formatsTitle);
  setNodeText('.formats p', c.formatsLead);
  setNodeText('.quick-links .eyebrow', c.sections?.popular);
  setNodeText('.quick-links h2', c.sections?.shortcuts || pack.sections?.popularTitle);
  setAnchorTexts(document.querySelectorAll('.conversion-grid a'), c.quick);
  setNodeText('.how-it-works .eyebrow', c.sections?.howEyebrow);
  setNodeText('.how-it-works h2', c.sections?.howTitle);
  document.querySelectorAll('.how-it-works .steps article').forEach((item, index) => {
    const row = c.how?.[index];
    if (!row) return;
    setTexts(item.querySelectorAll('h3'), row[0]);
    setTexts(item.querySelectorAll('p'), row[1]);
  });
  document.querySelectorAll('.seo-hub .seo-card').forEach((item, index) => {
    const row = c.seoCards?.[index];
    if (!row) return;
    setTexts(item.querySelectorAll('h2'), row[0]);
    setTexts(item.querySelectorAll('p'), row[1]);
  });
  setNodeText('.comparison .eyebrow', c.sections?.formatGuide);
  setNodeText('.comparison h2', c.sections?.formatTitle);
  setTexts(document.querySelectorAll('.comparison th'), c.table?.heads || []);
  document.querySelectorAll('.comparison tbody tr').forEach((tr, rowIndex) => {
    setTexts(tr.querySelectorAll('td'), c.table?.rows?.[rowIndex] || []);
  });
  setNodeText('.longform .eyebrow', c.sections?.optimization);
  setNodeText('.longform h2', c.sections?.why);
  setTexts(document.querySelectorAll('.longform p'), c.longform || []);
  setNodeText('.history .eyebrow', c.sections?.history);
  setNodeText('.history h2', c.sections?.recent);
  localizeExtraFaq(pack, c);
  localizeLegalPages(c);
  localizeCookieBanner(c);
}

function localizeExtraFaq(pack, c) {
  const baseFaq = (pack.faq || []).concat(c.extraFaq || []);
  document.querySelectorAll('.faq details').forEach((item, index) => {
    const row = baseFaq[index];
    if (!row) return;
    const summary = item.querySelector('summary');
    const p = item.querySelector('p');
    if (summary) summary.textContent = row[0];
    if (p) p.textContent = row[1];
  });
}

function localizeLegalPages(c) {
  const legal = document.querySelector('.legal-page');
  if (!legal) return;
  const l = c.legal || PRX_COMPLETE_I18N.en.legal;
  const page = getPageKey();
  if (page === 'privacy') {
    document.title = `${l.privacyTitle} | Prismix`;
    const md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute('content', l.privacyIntro || '');
    setTexts(legal.querySelectorAll('.eyebrow'), l.privacyEyebrow);
    setTexts(legal.querySelectorAll('h1'), l.privacyTitle);
    const ps = legal.querySelectorAll('p');
    const hs = legal.querySelectorAll('h2');
    setTexts([ps[0]], l.privacyIntro + ' ');
    const author = document.createElement('a'); author.href='https://www.hakkiburakbakirci.com'; author.target='_blank'; author.rel='noopener'; author.textContent='Hakkı Burak Bakırcı'; ps[0]?.append(author, '.');
    setTexts(hs, [l.uploaded,l.previews,l.storage,l.ads,l.contact]);
    setTexts([ps[1]], l.uploadedP); setTexts([ps[2]], l.previewsP); setTexts([ps[3]], l.storageP); setTexts([ps[4]], l.adsP);
    if (ps[5]) { ps[5].textContent = l.contactP + ' '; const mail=document.createElement('a'); mail.href='mailto:info@hakkiburakbakirci.com'; mail.textContent='info@hakkiburakbakirci.com'; ps[5].append(mail,'.'); }
  } else if (page === 'terms') {
    document.title = `${l.termsTitle} | Prismix`;
    const md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute('content', l.termsIntro || '');
    setTexts(legal.querySelectorAll('.eyebrow'), l.termsEyebrow);
    setTexts(legal.querySelectorAll('h1'), l.termsTitle);
    const ps = legal.querySelectorAll('p'); const hs = legal.querySelectorAll('h2');
    setTexts([ps[0]], l.termsIntro + ' ');
    const author = document.createElement('a'); author.href='https://www.hakkiburakbakirci.com'; author.target='_blank'; author.rel='noopener'; author.textContent='Hakkı Burak Bakırcı'; ps[0]?.append(author,'.');
    setTexts(hs, [l.use,l.accuracy,l.noAccount,l.availability,l.ownership]);
    setTexts([ps[1]], l.useP); setTexts([ps[2]], l.accuracyP); setTexts([ps[3]], l.noAccountP); setTexts([ps[4]], l.availabilityP); setTexts([ps[5]], `© ${new Date().getFullYear()} Hakkı Burak Bakırcı. ${PRX_I18N[currentLanguage]?.footerRights || PRX_I18N.en.footerRights}`);
  } else if (page === 'contact') {
    document.title = `${l.contactTitle} | Prismix`;
    const md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute('content', l.contactIntro || '');
    setTexts(legal.querySelectorAll('.eyebrow'), l.contactEyebrow);
    setTexts(legal.querySelectorAll('h1'), l.contactTitle);
    const ps = legal.querySelectorAll('p');
    if (ps[0]) { ps[0].textContent = l.contactIntro + ' '; const mail=document.createElement('a'); mail.href='mailto:info@hakkiburakbakirci.com'; mail.textContent='info@hakkiburakbakirci.com'; ps[0].append(mail,'.'); }
    const form = legal.querySelector('.contact-form');
    if (form) {
      const nameLabel = form.querySelector('[data-contact-label="name"]');
      const emailLabel = form.querySelector('[data-contact-label="email"]');
      const messageLabel = form.querySelector('[data-contact-label="message"]');
      setLabelPrefix(nameLabel, prxCreatorText('contactName'));
      setLabelPrefix(emailLabel, prxCreatorText('contactEmail'));
      setLabelPrefix(messageLabel, prxCreatorText('contactMessage'));
      const nameInput = form.querySelector('[name="name"]');
      const emailInput = form.querySelector('[name="email"]');
      const messageInput = form.querySelector('[name="message"]');
      if (nameInput) nameInput.placeholder = prxCreatorText('contactNamePh');
      if (emailInput) emailInput.placeholder = prxCreatorText('contactEmailPh');
      if (messageInput) messageInput.placeholder = prxCreatorText('contactMessagePh');
      const submit = form.querySelector('[type="submit"]');
      if (submit) submit.textContent = prxCreatorText('contactButton');
    }
    setTexts(legal.querySelectorAll('.contact-trust strong'), [l.official,l.created,l.rights]);
  }
}

function localizeCookieBanner(c) {
  const cookie = c.cookies || PRX_COMPLETE_I18N.en.cookies;
  setNodeText('#cookieBanner strong', cookie.title);
  setNodeText('#cookieBanner p', cookie.body);
  const labels = document.querySelectorAll('#cookieManage label');
  labels.forEach((label, index) => {
    const input = label.querySelector('input');
    const names = [cookie.necessary, cookie.analytics, cookie.ads];
    label.textContent = ' ' + names[index];
    if (input) label.prepend(input);
  });
  setNodeText('#rejectAll', cookie.reject);
  setNodeText('#managePrefs', cookie.manage);
  setNodeText('#acceptAll', cookie.accept);
}

const state = {
  files: [],
  resultUrl: null,
  history: JSON.parse(localStorage.getItem('prismix-history') || '[]'),
  crop: {
    active: false,
    dragging: false,
    action: null,
    handle: null,
    startPointer: null,
    startCrop: null,
    draftOrigin: null
  }
};

const maxFiles = 10;
const dropzone = $('#dropzone');
const fileInput = $('#fileInput');
const chooseFilesButton = $('#chooseFilesButton');
const previewGrid = $('#previewGrid');
const errorBox = $('#errorBox');
const toast = $('#toast');
const progressWrap = $('#progressWrap');
const progressBar = $('#progressBar');
const progressText = $('#progressText');
const resultCard = $('#resultCard');
const historyList = $('#historyList');
const cropBox = $('#cropBox');
const cropPreview = $('#cropPreview');
const cropPreviewImage = $('#cropPreviewImage');
const cropOverlay = $('#cropOverlay');
const cropEmpty = $('.crop-empty');

function bytesToHuman(bytes = 0) {
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

function setError(message = '') {
  if (!errorBox) return;
  errorBox.textContent = message;
  errorBox.hidden = !message;
}

function showToast(message, duration = 1600) {
  if (!toast) return;
  toast.textContent = message;
  toast.hidden = false;
  toast.classList.remove('toast-leaving');
  // Force a tiny reflow so repeated success messages replay the entrance animation.
  void toast.offsetWidth;
  toast.classList.add('toast-visible');
  window.clearTimeout(showToast.timer);
  window.clearTimeout(showToast.leaveTimer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove('toast-visible');
    toast.classList.add('toast-leaving');
    showToast.leaveTimer = window.setTimeout(() => {
      toast.hidden = true;
      toast.classList.remove('toast-leaving');
    }, 360);
  }, duration);
}

function setProgress(value) {
  if (!progressWrap || !progressBar || !progressText) return;
  progressWrap.hidden = value <= 0 || value >= 100;
  progressBar.style.width = `${value}%`;
  progressText.textContent = `${value}%`;
}

function remember(message) {
  state.history = [message, ...state.history].slice(0, 8);
  localStorage.setItem('prismix-history', JSON.stringify(state.history));
  renderHistory();
}

function renderHistory() {
  if (!historyList) return;
  historyList.innerHTML = '';
  if (!state.history.length) {
    const li = document.createElement('li');
    li.textContent = prxCompletePack().runtime?.recentEmpty || 'Your recent actions will appear here. Files are not stored.';
    historyList.appendChild(li);
    return;
  }
  state.history.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    historyList.appendChild(li);
  });
}

function revokeFiles() {
  state.files.forEach((item) => URL.revokeObjectURL(item.url));
}

function handleFiles(fileList) {
  const selected = Array.from(fileList || []);
  if (!selected.length) return;
  setError('');
  if (selected.length > maxFiles) {
    setError((prxCompletePack().runtime?.maxFiles || 'You can upload a maximum of {max} files at once.').replace('{max}', maxFiles));
    return;
  }
  revokeFiles();
  state.files = selected.map((file) => ({ file, url: URL.createObjectURL(file) }));
  renderPreviews();
  updateCropPreview(true);
  if (resultCard) resultCard.hidden = true;
  if (fileInput) fileInput.value = '';
}

function renderPreviews() {
  if (!previewGrid) return;
  previewGrid.innerHTML = '';
  state.files.forEach(({ file, url }) => {
    const card = document.createElement('article');
    card.className = 'thumb-card';
    const isImage = file.type.startsWith('image/') || /\.(jpg|jpeg|png|webp|gif|bmp|tif|tiff|svg|avif)$/i.test(file.name);
    const safeName = file.name.replace(/[<>&"]/g, '');
    card.innerHTML = `${isImage ? `<img src="${url}" alt="Preview of ${safeName}">` : `<div class="file-badge">${(file.name.split('.').pop() || 'FILE').toUpperCase()}</div>`}
      <div><strong title="${safeName}">${safeName}</strong><span>${bytesToHuman(file.size)}</span></div>`;
    previewGrid.appendChild(card);
  });
}

function getCropInputs() {
  return {
    left: $('#cropLeft'),
    top: $('#cropTop'),
    width: $('#cropWidth'),
    height: $('#cropHeight')
  };
}

function getCropInputValues() {
  const inputs = getCropInputs();
  return {
    left: Number(inputs.left?.value || 0),
    top: Number(inputs.top?.value || 0),
    width: Number(inputs.width?.value || 1),
    height: Number(inputs.height?.value || 1)
  };
}

function setCropInputValues(crop, silent = false) {
  const inputs = getCropInputs();
  if (inputs.left) inputs.left.value = Math.round(crop.left);
  if (inputs.top) inputs.top.value = Math.round(crop.top);
  if (inputs.width) inputs.width.value = Math.round(crop.width);
  if (inputs.height) inputs.height.value = Math.round(crop.height);
  if (!silent) renderCropOverlayFromInputs();
}

function getCropMetrics() {
  if (!cropPreview || !cropPreviewImage || cropPreviewImage.hidden || !cropPreviewImage.naturalWidth || !cropPreviewImage.naturalHeight) return null;
  const stageRect = cropPreview.getBoundingClientRect();
  const imageRect = cropPreviewImage.getBoundingClientRect();
  if (!imageRect.width || !imageRect.height) return null;
  return {
    stageRect,
    imageLeft: imageRect.left - stageRect.left,
    imageTop: imageRect.top - stageRect.top,
    imageWidth: imageRect.width,
    imageHeight: imageRect.height,
    naturalWidth: cropPreviewImage.naturalWidth,
    naturalHeight: cropPreviewImage.naturalHeight
  };
}

function clampCrop(crop, metrics = getCropMetrics()) {
  if (!metrics) return crop;
  const minW = Math.max(8, Math.min(80, metrics.naturalWidth * 0.02));
  const minH = Math.max(8, Math.min(80, metrics.naturalHeight * 0.02));
  let width = Math.max(minW, Math.min(Number(crop.width) || minW, metrics.naturalWidth));
  let height = Math.max(minH, Math.min(Number(crop.height) || minH, metrics.naturalHeight));
  let left = Math.max(0, Math.min(Number(crop.left) || 0, metrics.naturalWidth - width));
  let top = Math.max(0, Math.min(Number(crop.top) || 0, metrics.naturalHeight - height));
  if (left + width > metrics.naturalWidth) width = metrics.naturalWidth - left;
  if (top + height > metrics.naturalHeight) height = metrics.naturalHeight - top;
  return { left, top, width, height };
}

function defaultCrop(metrics) {
  return {
    left: metrics.naturalWidth * 0.1,
    top: metrics.naturalHeight * 0.1,
    width: metrics.naturalWidth * 0.8,
    height: metrics.naturalHeight * 0.8
  };
}

function updateCropPreview(resetSelection = false) {
  if (!cropPreviewImage) return;
  const firstImage = state.files.find((item) => item.file.type.startsWith('image/') || /\.(jpg|jpeg|png|webp|gif|bmp|tif|tiff|svg|avif)$/i.test(item.file.name));
  if (!firstImage) {
    cropPreviewImage.hidden = true;
    cropPreviewImage.removeAttribute('src');
    if (cropOverlay) cropOverlay.hidden = true;
    if (cropEmpty) cropEmpty.hidden = false;
    state.crop.active = false;
    return;
  }
  if (cropEmpty) cropEmpty.hidden = true;
  cropPreviewImage.hidden = false;
  cropPreviewImage.onload = () => {
    const metrics = getCropMetrics();
    if (!metrics) return;
    if (resetSelection || !state.crop.active) {
      setCropInputValues(clampCrop(defaultCrop(metrics), metrics), true);
      state.crop.active = true;
    }
    renderCropOverlayFromInputs();
  };
  cropPreviewImage.src = firstImage.url;
  if (cropPreviewImage.complete) cropPreviewImage.onload();
}

function renderCropOverlayFromInputs() {
  if (!cropOverlay) return;
  const metrics = getCropMetrics();
  if (!metrics) {
    cropOverlay.hidden = true;
    return;
  }
  const crop = clampCrop(getCropInputValues(), metrics);
  setCropInputValues(crop, true);
  const left = metrics.imageLeft + (crop.left / metrics.naturalWidth) * metrics.imageWidth;
  const top = metrics.imageTop + (crop.top / metrics.naturalHeight) * metrics.imageHeight;
  const width = (crop.width / metrics.naturalWidth) * metrics.imageWidth;
  const height = (crop.height / metrics.naturalHeight) * metrics.imageHeight;
  cropOverlay.hidden = false;
  cropOverlay.style.left = `${left}px`;
  cropOverlay.style.top = `${top}px`;
  cropOverlay.style.width = `${width}px`;
  cropOverlay.style.height = `${height}px`;
}

function pointToNatural(clientX, clientY, metrics = getCropMetrics()) {
  if (!metrics) return { x: 0, y: 0 };
  const x = ((clientX - metrics.stageRect.left - metrics.imageLeft) / metrics.imageWidth) * metrics.naturalWidth;
  const y = ((clientY - metrics.stageRect.top - metrics.imageTop) / metrics.imageHeight) * metrics.naturalHeight;
  return {
    x: Math.max(0, Math.min(metrics.naturalWidth, x)),
    y: Math.max(0, Math.min(metrics.naturalHeight, y))
  };
}

function startCropInteraction(event) {
  if (!cropPreviewImage || cropPreviewImage.hidden) return;
  const metrics = getCropMetrics();
  if (!metrics) return;
  const handle = event.target?.dataset?.handle || null;
  const isOverlay = event.target === cropOverlay || cropOverlay?.contains(event.target);
  if (!isOverlay && event.currentTarget !== cropPreview) return;

  event.preventDefault();
  const pointer = pointToNatural(event.clientX, event.clientY, metrics);
  state.crop.dragging = true;
  state.crop.handle = handle;
  state.crop.action = handle ? 'resize' : isOverlay ? 'move' : 'draw';
  state.crop.startPointer = pointer;
  state.crop.startCrop = clampCrop(getCropInputValues(), metrics);
  state.crop.draftOrigin = pointer;
  if (state.crop.action === 'draw') {
    const seed = { left: pointer.x, top: pointer.y, width: Math.max(24, metrics.naturalWidth * 0.04), height: Math.max(24, metrics.naturalHeight * 0.04) };
    setCropInputValues(clampCrop(seed, metrics), true);
    renderCropOverlayFromInputs();
  }
  cropPreview?.setPointerCapture?.(event.pointerId);
  cropPreview?.classList.add('is-cropping');
}

function moveCropInteraction(event) {
  if (!state.crop.dragging) return;
  const metrics = getCropMetrics();
  if (!metrics) return;
  event.preventDefault();
  const current = pointToNatural(event.clientX, event.clientY, metrics);
  const start = state.crop.startPointer || current;
  const base = state.crop.startCrop || getCropInputValues();
  let crop = { ...base };
  const dx = current.x - start.x;
  const dy = current.y - start.y;

  if (state.crop.action === 'move') {
    crop.left = base.left + dx;
    crop.top = base.top + dy;
  } else if (state.crop.action === 'draw') {
    const origin = state.crop.draftOrigin || start;
    crop.left = Math.min(origin.x, current.x);
    crop.top = Math.min(origin.y, current.y);
    crop.width = Math.abs(current.x - origin.x);
    crop.height = Math.abs(current.y - origin.y);
  } else if (state.crop.action === 'resize') {
    const handle = state.crop.handle || '';
    if (handle.includes('e')) crop.width = base.width + dx;
    if (handle.includes('s')) crop.height = base.height + dy;
    if (handle.includes('w')) {
      crop.left = base.left + dx;
      crop.width = base.width - dx;
    }
    if (handle.includes('n')) {
      crop.top = base.top + dy;
      crop.height = base.height - dy;
    }
  }

  crop = clampCrop(crop, metrics);
  setCropInputValues(crop, true);
  renderCropOverlayFromInputs();
}

function endCropInteraction(event) {
  if (!state.crop.dragging) return;
  state.crop.dragging = false;
  state.crop.action = null;
  state.crop.handle = null;
  state.crop.startPointer = null;
  state.crop.startCrop = null;
  state.crop.draftOrigin = null;
  cropPreview?.releasePointerCapture?.(event.pointerId);
  cropPreview?.classList.remove('is-cropping');
  renderCropOverlayFromInputs();
}


function currentToolMeta() {
  const mode = document.querySelector('[name="mode"]:checked')?.value || 'convert';
  const out = $('#outputFormat')?.value || '';
  if (mode === 'compress') return { key: 'compress', title: i18n('modes.compress', 'Compress'), text: i18n('toolText.compress', 'Compress images to a target size.'), button: i18n('toolButtons.compress', 'Compress Now') };
  if (mode === 'resize') return { key: 'resize', title: i18n('modes.resize', 'Resize'), text: i18n('toolText.resize', 'Resize your image.'), button: i18n('toolButtons.resize', 'Resize Now') };
  if (mode === 'crop') return { key: 'crop', title: i18n('modes.crop', 'Crop'), text: i18n('toolText.crop', 'Crop your image.'), button: i18n('toolButtons.crop', 'Apply Crop') };
  if (mode === 'upscale') return { key: 'upscale', title: i18n('modes.upscale', 'Upscale'), text: i18n('toolText.upscale', 'Upscale your image.'), button: i18n('toolButtons.upscale', 'Upscale Now') };
  if (mode === 'split') return { key: 'split', title: i18n('modes.split', 'Split'), text: i18n('toolText.split', 'Slice one image into equal pieces.'), button: i18n('toolButtons.split', 'Split Image') };
  if (out === 'pdf') return { key: 'pdf', title: 'PDF', text: i18n('toolText.convert', 'Create a clean PDF from your selected image files.'), button: i18n('toolButtons.convert', 'Create PDF') };
  return { key: 'convert', title: i18n('modes.convert', 'Convert'), text: i18n('toolText.convert', 'Convert your images.'), button: i18n('toolButtons.convert', 'Convert Now') };
}

function initMobileAppLayout() {
  const path = window.location.pathname.toLowerCase();
  document.body.classList.add('prx-mobile-ready');
  document.body.classList.toggle('prx-page-home', path === '/' || path.endsWith('/index.html'));
  document.body.classList.toggle('prx-page-convert', path.includes('convert') || path.includes('png-to') || path.includes('jpg-to') || path.includes('webp-to') || path.includes('avif-to') || path.includes('heic-to') || path.includes('heif-to'));
  document.body.classList.toggle('prx-page-compress', path.includes('compress'));
  document.body.classList.toggle('prx-page-resize', path.includes('resize'));
  document.body.classList.toggle('prx-page-crop', path.includes('crop'));
  document.body.classList.toggle('prx-page-pdf', path.includes('image-to-pdf'));
  document.body.classList.toggle('prx-page-split', path.includes('split-image'));

  const launch = document.querySelector('.launch-copy');
  if (launch && !launch.querySelector('.mobile-hero-title')) {
    const mobileHero = document.createElement('div');
    mobileHero.className = 'mobile-hero-title';
    mobileHero.innerHTML = '<h2>Fast. Private. Powerful.<br><span>Image tools for everyone.</span></h2><p>Convert, compress, resize, crop and split images in one clean mobile workflow.</p>';
    launch.prepend(mobileHero);
  }

  const panel = document.querySelector('.convert-panel');
  if (panel && !panel.querySelector('.mobile-tool-heading')) {
    const heading = document.createElement('div');
    heading.className = 'mobile-tool-heading';
    heading.innerHTML = '<h2></h2><p></p>';
    panel.prepend(heading);
  }

  const uploadPanel = document.querySelector('.upload-panel');
  if (uploadPanel && !uploadPanel.querySelector('.mobile-upload-note')) {
    const note = document.createElement('p');
    note.className = 'mobile-upload-note';
    note.textContent = 'Your files are processed for the current action only and are cleared when the page refreshes.';
    uploadPanel.appendChild(note);
  }

  document.querySelectorAll('.app-sidebar .nav-item').forEach((link) => {
    const label = link.querySelector('em')?.textContent?.trim() || link.getAttribute('aria-label') || 'Tool';
    link.setAttribute('aria-label', label);
    link.setAttribute('title', label);
  });
  refreshMobileToolText();
}

function refreshMobileToolText() {
  const meta = currentToolMeta();
  const heading = document.querySelector('.mobile-tool-heading');
  if (heading) {
    const title = heading.querySelector('h2');
    const text = heading.querySelector('p');
    if (title) title.textContent = meta.title;
    if (text) text.textContent = meta.text;
  }
  const button = $('#convertButton');
  if (button) button.textContent = meta.button;
  document.body.dataset.activeTool = meta.key;
}


function updateSplitControls() {
  const method = $('#splitMethod')?.value || 'both';
  const rowsInput = $('#splitRows');
  const columnsInput = $('#splitColumns');
  const rowLabel = rowsInput?.closest('label');
  const columnLabel = columnsInput?.closest('label');

  if (rowsInput) {
    rowsInput.disabled = method === 'columns';
    rowsInput.min = '1';
    rowsInput.max = '12';
    if (method === 'columns') rowsInput.value = '1';
    if (!rowsInput.value || Number(rowsInput.value) < 1) rowsInput.value = '2';
  }
  if (columnsInput) {
    columnsInput.disabled = method === 'rows';
    columnsInput.min = '1';
    columnsInput.max = '12';
    if (method === 'rows') columnsInput.value = '1';
    if (!columnsInput.value || Number(columnsInput.value) < 1) columnsInput.value = '2';
  }
  rowLabel?.classList.toggle('is-disabled', method === 'columns');
  columnLabel?.classList.toggle('is-disabled', method === 'rows');
}

function updateOutputOptionsForMode(mode) {
  const outputSelect = $('#outputFormat');
  if (!outputSelect) return;
  const pdfOption = outputSelect.querySelector('option[value="pdf"]');
  const rawOption = outputSelect.querySelector('option[value="raw"]');
  const splitMode = mode === 'split';
  [pdfOption, rawOption].forEach((option) => {
    if (!option) return;
    option.disabled = splitMode;
    option.hidden = splitMode;
  });
  if (splitMode && ['pdf', 'raw'].includes(outputSelect.value)) outputSelect.value = 'png';
}

function updateMode() {
  const checkedMode = document.querySelector('[name="mode"]:checked');
  if (!checkedMode) return;
  const mode = checkedMode.value;
  const compressControls = $('#compressControls');
  const resizeControls = $('#resizeControls');
  const splitControls = $('#splitControls');
  const splitTip = $('#splitTip');
  if (compressControls) compressControls.hidden = mode !== 'compress';
  if (resizeControls) resizeControls.hidden = !['resize', 'upscale'].includes(mode);
  if (splitControls) splitControls.hidden = mode !== 'split';
  if (splitTip) splitTip.hidden = mode !== 'split';
  if (cropBox) cropBox.hidden = mode !== 'crop';
  updateOutputOptionsForMode(mode);
  updateSplitControls();
  if (mode === 'crop') updateCropPreview(false);
  refreshMobileToolText();
}

async function convert() {
  if (!state.files.length) {
    setError((prxCompletePack().runtime?.uploadFirst || 'Please upload at least one file first.'));
    return;
  }
  setError('');
  showToast(i18n('processing', 'Processing started...'), 1100);
  if (resultCard) resultCard.hidden = true;
  renderCropOverlayFromInputs();

  const formData = new FormData();
  state.files.forEach(({ file }) => formData.append('files', file));
  formData.append('mode', document.querySelector('[name="mode"]:checked')?.value || 'convert');
  formData.append('outputFormat', $('#outputFormat')?.value || 'webp');
  formData.append('quality', $('#quality')?.value || '82');
  formData.append('targetKb', $('#targetKb')?.value || '');
  formData.append('width', $('#width')?.value || '');
  formData.append('height', $('#height')?.value || '');
  formData.append('fit', $('#fit')?.value || 'inside');
  formData.append('withoutEnlargement', String($('#withoutEnlargement')?.checked ?? true));
  formData.append('cropLeft', $('#cropLeft')?.value || '0');
  formData.append('cropTop', $('#cropTop')?.value || '0');
  formData.append('cropWidth', $('#cropWidth')?.value || '');
  formData.append('cropHeight', $('#cropHeight')?.value || '');
  formData.append('splitMethod', $('#splitMethod')?.value || 'both');
  formData.append('splitRows', $('#splitRows')?.value || '2');
  formData.append('splitColumns', $('#splitColumns')?.value || '2');
  formData.append('splitNaming', $('#splitNaming')?.value || 'grid');

  let progress = 8;
  setProgress(progress);
  const interval = window.setInterval(() => {
    progress = Math.min(92, progress + 8);
    setProgress(progress);
  }, 220);
  try {
    const response = await fetch('/api/convert', { method: 'POST', body: formData });
    window.clearInterval(interval);
    if (!response.ok) {
      const payload = await response.json().catch(() => ({ message: 'Conversion failed.' }));
      throw new Error(payload.message || 'Conversion failed.');
    }
    const blob = await response.blob();
    if (state.resultUrl) URL.revokeObjectURL(state.resultUrl);
    state.resultUrl = URL.createObjectURL(blob);
    const outputFormat = $('#outputFormat')?.value || 'webp';
    const filename = decodeURIComponent(response.headers.get('X-Output-Filename') || `converted.${outputFormat}`);
    const originalSize = Number(response.headers.get('X-Original-Size') || state.files.reduce((s, item) => s + item.file.size, 0));
    const outputSize = Number(response.headers.get('X-Output-Size') || blob.size);
    const savings = Math.max(0, 100 - (outputSize / Math.max(1, originalSize)) * 100);
    const activeMode = document.querySelector('[name="mode"]:checked')?.value || 'convert';
    const pieces = Number(response.headers.get('X-Output-Pieces') || '0');
    if ($('#resultName')) $('#resultName').textContent = filename;
    if ($('#resultMeta')) {
      const oldSize = bytesToHuman(originalSize);
      const newSize = bytesToHuman(outputSize);
      const runtime = prxCompletePack().runtime || PRX_COMPLETE_I18N.en.runtime;
      $('#resultMeta').textContent = activeMode === 'split'
        ? (runtime.result || 'Old size: {old} • New size: {new} • Savings: {saving} • Pieces: {pieces}').replace('{old}', oldSize).replace('{new}', newSize).replace('{saving}', `${savings.toFixed(1)}%`).replace('{pieces}', String(pieces || 'ZIP'))
        : (runtime.result || 'Old size: {old} • New size: {new} • Savings: {saving} • Pieces: {pieces}').replace('{old}', oldSize).replace('{new}', newSize).replace('{saving}', `${savings.toFixed(1)}%`).replace(' • Pieces: {pieces}', '');
    }
    if ($('#downloadButton')) {
      $('#downloadButton').href = state.resultUrl;
      $('#downloadButton').download = filename;
    }
    if (resultCard) resultCard.hidden = false;
    setProgress(100);
    showToast(i18n('success', 'Success! Your optimized file is ready.'), 2000);
    remember(`${state.files.length} file(s) → ${filename} • ${bytesToHuman(originalSize)} to ${bytesToHuman(outputSize)}`);
  } catch (error) {
    window.clearInterval(interval);
    setProgress(0);
    setError(error.message || 'Something went wrong.');
  }
}

function initCookieBanner() {
  const banner = $('#cookieBanner');
  if (!banner) return;
  const manage = $('#cookieManage');
  const storageKey = 'prismix-cookie-preferences-v1';
  if (!localStorage.getItem(storageKey)) banner.hidden = false;
  $('#acceptAll')?.addEventListener('click', () => {
    localStorage.setItem(storageKey, JSON.stringify({ necessary: true, analytics: true, ads: true, updatedAt: new Date().toISOString() }));
    banner.hidden = true;
  });
  $('#rejectAll')?.addEventListener('click', () => {
    localStorage.setItem(storageKey, JSON.stringify({ necessary: true, analytics: false, ads: false, updatedAt: new Date().toISOString() }));
    banner.hidden = true;
  });
  $('#managePrefs')?.addEventListener('click', () => { if (manage) manage.hidden = !manage.hidden; });
}


function initRevealAnimations() {
  const items = $$('.reveal, .feature-card, .seo-card, .steps article, .conversion-grid a');
  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

function initFloatingShapes() {
  const root = document.documentElement;
  const field = document.querySelector('.floating-shapes');
  if (!field) return;

  const objects = [
    { key: 'rounded-cube', label: 'Rounded Cube', src: '/assets/objects3d/rounded-cube.png', x: 26, y: 12, s: 1.02, r: -8, z: -620 },
    { key: 'glass-prism', label: 'Glass Prism', src: '/assets/objects3d/glass-prism.png', x: 36, y: 30, s: .82, r: -8, z: -660 },
    { key: 'faceted-diamond', label: 'Faceted Diamond', src: '/assets/objects3d/faceted-diamond.png', x: 79, y: 10, s: .92, r: 6, z: -610 },
    { key: 'torus-ring', label: 'Torus Ring', src: '/assets/objects3d/torus-ring.png', x: 92, y: 15, s: .86, r: 8, z: -640 },
    { key: 'cylindrical-capsule', label: 'Cylindrical Capsule', src: '/assets/objects3d/cylindrical-capsule.png', x: 20, y: 34, s: .86, r: -12, z: -680 },
    { key: 'hexagonal-prism', label: 'Hexagonal Prism', src: '/assets/objects3d/hexagonal-prism.png', x: 82, y: 34, s: .76, r: 4, z: -690 },
    { key: 'stepped-cube', label: 'Stepped Cube', src: '/assets/objects3d/stepped-cube.png', x: 92, y: 42, s: .86, r: 4, z: -660 },
    { key: 'crystal-wedge', label: 'Crystal Wedge', src: '/assets/objects3d/crystal-wedge.png', x: 22, y: 55, s: .76, r: -8, z: -700 },
    { key: 'donut-ring', label: 'Donut Ring', src: '/assets/objects3d/donut-ring.png', x: 89, y: 59, s: .84, r: 3, z: -650 },
    { key: 'rounded-pyramid', label: 'Rounded Pyramid', src: '/assets/objects3d/rounded-pyramid.png', x: 91, y: 78, s: .92, r: 7, z: -620 },
    { key: 'beveled-block', label: 'Beveled Block', src: '/assets/objects3d/beveled-block.png', x: 49, y: 83, s: .78, r: -2, z: -720 },
    { key: 'triangular-prism', label: 'Triangular Prism', src: '/assets/objects3d/triangular-prism.png', x: 68, y: 37, s: .72, r: 11, z: -720 }
  ];

  const rand = (min, max) => min + Math.random() * (max - min);
  field.innerHTML = '';
  field.classList.add('rendered-object-stage');

  objects.forEach((item, index) => {
    const node = document.createElement('span');
    const jitterX = rand(-2.2, 2.2);
    const jitterY = rand(-2.0, 2.0);
    const scale = Math.max(.48, item.s + rand(-.08, .08));
    const depth = item.z + Math.round(rand(-45, 45));
    const floatSeconds = rand(10, 18).toFixed(2);
    const rotateSeconds = rand(22, 42).toFixed(2);
    const delay = (-rand(0, 9)).toFixed(2);

    node.className = `prx-art-object prx-art-${item.key}`;
    node.setAttribute('data-object', item.label);
    node.style.cssText = `--x:${(item.x + jitterX).toFixed(2)}vw;--y:${(item.y + jitterY).toFixed(2)}vh;--s:${scale.toFixed(2)};--z:${depth}px;--r:${(item.r + rand(-5, 5)).toFixed(2)}deg;--float:${floatSeconds}s;--spin:${rotateSeconds}s;--delay:${delay}s;--mx:0deg;--my:0deg;--order:${index};`;
    node.innerHTML = `<span class="prx-art-glow"></span><img class="prx-art-img" src="${item.src}" alt="" decoding="async" draggable="false" aria-hidden="true"><span class="prx-art-depth"></span>`;
    field.appendChild(node);
  });

  window.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    root.style.setProperty('--bg-mouse-x', `${x * 7}deg`);
    root.style.setProperty('--bg-mouse-y', `${y * -7}deg`);
  }, { passive: true });
}


function getNavKind(link) {
  const href = (link.getAttribute('href') || '').toLowerCase();
  const label = (link.querySelector('em')?.textContent || '').trim().toLowerCase();
  if (href === '/' || href.endsWith('/index.html') || label.includes('home')) return 'home';
  if (href.includes('convert') || label.includes('convert')) return 'convert';
  if (href.includes('compress') || label.includes('compress')) return 'compress';
  if (href.includes('resize') || label.includes('resize')) return 'resize';
  if (href.includes('crop') || label.includes('crop')) return 'crop';
  if (href.includes('split') || label.includes('split')) return 'split';
  if (href.includes('pdf') || label.includes('pdf')) return 'pdf';
  if (href.includes('format') || label.includes('format')) return 'formats';
  if (href.includes('guide') || label.includes('guide')) return 'guides';
  if (href.includes('faq') || label.includes('faq')) return 'faq';
  if (href.includes('contact') || label.includes('contact')) return 'contact';
  return 'tool';
}

function navIconSvg(kind) {
  const svg = (body) => `<svg class="nav-icon-svg prx-premium-svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false">${body}</svg>`;
  const icons = {
    home: svg(`
      <path class="nav-soft" d="M7.4 15.4 16 8.2l8.6 7.2v8.2a2 2 0 0 1-2 2h-4.2v-6.5h-4.8v6.5H9.4a2 2 0 0 1-2-2Z"/>
      <path class="nav-path" d="M6.5 15.1 16 7.3l9.5 7.8"/>
      <path class="nav-path" d="M8.4 15v8.2a2.1 2.1 0 0 0 2.1 2.1h3.1v-6.2h4.8v6.2h3.1a2.1 2.1 0 0 0 2.1-2.1V15"/>
      <path class="nav-accent" d="M13.4 13.8h5.2"/>
      <circle class="nav-dot" cx="16" cy="16.2" r="1.05"/>
    `),
    convert: svg(`
      <rect class="nav-soft" x="7.8" y="8.4" width="16.4" height="15.2" rx="4.2"/>
      <path class="nav-path" d="M10.2 11.2h10.7"/>
      <path class="nav-accent" d="m18.5 8.4 3.3 2.8-3.3 3"/>
      <path class="nav-path" d="M21.8 20.8H11.1"/>
      <path class="nav-accent" d="m13.5 23.6-3.3-2.8 3.3-3"/>
      <path class="nav-path" d="M12.1 15.7h7.8a1.9 1.9 0 0 1 0 3.8h-7.8a1.9 1.9 0 0 1 0-3.8Z"/>
    `),
    compress: svg(`
      <rect class="nav-soft" x="8" y="8" width="16" height="16" rx="4"/>
      <path class="nav-path" d="M11.2 11.2h4.2v4.2h-4.2zM16.6 16.6h4.2v4.2h-4.2z"/>
      <path class="nav-accent" d="M22.8 10.2 19.7 13.3M22.8 10.2h-3.2M22.8 10.2v3.2"/>
      <path class="nav-accent" d="M9.2 21.8 12.3 18.7M9.2 21.8h3.2M9.2 21.8v-3.2"/>
      <circle class="nav-dot" cx="16" cy="16" r="1.25"/>
    `),
    resize: svg(`
      <rect class="nav-soft" x="8.2" y="8.2" width="15.6" height="15.6" rx="3.7"/>
      <path class="nav-path" d="M10.2 14.4v-4.2h4.2M21.8 17.6v4.2h-4.2M10.2 17.6v4.2h4.2M21.8 14.4v-4.2h-4.2"/>
      <path class="nav-accent" d="M11.2 11.2 15 15M20.8 20.8 17 17M11.2 20.8 15 17M20.8 11.2 17 15"/>
      <path class="nav-path" d="M13.1 13.1h5.8v5.8h-5.8z"/>
    `),
    crop: svg(`
      <path class="nav-soft" d="M10 9h12a1 1 0 0 1 1 1v12H11a1 1 0 0 1-1-1Z"/>
      <path class="nav-path" d="M9.1 5.9v16.2a1.8 1.8 0 0 0 1.8 1.8h15.2"/>
      <path class="nav-path" d="M5.9 9.1h15.2a1.8 1.8 0 0 1 1.8 1.8v15.2"/>
      <path class="nav-accent" d="M13 13h6v6h-6z"/>
      <circle class="nav-dot" cx="13" cy="13" r=".95"/><circle class="nav-dot" cx="19" cy="19" r=".95"/>
    `),
    pdf: svg(`
      <path class="nav-soft" d="M10.2 6.8h7.4l4.2 4.2v12a2.2 2.2 0 0 1-2.2 2.2h-9.4A2.2 2.2 0 0 1 8 23V9a2.2 2.2 0 0 1 2.2-2.2Z"/>
      <path class="nav-path" d="M10.2 6.8h7.4l4.2 4.2v12a2.2 2.2 0 0 1-2.2 2.2h-9.4A2.2 2.2 0 0 1 8 23V9a2.2 2.2 0 0 1 2.2-2.2Z"/>
      <path class="nav-accent" d="M17.6 6.8V11h4.2"/>
      <path class="nav-path" d="M11.4 17.2h9.2M11.4 20.5h6.3"/>
    `),
    split: svg(`
      <rect class="nav-soft" x="7.6" y="7.6" width="16.8" height="16.8" rx="4.2"/>
      <path class="nav-path" d="M8.6 8.6h14.8v14.8H8.6z"/>
      <path class="nav-accent" d="M16 8.6v14.8M8.6 16h14.8"/>
      <path class="nav-path" d="M11.2 11.2h2.2v2.2h-2.2zM18.6 11.2h2.2v2.2h-2.2zM11.2 18.6h2.2v2.2h-2.2zM18.6 18.6h2.2v2.2h-2.2z"/>
      <circle class="nav-dot" cx="16" cy="16" r="1.05"/>
    `),
    formats: svg(`
      <rect class="nav-soft" x="8" y="7.2" width="16" height="17.6" rx="4"/>
      <path class="nav-path" d="M11.2 11h9.6M11.2 16h9.6M11.2 21h9.6"/>
      <circle class="nav-dot" cx="8.9" cy="11" r="1"/><circle class="nav-dot" cx="23.1" cy="16" r="1"/><circle class="nav-dot" cx="8.9" cy="21" r="1"/>
    `),
    guides: svg(`
      <path class="nav-soft" d="m16 6.6 2.5 5.2 5.7.8-4.1 4 1 5.6-5.1-2.7-5.1 2.7 1-5.6-4.1-4 5.7-.8Z"/>
      <path class="nav-path" d="m16 6.6 2.5 5.2 5.7.8-4.1 4 1 5.6-5.1-2.7-5.1 2.7 1-5.6-4.1-4 5.7-.8Z"/>
      <path class="nav-accent" d="M16 11.9v5.6"/>
      <circle class="nav-dot" cx="16" cy="19.6" r="1.05"/>
    `),
    faq: svg(`
      <circle class="nav-soft" cx="16" cy="16" r="9.2"/>
      <circle class="nav-path" cx="16" cy="16" r="8.6"/>
      <path class="nav-path" d="M12.8 13.5a3.3 3.3 0 1 1 5.6 2.3c-1.2 1-2 1.8-2 3.1"/>
      <circle class="nav-dot" cx="16" cy="22" r="1.1"/>
    `),
    contact: svg(`
      <rect class="nav-soft" x="6.8" y="9" width="18.4" height="14" rx="3.2"/>
      <path class="nav-path" d="M8.7 9h14.6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8.7a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2Z"/>
      <path class="nav-accent" d="m8.3 11.3 7.7 5.2 7.7-5.2"/>
      <circle class="nav-dot" cx="24.1" cy="8.7" r="1.15"/>
    `),
    tool: svg(`
      <circle class="nav-soft" cx="16" cy="16" r="9"/>
      <circle class="nav-path" cx="16" cy="16" r="8.2"/>
      <path class="nav-accent" d="M16 11.2v9.6M11.2 16h9.6"/>
    `)
  };
  return icons[kind] || icons.tool;
}

function initCustomNavIcons() {
  const accentMap = {
    home: ['#2e7bff', '#7b61ff'],
    convert: ['#2f7cff', '#8b5cf6'],
    compress: ['#06b6d4', '#7b61ff'],
    resize: ['#8b5cf6', '#c026d3'],
    crop: ['#a855f7', '#7c3aed'],
    pdf: ['#7c3aed', '#2563eb'],
    split: ['#f97316', '#7c3aed'],
    formats: ['#0ea5e9', '#8b5cf6'],
    guides: ['#c026d3', '#8b5cf6'],
    faq: ['#7c3aed', '#ec4899'],
    contact: ['#2563eb', '#06b6d4'],
    tool: ['#64748b', '#475569']
  };

  document.querySelectorAll('.app-sidebar .nav-item').forEach((link) => {
    const kind = getNavKind(link);
    const shell = link.querySelector('span');
    if (!shell) return;
    shell.classList.add('nav-icon-shell');
    shell.innerHTML = navIconSvg(kind);
    link.dataset.navKind = kind;
    const [a, b] = accentMap[kind] || accentMap.tool;
    link.style.setProperty('--nav-accent-1', a);
    link.style.setProperty('--nav-accent-2', b);
    if (!link.querySelector('.nav-indicator')) {
      const indicator = document.createElement('i');
      indicator.className = 'nav-indicator';
      indicator.setAttribute('aria-hidden', 'true');
      link.appendChild(indicator);
    }
  });
}

function initSidebarNavigation() {
  const path = window.location.pathname === '/' ? '/' : window.location.pathname;
  let activeLink = null;
  $$('.sidebar-nav a').forEach((link) => {
    const url = new URL(link.href, window.location.origin);
    const isHome = path === '/' && url.pathname === '/';
    const isMatch = !isHome && url.pathname === path;
    const active = isHome || isMatch;
    link.classList.toggle('active', active);
    if (active && !activeLink) activeLink = link;
  });
}


function currentPrimaryNavKind() {
  const path = window.location.pathname.toLowerCase();
  if (path === '/' || path.endsWith('/index.html')) return 'home';
  if (path.includes('compress')) return 'compress';
  if (path.includes('resize')) return 'resize';
  if (path.includes('crop')) return 'crop';
  if (path.includes('split')) return 'split';
  if (path.includes('upscale')) return 'resize';
  if (path.includes('convert') || path.includes('png-to') || path.includes('jpg-to') || path.includes('webp-to') || path.includes('avif-to') || path.includes('heic-to') || path.includes('heif-to') || path.includes('webp-converter') || path.includes('avif-converter')) return 'convert';
  return '';
}

function syncMobileTabbar() {
  const sidebar = document.querySelector('.app-sidebar');
  if (!sidebar) return;
  const sourceLinks = Array.from(sidebar.querySelectorAll(':scope > .sidebar-nav:not(.sidebar-secondary) .nav-item')).slice(0, 6);
  if (!sourceLinks.length) return;

  let tabbar = sidebar.querySelector('.prx-mobile-tabbar');
  if (!tabbar) {
    tabbar = document.createElement('nav');
    tabbar.className = 'prx-mobile-tabbar';
    tabbar.setAttribute('aria-label', 'Mobile primary navigation');
    sidebar.appendChild(tabbar);
  }

  const activeKind = currentPrimaryNavKind();
  tabbar.innerHTML = '';
  sourceLinks.forEach((source, index) => {
    const kind = getNavKind(source);
    const label = source.querySelector('em')?.textContent?.trim() || source.getAttribute('aria-label') || kind;
    const href = source.getAttribute('href') || '#';
    const item = document.createElement('a');
    item.className = 'prx-mobile-tab-item';
    item.href = href;
    item.dataset.navKind = kind;
    item.setAttribute('aria-label', label);
    item.setAttribute('title', label);
    item.style.setProperty('--nav-accent-1', source.style.getPropertyValue('--nav-accent-1') || '#2e7bff');
    item.style.setProperty('--nav-accent-2', source.style.getPropertyValue('--nav-accent-2') || '#7b61ff');
    item.innerHTML = `<span class="prx-mobile-tab-icon" aria-hidden="true">${navIconSvg(kind)}</span>`;
    const isActive = activeKind ? kind === activeKind : source.classList.contains('active');
    if (isActive) {
      item.classList.add('active');
      item.setAttribute('aria-current', 'page');
    }
    item.addEventListener('click', (event) => {
      // Force visual feedback only on the tapped item. The normal anchor navigation still handles the page change.
      tabbar.querySelectorAll('.prx-mobile-tab-item').forEach((link) => {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      });
      event.currentTarget.classList.add('active');
      event.currentTarget.setAttribute('aria-current', 'page');
    });
    tabbar.appendChild(item);
  });
}

function applyPagePresetFromPath() {
  const path = window.location.pathname.toLowerCase();
  const presetMap = [
    { test: 'compress-image', mode: 'compress' },
    { test: 'resize-image', mode: 'resize' },
    { test: 'crop-image', mode: 'crop' },
    { test: 'upscale-image', mode: 'upscale' },
    { test: 'split-image', mode: 'split', format: 'png' },
    { test: 'image-to-pdf', mode: 'convert', format: 'pdf' },
    { test: 'png-to-jpg', mode: 'convert', format: 'jpg' },
    { test: 'jpg-to-webp', mode: 'convert', format: 'webp' },
    { test: 'webp-to-png', mode: 'convert', format: 'png' },
    { test: 'avif-to-jpg', mode: 'convert', format: 'jpg' },
    { test: 'heic-to-jpg', mode: 'convert', format: 'jpg' },
    { test: 'heif-to-jpg', mode: 'convert', format: 'jpg' },
    { test: 'jpg-to-heic', mode: 'convert', format: 'heic' },
    { test: 'webp-converter', mode: 'convert', format: 'webp' },
    { test: 'avif-converter', mode: 'convert', format: 'avif' }
  ];
  const preset = presetMap.find((item) => path.includes(item.test));
  if (!preset) return;
  const modeInput = document.querySelector(`[name="mode"][value="${preset.mode}"]`);
  if (modeInput) modeInput.checked = true;
  if (preset.format && $('#outputFormat')) $('#outputFormat').value = preset.format;
}

function initUploadEvents() {
  fileInput?.addEventListener('change', (event) => handleFiles(event.target.files));
  chooseFilesButton?.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    fileInput?.click();
  });
  dropzone?.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      fileInput?.click();
    }
  });
  dropzone?.addEventListener('dragover', (event) => { event.preventDefault(); dropzone.classList.add('dragging'); });
  dropzone?.addEventListener('dragleave', () => dropzone.classList.remove('dragging'));
  dropzone?.addEventListener('drop', (event) => {
    event.preventDefault();
    dropzone.classList.remove('dragging');
    handleFiles(event.dataTransfer.files);
  });
}

function initCropEvents() {
  $$('#cropLeft,#cropTop,#cropWidth,#cropHeight').forEach((input) => {
    input.addEventListener('input', renderCropOverlayFromInputs);
    input.addEventListener('change', renderCropOverlayFromInputs);
  });
  cropPreview?.addEventListener('pointerdown', startCropInteraction);
  cropPreview?.addEventListener('pointermove', moveCropInteraction);
  cropPreview?.addEventListener('pointerup', endCropInteraction);
  cropPreview?.addEventListener('pointercancel', endCropInteraction);
  window.addEventListener('resize', () => renderCropOverlayFromInputs(), { passive: true });
}

function initToolEvents() {
  $$('[name="mode"]').forEach((input) => input.addEventListener('change', updateMode));
  $('#convertButton')?.addEventListener('click', convert);
  $('#quality')?.addEventListener('input', (event) => { if ($('#qualityValue')) $('#qualityValue').textContent = `${event.target.value}%`; });
  $('#splitMethod')?.addEventListener('change', updateSplitControls);
  $('#splitRows')?.addEventListener('input', updateSplitControls);
  $('#splitColumns')?.addEventListener('input', updateSplitControls);
  $('#outputFormat')?.addEventListener('change', refreshMobileToolText);
}


function contactMailtoUrl(data) {
  const subject = encodeURIComponent(`Prismix contact message from ${data.name || 'visitor'}`);
  const body = encodeURIComponent([
    `Full name: ${data.name || ''}`,
    `Email: ${data.email || ''}`,
    '',
    data.message || ''
  ].join('\n'));
  return `mailto:info@hakkiburakbakirci.com?subject=${subject}&body=${body}`;
}

function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  const status = form.querySelector('[data-contact-status]') || document.createElement('p');
  status.dataset.contactStatus = 'true';
  status.className = 'contact-status';
  if (!status.parentElement) form.appendChild(status);
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const submit = form.querySelector('[type="submit"]');
    const data = {
      name: String(form.elements.name?.value || '').trim(),
      email: String(form.elements.email?.value || '').trim(),
      message: String(form.elements.message?.value || '').trim(),
      language: currentLanguage,
      page: window.location.href
    };
    status.textContent = '';
    status.classList.remove('is-error','is-success');
    if (!data.name || !data.email || !data.message) {
      status.textContent = prxCreatorText('contactError');
      status.classList.add('is-error');
      return;
    }
    submit.disabled = true;
    submit.dataset.originalText ||= submit.textContent;
    submit.textContent = prxCreatorText('contactSending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(payload.message || 'Contact delivery failed.');
      status.textContent = prxCreatorText('contactReady');
      status.classList.add('is-success');
      showToast(prxCreatorText('contactReady'), 2200);
      form.reset();
    } catch (error) {
      status.textContent = prxCreatorText('contactFallback');
      status.classList.add('is-error');
      window.location.href = contactMailtoUrl(data);
    } finally {
      submit.disabled = false;
      submit.textContent = prxCreatorText('contactButton') || submit.dataset.originalText || 'Send message';
    }
  });
}


function initCurrentYear() {
  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
}


/* Prismix v1.0.29 — corporate multilingual footer */
const PRX_CORPORATE_FOOTER_I18N = {
  en: {
    intro: 'Prismix Image Converter is a fast, privacy-focused online image tool for converting, compressing, resizing, cropping, upscaling and splitting images.',
    seo: 'All SEO improvements, content structure and technical optimizations are maintained according to current search engine standards and user experience best practices.',
    creditBefore: 'Designed and developed by',
    creditAfter: '.',
    rights: 'All rights reserved.'
  },
  tr: {
    intro: 'Prismix Image Converter; görselleri dönüştürmek, sıkıştırmak, yeniden boyutlandırmak, kırpmak, büyütmek ve bölmek için geliştirilmiş hızlı, gizlilik odaklı ve kullanıcı dostu bir çevrim içi görsel aracıdır.',
    seo: 'Tüm SEO geliştirmeleri, içerik yapısı ve teknik optimizasyonlar güncel arama motoru standartları ve kullanıcı deneyimi prensiplerine göre sürdürülmektedir.',
    creditBefore: '',
    creditAfter: ' tarafından tasarlanıp geliştirilmiştir.',
    rights: 'Tüm hakları saklıdır.'
  },
  es: {
    intro: 'Prismix Image Converter es una herramienta de imagen online rápida, centrada en la privacidad y fácil de usar para convertir, comprimir, redimensionar, recortar, ampliar y dividir imágenes.',
    seo: 'Todas las mejoras SEO, la estructura de contenido y las optimizaciones técnicas se mantienen de acuerdo con los estándares actuales de los motores de búsqueda y las mejores prácticas de experiencia de usuario.',
    creditBefore: 'Diseñado y desarrollado por',
    creditAfter: '.',
    rights: 'Todos los derechos reservados.'
  },
  'pt-BR': {
    intro: 'Prismix Image Converter é uma ferramenta online rápida, focada em privacidade e fácil de usar para converter, comprimir, redimensionar, recortar, ampliar e dividir imagens.',
    seo: 'Todas as melhorias de SEO, a estrutura de conteúdo e as otimizações técnicas são mantidas de acordo com os padrões atuais dos mecanismos de busca e as melhores práticas de experiência do usuário.',
    creditBefore: 'Projetado e desenvolvido por',
    creditAfter: '.',
    rights: 'Todos os direitos reservados.'
  },
  de: {
    intro: 'Prismix Image Converter ist ein schnelles, datenschutzorientiertes und benutzerfreundliches Online-Bildtool zum Konvertieren, Komprimieren, Ändern der Größe, Zuschneiden, Hochskalieren und Teilen von Bildern.',
    seo: 'Alle SEO-Verbesserungen, die Inhaltsstruktur und die technischen Optimierungen werden gemäß aktuellen Suchmaschinenstandards und Best Practices für Nutzererfahrung gepflegt.',
    creditBefore: 'Entworfen und entwickelt von',
    creditAfter: '.',
    rights: 'Alle Rechte vorbehalten.'
  },
  fr: {
    intro: 'Prismix Image Converter est un outil d’image en ligne rapide, axé sur la confidentialité et simple à utiliser pour convertir, compresser, redimensionner, recadrer, agrandir et découper des images.',
    seo: 'Toutes les améliorations SEO, l’architecture de contenu et les optimisations techniques sont maintenues selon les standards actuels des moteurs de recherche et les bonnes pratiques d’expérience utilisateur.',
    creditBefore: 'Conçu et développé par',
    creditAfter: '.',
    rights: 'Tous droits réservés.'
  },
  it: {
    intro: 'Prismix Image Converter è uno strumento online rapido, orientato alla privacy e facile da usare per convertire, comprimere, ridimensionare, ritagliare, ingrandire e dividere immagini.',
    seo: 'Tutti i miglioramenti SEO, la struttura dei contenuti e le ottimizzazioni tecniche sono mantenuti secondo gli standard attuali dei motori di ricerca e le migliori pratiche di esperienza utente.',
    creditBefore: 'Progettato e sviluppato da',
    creditAfter: '.',
    rights: 'Tutti i diritti riservati.'
  },
  id: {
    intro: 'Prismix Image Converter adalah alat gambar online yang cepat, berfokus pada privasi, dan mudah digunakan untuk mengonversi, mengompres, mengubah ukuran, memotong, memperbesar, dan membagi gambar.',
    seo: 'Semua peningkatan SEO, struktur konten, dan optimasi teknis dipelihara sesuai standar mesin pencari terkini dan praktik terbaik pengalaman pengguna.',
    creditBefore: 'Dirancang dan dikembangkan oleh',
    creditAfter: '.',
    rights: 'Seluruh hak cipta dilindungi.'
  },
  ja: {
    intro: 'Prismix Image Converter は、画像の変換、圧縮、リサイズ、切り抜き、拡大、分割のために作られた、高速でプライバシー重視の使いやすいオンライン画像ツールです。',
    seo: 'すべてのSEO改善、コンテンツ構造、技術的最適化は、最新の検索エンジン基準とユーザー体験のベストプラクティスに沿って維持されています。',
    creditBefore: '設計・開発:',
    creditAfter: '。',
    rights: 'All rights reserved.'
  },
  ko: {
    intro: 'Prismix Image Converter는 이미지를 변환, 압축, 크기 조정, 자르기, 업스케일 및 분할하기 위해 만들어진 빠르고 개인정보를 중시하는 사용자 친화적 온라인 이미지 도구입니다.',
    seo: '모든 SEO 개선, 콘텐츠 구조 및 기술 최적화는 최신 검색 엔진 기준과 사용자 경험 모범 사례에 맞춰 유지됩니다.',
    creditBefore: '디자인 및 개발:',
    creditAfter: '.',
    rights: '모든 권리 보유.'
  },
  'zh-CN': {
    intro: 'Prismix Image Converter 是一款快速、注重隐私且易于使用的在线图片工具，可用于转换、压缩、调整尺寸、裁剪、放大和拆分图片。',
    seo: '所有 SEO 改进、内容结构和技术优化均依据当前搜索引擎标准与用户体验最佳实践持续维护。',
    creditBefore: '设计与开发：',
    creditAfter: '。',
    rights: '保留所有权利。'
  },
  ar: {
    intro: 'Prismix Image Converter أداة صور إلكترونية سريعة وتركّز على الخصوصية وسهلة الاستخدام لتحويل الصور وضغطها وتغيير حجمها وقصها وتكبيرها وتقسيمها.',
    seo: 'تتم صيانة جميع تحسينات SEO وبنية المحتوى والتحسينات التقنية وفق معايير محركات البحث الحالية وأفضل ممارسات تجربة المستخدم.',
    creditBefore: 'صُمم وطُور بواسطة',
    creditAfter: '.',
    rights: 'جميع الحقوق محفوظة.'
  },
  hi: {
    intro: 'Prismix Image Converter एक तेज़, privacy-focused और user-friendly online image tool है, जिसे images को convert, compress, resize, crop, upscale और split करने के लिए बनाया गया है।',
    seo: 'सभी SEO improvements, content structure और technical optimizations वर्तमान search engine standards और user experience best practices के अनुसार maintain किए जाते हैं।',
    creditBefore: 'Designed and developed by',
    creditAfter: '.',
    rights: 'सर्वाधिकार सुरक्षित.'
  },
  ru: {
    intro: 'Prismix Image Converter — быстрый, ориентированный на конфиденциальность и удобный онлайн-инструмент для конвертации, сжатия, изменения размера, кадрирования, увеличения и разделения изображений.',
    seo: 'Все SEO-улучшения, структура контента и технические оптимизации поддерживаются в соответствии с актуальными стандартами поисковых систем и лучшими практиками пользовательского опыта.',
    creditBefore: 'Дизайн и разработка:',
    creditAfter: '.',
    rights: 'Все права защищены.'
  }
};

function prxFooterPack(lang = currentLanguage) {
  return PRX_CORPORATE_FOOTER_I18N[normalizeLang(lang)] || PRX_CORPORATE_FOOTER_I18N.en;
}

function prxMonthYear(lang = currentLanguage) {
  const locale = normalizeLang(lang);
  const tag = locale === 'zh-CN' ? 'zh-CN' : locale;
  try {
    const value = new Intl.DateTimeFormat(tag, { month: 'long', year: 'numeric' }).format(new Date());
    return value ? value.charAt(0).toLocaleUpperCase(tag) + value.slice(1) : String(new Date().getFullYear());
  } catch (error) {
    return new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(new Date());
  }
}

function prxBuildCredit(pack) {
  const p = document.createElement('p');
  if (pack.creditBefore) p.append(document.createTextNode(`${pack.creditBefore} `));
  const link = document.createElement('a');
  link.href = 'https://hakkiburakbakirci.com';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'Hakkı Burak Bakırcı';
  p.appendChild(link);
  p.append(document.createTextNode(pack.creditAfter || '.'));
  return p;
}

localizeFooter = function(pack = PRX_I18N[currentLanguage] || PRX_I18N.en) {
  const footer = document.querySelector('.footer');
  if (!footer) return;
  const corporate = prxFooterPack(currentLanguage);
  const main = footer.querySelector(':scope > div') || footer.querySelector('div');
  if (main) {
    main.innerHTML = '';
    const strong = document.createElement('strong');
    strong.textContent = 'Prismix Image Converter';
    const intro = document.createElement('p');
    intro.textContent = corporate.intro;
    const seo = document.createElement('p');
    seo.textContent = corporate.seo;
    const credit = prxBuildCredit(corporate);
    const rights = document.createElement('p');
    rights.className = 'copyright';
    rights.innerHTML = `© <span data-current-month-year>${prxMonthYear(currentLanguage)}</span> Prismix Image Converter. ${corporate.rights}`;
    main.append(strong, intro, seo, credit, rights);
  }
  const links = footer.querySelectorAll('nav a');
  const names = [pack.footerLinks?.privacy, pack.footerLinks?.terms, pack.footerLinks?.contact, pack.footerLinks?.sitemap];
  links.forEach((link, index) => { if (names[index]) link.textContent = names[index]; });
  setNodeText('[data-language-footer-title]', pack.footerChangeLanguage || pack.chooseLanguage || 'Change language');
}

initCurrentYear = function() {
  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
  document.querySelectorAll('[data-current-month-year]').forEach((node) => {
    node.textContent = prxMonthYear(currentLanguage);
  });
};

window.addEventListener('beforeunload', revokeFiles);

initMobileAppLayout();
applyPagePresetFromPath();
refreshMobileToolText();
initCustomNavIcons();
initLanguageSwitcher();
applyLanguage(currentLanguage);
initSidebarNavigation();
syncMobileTabbar();
initUploadEvents();
initCropEvents();
initToolEvents();
initContactForm();
initCookieBanner();
initCurrentYear();
initRevealAnimations();
initFloatingShapes();
updateMode();
renderHistory();
