// src/components/CodeEditor.js
import React, { useEffect, useRef } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css'; // Choose a theme
import 'codemirror/mode/javascript/javascript.js';

const CodeEditor = ({ code, onChange }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = CodeMirror(editorRef.current, {
      value: code,
      mode: 'javascript',
      theme: 'material',
      lineNumbers: true,
      autofocus: true,
    });

  
   
  }, [code, onChange]);

  return <div ref={editorRef}></div>;
};

export default CodeEditor;
