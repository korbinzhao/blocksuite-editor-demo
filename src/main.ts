import "@blocksuite/editor";
import "@blocksuite/editor/themes/affine.css";

const editor = document.createElement("simple-affine-editor");
document.body.appendChild(editor);

// fetch(
//   "https://raw.githubusercontent.com/toeverything/blocksuite/master/README.md"
// ).then(async (res) => {
//   editor.setTitle("BlockSuite Playground");
//   const text = await res.text();
//   editor.importMarkdown(text);
// });
