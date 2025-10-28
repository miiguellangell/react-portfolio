#!/bin/bash

# Script de deploy para servidor sin Node.js
# Uso: ./deploy-production.sh

echo "🚀 Deploy para servidor de producción (sin Node.js)"

# Verificar que existe git
if ! command -v git &> /dev/null; then
    echo "❌ Git no está instalado"
    exit 1
fi

# Pull de cambios
echo "📥 Descargando cambios desde repositorio..."
git pull origin main || {
    echo "❌ Error al hacer git pull"
    exit 1
}

# Verificar que existe el build
if [ ! -d "build" ]; then
    echo "❌ No se encontró la carpeta build/"
    echo ""
    echo "📝 Pasos para solucionarlo:"
    echo "1. En tu máquina local, ejecuta: npm run build"
    echo "2. Haz commit de la carpeta build/:"
    echo "   git add build/"
    echo "   git commit -m 'Update build'"
    echo "   git push origin main"
    echo "3. Ejecuta este script nuevamente"
    exit 1
fi

# Crear backup del build anterior
if [ -d "../public_html/static" ]; then
    echo "💾 Creando backup..."
    timestamp=$(date +%Y%m%d_%H%M%S)
    mkdir -p backups
    tar -czf "backups/backup_$timestamp.tar.gz" -C ../public_html static index.html 2>/dev/null || true
fi

# Deploy de archivos
echo "📂 Desplegando archivos..."

# Copiar archivos de React build
cp build/index.html ../public_html/ || { echo "❌ Error copiando index.html"; exit 1; }
cp -r build/static ../public_html/ || { echo "❌ Error copiando static/"; exit 1; }

# Copiar otros archivos si existen
[ -f "build/manifest.json" ] && cp build/manifest.json ../public_html/
[ -f "build/robots.txt" ] && cp build/robots.txt ../public_html/
[ -f "build/asset-manifest.json" ] && cp build/asset-manifest.json ../public_html/

# Copiar archivos de configuración
cp send-email.php ../public_html/ || { echo "❌ Error copiando send-email.php"; exit 1; }
cp .htaccess ../public_html/ || { echo "❌ Error copiando .htaccess"; exit 1; }

# Verificar deploy
echo ""
echo "✅ Deploy completado exitosamente! 🎉"
echo ""
echo "📊 Información:"
echo "Fecha: $(date)"
echo "Commit: $(git rev-parse --short HEAD 2>/dev/null || echo 'N/A')"
echo "Archivos desplegados en: ../public_html/"
echo ""
echo "🌐 Tu sitio: https://miguelangel.icu"
echo "📧 Formulario de contacto: https://miguelangel.icu/send-email.php"