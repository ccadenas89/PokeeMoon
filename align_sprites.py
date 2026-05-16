"""
align_sprites.py
----------------
Procesa sprites PNG alineándolos al borde inferior del tile:
elimina las filas transparentes del fondo y desplaza el sprite
hacia abajo para que su último píxel con color quede en la
última fila del canvas (64×64 por defecto).

Modos:
  --once    Procesa todos los PNGs de la carpeta y sale
  --watch   Monitoriza la carpeta en tiempo real (requiere watchdog)

Uso:
    python align_sprites.py
    python align_sprites.py --once
    python align_sprites.py --watch
    python align_sprites.py --input sprites/raw --output sprites/aligned --tile 64
    python align_sprites.py --watch --input sprites/raw --output sprites/aligned
"""

import os
import sys
import time
import argparse
from pathlib import Path
from PIL import Image


DEFAULT_INPUT  = "sprites/raw"
DEFAULT_OUTPUT = "sprites/aligned"
DEFAULT_TILE   = 64


# ── núcleo ────────────────────────────────────────────────────────────────────

def find_bottom_empty_rows(img: Image.Image) -> int:
    """Devuelve cuántas filas completamente transparentes hay al fondo."""
    if img.mode != "RGBA":
        img = img.convert("RGBA")
    width, height = img.size
    pixels = img.load()
    for y in range(height - 1, -1, -1):
        for x in range(width):
            if pixels[x, y][3] > 0:
                return height - 1 - y
    return height  # totalmente vacía


def align_sprite(src_path: Path, dst_path: Path, tile: int) -> int:
    """
    Lee src_path, alinea el sprite al borde inferior del tile y guarda en dst_path.
    Devuelve el número de filas vacías eliminadas del fondo.
    """
    img = Image.open(src_path).convert("RGBA")

    # Redimensionar al tile si hace falta (no distorsiona, solo cabe en tile×tile)
    if img.size != (tile, tile):
        img = img.resize((tile, tile), Image.LANCZOS)

    empty_rows = find_bottom_empty_rows(img)

    if empty_rows == 0:
        # Sin filas vacías abajo: guardar tal cual
        img.save(dst_path, "PNG")
        return 0

    # Desplazar hacia abajo: cortar desde arriba 'empty_rows' píxeles y
    # pegar en un canvas en blanco alineado al fondo
    canvas = Image.new("RGBA", (tile, tile), (0, 0, 0, 0))
    # La región con contenido en el original va desde y=0 hasta y=(tile-empty_rows)
    content = img.crop((0, 0, tile, tile - empty_rows))
    # La pegamos en el canvas empezando en y=empty_rows (queda pegada abajo)
    canvas.paste(content, (0, empty_rows))
    canvas.save(dst_path, "PNG")
    return empty_rows


def process_all(input_dir: Path, output_dir: Path, tile: int) -> None:
    """Procesa todos los PNGs de input_dir."""
    output_dir.mkdir(parents=True, exist_ok=True)
    pngs = sorted(input_dir.glob("*.png"))

    if not pngs:
        print(f"[align] No se encontraron PNGs en {input_dir}")
        return

    print(f"[align] Procesando {len(pngs)} sprites ({tile}×{tile}px) → {output_dir}/")
    modified = 0
    for png in pngs:
        dst = output_dir / png.name
        rows = align_sprite(png, dst, tile)
        if rows:
            modified += 1
    print(f"[align] Listo — {modified}/{len(pngs)} sprites ajustados")


def process_one(src: Path, output_dir: Path, tile: int) -> None:
    """Procesa un único PNG (usado por el watcher)."""
    output_dir.mkdir(parents=True, exist_ok=True)
    dst = output_dir / src.name
    rows = align_sprite(src, dst, tile)
    tag = f"−{rows}px" if rows else "sin cambio"
    print(f"[align] {src.name}  →  {tag}")


# ── watcher ───────────────────────────────────────────────────────────────────

def watch_mode(input_dir: Path, output_dir: Path, tile: int) -> None:
    """Monitoriza input_dir y procesa cada PNG nuevo o modificado."""
    try:
        from watchdog.observers import Observer
        from watchdog.events import FileSystemEventHandler
    except ImportError:
        print("[align] 'watchdog' no está instalado.")
        print("        Instálalo con:  pip install watchdog")
        sys.exit(1)

    class SpriteHandler(FileSystemEventHandler):
        def on_created(self, event):
            if not event.is_directory and event.src_path.endswith(".png"):
                time.sleep(0.1)  # espera a que el archivo esté completamente escrito
                process_one(Path(event.src_path), output_dir, tile)

        def on_modified(self, event):
            if not event.is_directory and event.src_path.endswith(".png"):
                time.sleep(0.1)
                process_one(Path(event.src_path), output_dir, tile)

    input_dir.mkdir(parents=True, exist_ok=True)
    observer = Observer()
    observer.schedule(SpriteHandler(), str(input_dir), recursive=False)
    observer.start()
    print(f"[align] Watching {input_dir}/  (Ctrl+C para detener)")
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
    print("[align] Watcher detenido.")


# ── CLI ───────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Alinea sprites PNG al borde inferior del tile")
    parser.add_argument("--input",  type=str, default=DEFAULT_INPUT,  help="Carpeta con los PNGs originales")
    parser.add_argument("--output", type=str, default=DEFAULT_OUTPUT, help="Carpeta de salida")
    parser.add_argument("--tile",   type=int, default=DEFAULT_TILE,   help="Tamaño del tile en px (default: 64)")
    parser.add_argument("--once",   action="store_true", help="Procesar todos y salir (por defecto)")
    parser.add_argument("--watch",  action="store_true", help="Monitorizar carpeta en tiempo real")
    args = parser.parse_args()

    input_dir  = Path(args.input)
    output_dir = Path(args.output)

    # Verificar Pillow
    try:
        import PIL
    except ImportError:
        print("[align] 'Pillow' no está instalado.")
        print("        Instálalo con:  pip install Pillow")
        sys.exit(1)

    if args.watch:
        # En modo watch, primero procesamos los existentes y luego nos quedamos escuchando
        process_all(input_dir, output_dir, args.tile)
        watch_mode(input_dir, output_dir, args.tile)
    else:
        process_all(input_dir, output_dir, args.tile)


if __name__ == "__main__":
    main()
