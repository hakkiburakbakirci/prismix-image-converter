# Windows npm kurulum hatasi cozumleri

Bu zip icinde package-lock.json bilerek yoktur. Onceki pakette package-lock dosyasi ortam ozel registry URL'leri icerebildigi icin Windows tarafinda npm takilabiliyordu.

## En kolay baslatma

1. Klasoru acin.
2. `start-windows.bat` dosyasina cift tiklayin.
3. Site acilinca tarayiciya gidin: https://prismix.online

## PowerShell ile temiz kurulum

```powershell
cd C:\Users\Dell\Downloads\prismix-image-tools-clean
rmdir /s /q node_modules 2>$null
del package-lock.json 2>$null
npm cache clean --force
npm install --registry=https://registry.npmjs.org/ --no-audit --no-fund
npm run dev
```

## Hala `Exit handler never called!` gorurseniz

Bu genellikle proje kodundan degil, Node/npm surum uyumsuzlugu veya npm cache/registry probleminden kaynaklanir.

Onerilen surum: Node.js 20 LTS.

Kontrol:

```powershell
node -v
npm -v
```

Node 22 kullaniyorsaniz ve npm takiliyorsa Node 20 LTS'e gecin veya npm'i guncelleyin:

```powershell
npm install -g npm@latest
```
