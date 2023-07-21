import React, { ReactDOM } from "react";
import BlockSuiteEditor from "./block-suite-editor";

import { createRoot } from 'react-dom/client';


const container = document.getElementById('container');
const root = container && createRoot(container);
root?.render(<BlockSuiteEditor />);