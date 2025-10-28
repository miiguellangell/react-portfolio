#!/bin/bash

echo "🚀 Iniciando deploy automático..."

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para mostrar errores
error() {
    echo -e "${RED}❌ Error: $1${NC}"
    exit 1
}

# Función para mostrar éxito
success() {
    echo -e "${GREEN}✅ $1${NC}"
}

# Función para mostrar info
info() {
    echo -e "${YELLOW}ℹ️  $1${NC}"
}

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    error "No se encontró package.json. Ejecuta este script desde el directorio del proyecto."
fi

# Pull de los últimos cambios
info "Descargando últimos cambios desde el repositorio..."
git pull origin main || error "Error al hacer git pull"
success "Cambios descargados correctamente"

# Instalar dependencias si es necesario
if [ -f "package-lock.json" ]; then
    info "Instalando dependencias..."
    npm install || error "Error al instalar dependencias"
    success "Dependencias instaladas"
fi

# Build del proyecto
info "Construyendo el proyecto..."
npm run build || error "Error en el build"
success "Build completado"

# Crear directorio de backup si no existe
mkdir -p backups

# Backup del build anterior (si existe)
if [ -d "../public_html/static" ]; then
    info "Creando backup del build anterior..."
    timestamp=$(date +%Y%m%d_%H%M%S)
    tar -czf "backups/build_backup_$timestamp.tar.gz" -C ../public_html static index.html manifest.json robots.txt asset-manifest.json 2>/dev/null || true
    success "Backup creado: build_backup_$timestamp.tar.gz"
fi

# Copiar archivos del build a public_html (excluyendo CMS)
info "Desplegando archivos..."

# Copiar index.html
cp build/index.html ../public_html/ || error "Error al copiar index.html"

# Copiar carpeta static
cp -r build/static ../public_html/ || error "Error al copiar carpeta static"

# Copiar otros archivos de build
cp build/manifest.json ../public_html/ 2>/dev/null || true
cp build/robots.txt ../public_html/ 2>/dev/null || true
cp build/asset-manifest.json ../public_html/ 2>/dev/null || true

# Copiar archivo PHP de contacto
cp send-email.php ../public_html/ || error "Error al copiar send-email.php"

# Copiar .htaccess
cp .htaccess ../public_html/ || error "Error al copiar .htaccess"

success "Deploy completado exitosamente! 🎉"

# Mostrar información del deploy
echo ""
echo "📊 Información del deploy:"
echo "Fecha: $(date)"
echo "Commit: $(git rev-parse --short HEAD)"
echo "Branch: $(git branch --show-current)"
echo "Archivos desplegados en: ../public_html/"
echo ""
echo "🌐 Tu sitio está disponible en: https://miguelangel.icu"