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
export declare function multi(squares: Square[], point: Point): boolean;
export declare function single(square: Square, point: Point): boolean;
