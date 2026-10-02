#!/usr/bin/env bash
#
# transcode-videos.sh — Comprime los vídeos originales de IGNIS para publicarlos.
#
# Contexto
# --------
# Los archivos de vídeo originales pesan ~1,6 GB (entrevistas en 1080p y dos
# capturas de gameplay). GitHub bloquea archivos de más de 100 MB y no sirve
# archivos gestionados con Git LFS, así que:
#
#   * Los tres vídeos originales se subieron a YouTube (no listados) y la web
#     los incrusta con un "facade" que carga el reproductor solo al hacer clic.
#   * Los dos clips de gameplay se autoalojan en public/videos/ comprimidos.
#
# Este script regenera esos dos clips autoalojados a partir de los originales.
#
# Uso
# ---
#   1. Coloca los originales en files/videos-originales/  (carpeta ignorada por git)
#   2. ./scripts/transcode-videos.sh
#
# Requiere ffmpeg y ffprobe (probado con ffmpeg 6/7).
#
set -euo pipefail

# Directorio raíz del proyecto (un nivel por encima de scripts/)
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC_DIR="$ROOT_DIR/files/videos-originales"
OUT_DIR="$ROOT_DIR/public/videos"
POSTER_DIR="$OUT_DIR/posters"

# Ajustes de codificación: pensados para primar el tamaño sin destruir la
# legibilidad del gameplay (fuente 848x478). CRF 30 + preset slow deja cada
# clip en ~20 MB. Sube/baja CRF para más calidad/menos peso.
CRF=30
PRESET=slow
AUDIO_BITRATE=96k

# Empareja "origen -> destino" (sin extensión).
declare -a JOBS=(
  "primerPrototipo.mp4:prototipo-1-primera-version"
  "prototipo_funional.mp4:prototipo-funcional"
)

command -v ffmpeg >/dev/null 2>&1 || {
  echo "❌ ffmpeg no está instalado o no está en el PATH." >&2
  exit 1
}

mkdir -p "$OUT_DIR" "$POSTER_DIR"

for job in "${JOBS[@]}"; do
  src="${job%%:*}"
  name="${job##*:}"
  input="$SRC_DIR/$src"
  output="$OUT_DIR/$name.mp4"
  poster="$POSTER_DIR/${name%.mp4}.jpg"

  if [[ ! -f "$input" ]]; then
    echo "⚠️  Falta el original: $input — se omite."
    continue
  fi

  echo "▶️  Transcodificando $src → $name.mp4 ..."
  ffmpeg -v error -y \
    -i "$input" \
    -c:v libx264 -crf "$CRF" -preset "$PRESET" -pix_fmt yuv420p \
    -movflags +faststart \
    -c:a aac -b:a "$AUDIO_BITRATE" \
    "$output"

  echo "🖼️  Generando póster $name.jpg ..."
  ffmpeg -v error -y \
    -i "$input" -ss 1 -frames:v 1 -q:v 4 \
    "$poster"

  echo "✅ $name.mp4 ($(du -h "$output" | cut -f1)) + póster"
done

echo
echo "Hecho. Recuerda:"
echo "  • Los originales viven en files/videos-originales/ y NO se versionan."
echo "  • Solo public/videos/ (comprimidos) se sube al repositorio."
