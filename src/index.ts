export interface Square {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  minZ?: number;
  maxZ?: number;
}

export interface Point {
  x: number;
  y: number;
  z?: number;
}

export function multi(squares: Square[], point: Point): boolean {
  for (const square of squares) {
    if (point.x >= square.minX &&
        point.x <= square.maxX &&
        point.y >= square.minY &&
        point.y <= square.maxY) {
      if (point.z !== undefined &&
          square.minZ !== undefined &&
          square.maxZ !== undefined) {
        return point.z >= square.minZ && point.z <= square.maxZ;
      }
      return true;
    }
  }
  return false;
}

export function single(square: Square, point: Point): boolean {
  return multi([square], point);
}
