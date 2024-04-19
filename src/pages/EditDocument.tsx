import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Context } from "../context/Context";
import { documentType } from "../reducers/documentReducer";
import styles from '../styles/page.EditDocument.module.css'
import { Input } from "../components/Input";
import { backendAdress, callPutFormData } from "../services/apiConfig";
import { updateWithFile } from "../services/documents";

export const EditDocument = ()=>{
    const {state, dispatch} = useContext(Context);
    const [document, setDocument] = useState<documentType>();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const {id} = useParams<{id: string}>();
    const [content, setContent] = useState<string>('');
    const [fileUpdated, setFileUpdated] = useState(false)

    useEffect(() => {
        console.log('aloha')
        const foundDocument = state.documentsList.find((el) => el.id === parseInt(id as string));
        if (foundDocument) {
            setTitle(foundDocument.title);
            setDescription(foundDocument.description)
            setDocument(foundDocument);
            if(foundDocument.mimetype == 'text'){
                fetchDocumentContent(foundDocument.path, foundDocument.mimetype);
            }
        }
    }, []);

    const fetchDocumentContent = async (path: string, type: string) => {
        try {
            const response = await fetch(`${backendAdress}/documents/${type}/${path}`);
            if (!response.ok) {
                console.error('Error fetching document content');
            }
            if(type == 'text'){
                const data = await response.text();
    
                // const limitedData = data.slice(0, 5000);
                setContent(data);
            }
        } catch (error) {
            console.error('Error fetching document content:', error);
        }
    };

    // const renderChunks = ()=>{

    // }

    const handleConfirm = async () => {
        console.log('confifms')
        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const file = new File([blob], title+'.txt', {type: 'text/plain'})
        const data = { id, originalPath: document?.path, title, description, file };
        
        const updatedDocument: any = await updateWithFile(data);
        if(!updatedDocument) return 
        
        setDocument(updatedDocument.data);
        dispatch({
            type: 'UPDATE_BY_ID',   
            payload: updatedDocument.data
        })
        console.log(updatedDocument.mimetype)
    };

    return (
        <div className={styles.page}>
            <div className={styles.changeNameArea}>
                <label>
                    <div>Título</div>
                    <Input placeholder="" value={title} handleType={(value)=>{setTitle(value)}}/>
                </label>
                <label>
                    <div>Descrição</div>
                    <Input placeholder="" value={description} handleType={(value)=>{setDescription(value)}}/>
                </label>
                <div className={styles.previewArea}>
                    <h2>Preview</h2>
                    {document?.mimetype == 'text' && 
                        <textarea style={{height: '400px', resize: 'none'}} 
                            className={styles.previewContent} value={content}  
                            onChange={(e)=>{setFileUpdated(true); setContent(e.target.value)}}/>
                    }
                    {document?.mimetype == 'image' && 
                        <img src={`${backendAdress}/documents/${document?.mimetype}/${document?.path}`}></img>
                    }
                </div>
                <div className={styles.buttonConfirm} onClick={handleConfirm}>Confirmar</div>
            </div>
        </div>
    )
}