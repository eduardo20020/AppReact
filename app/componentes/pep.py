#!/usr/bin/env python3
import cv2
import numpy as np
import argparse

def remove_background(input_path, output_path, threshold=200):
    # Carga la imagen (preserva alfa si existe)
    image = cv2.imread(input_path, cv2.IMREAD_UNCHANGED)
    if image is None:
        print(f"Error al cargar la imagen {input_path}")
        return

    # Separa BGR (o BGR+A si tiene alfa)
    if image.shape[2] == 4:
        bgr = image[:, :, :3]
    else:
        bgr = image

    # Mascara de fondo: píxeles claros (blanco/near-blanco)
    lower = np.array([threshold, threshold, threshold], dtype=np.uint8)
    upper = np.array([255, 255, 255], dtype=np.uint8)
    bg_mask = cv2.inRange(bgr, lower, upper)

    # Invertir para obtener primer plano
    fg_mask = cv2.bitwise_not(bg_mask)

    # Refinar máscara con apertura morfológica
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
    fg_mask = cv2.morphologyEx(fg_mask, cv2.MORPH_OPEN, kernel, iterations=1)

    # Construir canal alfa a partir de la máscara
    b, g, r = cv2.split(bgr)
    alpha = fg_mask
    result = cv2.merge([b, g, r, alpha])

    # Guardar resultado como PNG con transparencia
    cv2.imwrite(output_path, result)
    print(f"Guardado: {output_path}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Eliminar fondo claro de una imagen PNG y dejar transparencia"
    )
    parser.add_argument("input", help="Ruta de la imagen de entrada (PNG)")
    parser.add_argument("output", help="Ruta de la imagen de salida (PNG)")
    parser.add_argument(
        "--threshold",
        type=int,
        default=200,
        help="Umbral (0–255) para considerar fondo; valores ≥ umbral se vuelven transparentes",
    )
    args = parser.parse_args()
    remove_background(args.input, args.output, args.threshold)
