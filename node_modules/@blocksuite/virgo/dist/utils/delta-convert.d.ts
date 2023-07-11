import type { DeltaInsert } from '../types.js';
import type { BaseTextAttributes } from './base-attributes.js';
export declare function transformDelta<TextAttributes extends BaseTextAttributes>(delta: DeltaInsert<TextAttributes>): (DeltaInsert<TextAttributes> | '\n')[];
/**
 * convert a delta insert array to chunks, each chunk is a line
 */
export declare function deltaInsertsToChunks<TextAttributes extends BaseTextAttributes>(delta: DeltaInsert<TextAttributes>[]): DeltaInsert<TextAttributes>[][];
//# sourceMappingURL=delta-convert.d.ts.map