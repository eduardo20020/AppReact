#!/usr/bin/env python3
"""
remove_background.py

Script para eliminar el fondo de una imagen usando rembg.
Instalación previa: pip install rembg pillow
"""

import sys
from pathlib import Path
from rembg import remove
from PIL import Image

def remove_background(input_path: Path, output_path: Path):
    """
    Carga la imagen de input_path, elimina el fondo y guarda el resultado en output_path.
    """
    # Abrir imagen con Pillow
    with Image.open(input_path) as img:
        # Aplicar rembg para eliminar el fondo
        result = remove(img)
        # Asegurarse de guardar en formato PNG para conservar transparencia
        result.save(output_path, format="PNG")
    print(f"Procesada: {input_path.name} → {output_path.name}")

def main():
    if len(sys.argv) != 3:
        print("Uso: python remove_background.py ruta/imagen_entrada ruta/imagen_salida.png")
        sys.exit(1)

    in_path = Path(sys.argv[1])
    out_path = Path(sys.argv[2])

    if not in_path.exists():
        print(f"Error: no existe el archivo {in_path}")
        sys.exit(1)

    # Ejecutar
    remove_background(in_path, out_path)

if __name__ == "__main__":
    main()
