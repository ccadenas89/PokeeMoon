"""
download_sprites.py
-------------------
Descarga los sprites oficiales de Pokémon desde PokeAPI GitHub.
URL base: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png

Uso:
    python download_sprites.py
    python download_sprites.py --start 1 --end 151
    python download_sprites.py --start 1 --end 898 --workers 10 --output sprites/raw
"""

import os
import time
import argparse
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed

BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png"
DEFAULT_OUTPUT = "sprites/raw"
DEFAULT_START = 1
DEFAULT_END = 898
DEFAULT_WORKERS = 8


def download_one(pokemon_id: int, output_dir: str) -> tuple[int, bool, str]:
    url = BASE_URL.format(id=pokemon_id)
    dest = os.path.join(output_dir, f"{pokemon_id}.png")

    if os.path.exists(dest):
        return pokemon_id, True, "ya existe"

    try:
        urllib.request.urlretrieve(url, dest)
        return pokemon_id, True, "ok"
    except Exception as e:
        return pokemon_id, False, str(e)


def main():
    parser = argparse.ArgumentParser(description="Descarga sprites oficiales de Pokémon")
    parser.add_argument("--start",   type=int, default=DEFAULT_START,   help="ID inicial (default: 1)")
    parser.add_argument("--end",     type=int, default=DEFAULT_END,     help="ID final   (default: 898)")
    parser.add_argument("--output",  type=str, default=DEFAULT_OUTPUT,  help="Carpeta de destino")
    parser.add_argument("--workers", type=int, default=DEFAULT_WORKERS, help="Descargas en paralelo")
    args = parser.parse_args()

    os.makedirs(args.output, exist_ok=True)
    ids = list(range(args.start, args.end + 1))
    total = len(ids)
    ok = 0
    fail = 0

    print(f"Descargando {total} sprites → {args.output}/")
    print(f"Workers: {args.workers}\n")

    t0 = time.time()

    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        futures = {pool.submit(download_one, pid, args.output): pid for pid in ids}
        for i, future in enumerate(as_completed(futures), 1):
            pid, success, msg = future.result()
            if success:
                ok += 1
            else:
                fail += 1
                print(f"  [ERROR] #{pid}: {msg}")
            if i % 50 == 0 or i == total:
                pct = i / total * 100
                bar = "█" * int(pct / 5) + "░" * (20 - int(pct / 5))
                print(f"\r  [{bar}] {i}/{total}  ({pct:.0f}%)", end="", flush=True)

    elapsed = time.time() - t0
    print(f"\n\nListo en {elapsed:.1f}s  —  {ok} descargados, {fail} errores")


if __name__ == "__main__":
    main()
