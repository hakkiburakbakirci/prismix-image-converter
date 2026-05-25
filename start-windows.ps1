Write-Host "Prismix Image Tools baslatiliyor..." -ForegroundColor Cyan
node -v
npm -v
if (!(Test-Path "node_modules")) {
  npm install --registry=https://registry.npmjs.org/ --no-audit --no-fund
  if ($LASTEXITCODE -ne 0) {
    npm cache clean --force
    npm install --registry=https://registry.npmjs.org/ --no-audit --no-fund
  }
}
npm run dev
