import React, { useEffect, useRef } from "react";
import { EditorContainer } from "@blocksuite/editor";
import { Workspace, Text } from "@blocksuite/store";
import { AffineSchemas } from "@blocksuite/blocks/models";
import '@blocksuite/editor/themes/affine.css';

export default function BlockSuiteEditor() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const editorContainer = new EditorContainer();

    const workspace = new Workspace({ id: "demo" });
    const page = workspace.createPage({ id: "page1" });
    workspace.register(AffineSchemas);

    editorContainer.page = page;

    containerRef.current?.appendChild(editorContainer);

    const props = { title: new Text("My New Page") };
    const newBlockId = page.addBlock("affine:page", props);

    return () => {
      containerRef.current?.removeChild(editorContainer);
    };
  }, []);

  return <div className="editor-container" ref={containerRef}></div>;
}
