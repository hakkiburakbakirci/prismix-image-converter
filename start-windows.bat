@echo off
title Prismix Image Tools
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js bulunamadi. LTS surumu yukleyin: https://nodejs.org/
  pause
  exit /b 1
)
where npm >nul 2>nul
if errorlevel 1 (
  echo npm bulunamadi. Node.js LTS kurulumu ile birlikte gelir.
  pause
  exit /b 1
)
echo Node version:
node -v
echo npm version:
npm -v
if not exist node_modules (
  echo Paketler kuruluyor...
  npm install --registry=https://registry.npmjs.org/ --no-audit --no-fund
  if errorlevel 1 (
    echo.
    echo Kurulum basarisiz oldu. npm cache temizleniyor ve tekrar deneniyor...
    npm cache clean --force
    npm install --registry=https://registry.npmjs.org/ --no-audit --no-fund
  )
)
echo.
echo Site baslatiliyor: https://prismix.online
npm run dev
pause
