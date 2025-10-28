#!/bin/bash

# Script para deploy sin Node en servidor
echo "🔄 Deploy desde archivos build locales..."

# Verificar que existe el build
if [ ! -d "build" ]; then
    echo "❌ No se encontró la carpeta build/"
    echo "💡 Ejecuta 'npm run build' en tu máquina local primero"
    exit 1
fi

# Copiar archivos esenciales
echo "📂 Copiando archivos compilados..."
cp build/index.html ../public_html/
cp -r build/static ../public_html/
cp send-email.php ../public_html/
cp .htaccess ../public_html/

echo "✅ Deploy completado!"
echo "🌐 Sitio: https://miguelangel.icu"