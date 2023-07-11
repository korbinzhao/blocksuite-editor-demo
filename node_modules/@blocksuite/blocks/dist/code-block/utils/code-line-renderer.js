import { html } from 'lit';
export const getCodeLineRenderer = highlightOptionsGetter => delta => {
    return html `<affine-code-line
    .delta=${delta}
    .highlightOptionsGetter=${highlightOptionsGetter}
  ></affine-code-line>`;
};
//# sourceMappingURL=code-line-renderer.js.map