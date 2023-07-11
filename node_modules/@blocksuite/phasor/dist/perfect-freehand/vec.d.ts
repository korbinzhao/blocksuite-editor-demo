/**
 * Negate a vector.
 * @param A
 * @internal
 */
export declare function neg(A: number[]): number[];
/**
 * Add vectors.
 * @param A
 * @param B
 * @internal
 */
export declare function add(A: number[], B: number[]): number[];
/**
 * Subtract vectors.
 * @param A
 * @param B
 * @internal
 */
export declare function sub(A: number[], B: number[]): number[];
/**
 * Vector multiplication by scalar
 * @param A
 * @param n
 * @internal
 */
export declare function mul(A: number[], n: number): number[];
/**
 * Vector division by scalar.
 * @param A
 * @param n
 * @internal
 */
export declare function div(A: number[], n: number): number[];
/**
 * Perpendicular rotation of a vector A
 * @param A
 * @internal
 */
export declare function per(A: number[]): number[];
/**
 * Dot product
 * @param A
 * @param B
 * @internal
 */
export declare function dpr(A: number[], B: number[]): number;
/**
 * Get whether two vectors are equal.
 * @param A
 * @param B
 * @internal
 */
export declare function isEqual(A: number[], B: number[]): boolean;
/**
 * Length of the vector
 * @param A
 * @internal
 */
export declare function len(A: number[]): number;
/**
 * Length of the vector squared
 * @param A
 * @internal
 */
export declare function len2(A: number[]): number;
/**
 * Dist length from A to B squared.
 * @param A
 * @param B
 * @internal
 */
export declare function dist2(A: number[], B: number[]): number;
/**
 * Get normalized / unit vector.
 * @param A
 * @internal
 */
export declare function uni(A: number[]): number[];
/**
 * Dist length from A to B
 * @param A
 * @param B
 * @internal
 */
export declare function dist(A: number[], B: number[]): number;
/**
 * Mean between two vectors or mid vector between two vectors
 * @param A
 * @param B
 * @internal
 */
export declare function med(A: number[], B: number[]): number[];
/**
 * Rotate a vector around another vector by r (radians)
 * @param A vector
 * @param C center
 * @param r rotation in radians
 * @internal
 */
export declare function rotAround(A: number[], C: number[], r: number): number[];
/**
 * Interpolate vector A to B with a scalar t
 * @param A
 * @param B
 * @param t scalar
 * @internal
 */
export declare function lrp(A: number[], B: number[], t: number): number[];
/**
 * Project a point A in the direction B by a scalar c
 * @param A
 * @param B
 * @param c
 * @internal
 */
export declare function prj(A: number[], B: number[], c: number): number[];
//# sourceMappingURL=vec.d.ts.map