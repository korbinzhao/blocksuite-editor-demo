import * as Y from 'yjs';
export interface JSXElement {
    $$typeof: symbol | 0xea71357;
    type: string;
    props: {
        'prop:text'?: string | JSXElement;
    } & Record<string, unknown>;
    children?: null | (JSXElement | string | number)[];
}
export declare function yDocToJSXNode(serializedDoc: Record<string, unknown>, nodeId: string): JSXElement;
export declare function serializeYDoc(doc: Y.Doc): Record<string, unknown>;
//# sourceMappingURL=jsx.d.ts.map