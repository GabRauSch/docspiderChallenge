import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import styles from '../styles/page.TextEditor.module.css'

interface CustomModule {
    toolbar: boolean | string[][];
}

interface QuillModules {
    getModule(name: 'toolbar'): CustomModule | null;
}

const TextEditor: React.FC = () => {
    const [value, setValue] = useState<string>('');

    const handleChange = (content: string, delta: any, source: string, editor: any) => {
        setValue(content);
    };
    
    const handleSave = () => {
        const blob = new Blob([value], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'text_content.txt');
        document.body.appendChild(link);
        link.click();
    };


    return (
        <div className={styles.editor}>
            <ReactQuill
                value={value}
                onChange={handleChange}
                theme="snow"
                modules={{ toolbar: true }}
                placeholder="Escreva algo"
            />
            <div className={styles.save} onClick={handleSave}>Salvar como texto</div>
        </div>
    );
};

export default TextEditor;
