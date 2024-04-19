import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import styles from '../styles/page.TextEditor.module.css'
import { Input } from '../components/Input';
import { createNewDocument } from '../services/documents';

interface CustomModule {
    toolbar: boolean | string[][];
}

interface QuillModules {
    getModule(name: 'toolbar'): CustomModule | null;
}

const TextEditor: React.FC = () => {
    const [value, setValue] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleChange = (content: string, delta: any, source: string, editor: any) => {
        setValue(content);
    };
    
    const handleSave = () => {
        console.log(title)
        const blob = new Blob([value])
        const file = new File([blob], title, {type: 'text/plain'})
        const data = {title, description, file};
        console.log(data)
        createNewDocument(data)
    };

    const handleChangeTitle = (value: string)=>{
        setTitle(value);
        console.log(value, title)
    }

    return (
        <div className={styles.editor}>
            <label>
                <div>Título</div>
                <Input placeholder="" value={title} handleType={(value)=>{handleChangeTitle(value)}}/>
            </label>
            <label>
                <div>Descrição</div>
                <Input placeholder="" value={description} handleType={(value)=>{setDescription(value)}}/>
            </label>
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
