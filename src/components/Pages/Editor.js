import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Form from 'react-bootstrap/Form';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

const Editor = () => {
    const code = `app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
      
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});`

    return (
        <>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {code}
            </SyntaxHighlighter>
            {/* <Form className="editor-form">
                <Form.Control className="editor-form" as="textarea" placeholder="Type your code here..." />
            </Form> */}
        </>
    );
}

export default Editor;
