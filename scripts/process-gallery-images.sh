#!/usr/bin/env bash
# Resizes (center-crop to 4:3, 1500x1125) and compresses gallery photos to WebP.
# Mirrors the source folder tree into public/images/galeria with slugified names
# and sequential file names (01.webp, 02.webp, ...).
set -euo pipefail

SRC="${1:-/home/ivan/Documents/NUEVA WEB MAKITA/NUEVA WEB MAKITA}"
DEST="${2:-$(dirname "$0")/../public/images/galeria}"
W=1500
H=1125
QUALITY=80

slugify() {
	printf '%s' "$1" | iconv -f utf-8 -t ascii//TRANSLIT | tr '[:upper:]' '[:lower:]' \
		| sed -E 's/[^a-z0-9]+/-/g; s/^-+|-+$//g'
}

mkdir -p "$DEST"
jobs_file="$(mktemp)"
trap 'rm -f "$jobs_file"' EXIT

while IFS= read -r -d '' dir; do
	rel="${dir#"$SRC"}"
	rel="${rel#/}"
	[ -z "$rel" ] && continue
	out_rel=""
	IFS='/' read -ra parts <<< "$rel"
	for p in "${parts[@]}"; do out_rel+="$(slugify "$p")/"; done
	i=0
	while IFS= read -r -d '' f; do
		i=$((i + 1))
		mkdir -p "$DEST/$out_rel"
		printf '%s\0%s\0' "$f" "$DEST/$out_rel$(printf '%02d' "$i").webp" >> "$jobs_file"
	done < <(find "$dir" -maxdepth 1 -type f \( -iname '*.jpg' -o -iname '*.jpeg' -o -iname '*.png' \) -print0 | sort -z)
done < <(find "$SRC" -type d -print0 | sort -z)

xargs -0 -n 2 -P "$(nproc)" bash -c '
	ffmpeg -nostdin -loglevel error -y -i "$0" \
		-vf "scale='"$W"':'"$H"':force_original_aspect_ratio=increase,crop='"$W"':'"$H"'" \
		-frames:v 1 -c:v libwebp -quality '"$QUALITY"' "$1"
' < "$jobs_file"

echo "Done: $(find "$DEST" -name '*.webp' | wc -l) images in $DEST"
