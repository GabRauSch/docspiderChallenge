import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import styles from '../styles/page.Documents.module.css';
import { Modal } from '../modals/Modal';
import useModal from '../hooks/useModal';
import { Input } from '../components/Input';
import { TextArea } from '../components/TextArea';
import { useNavigate } from 'react-router-dom';
import { createNewDocument, deleteDocument, findDocuments } from '../services/documents';
import useErrorMessage from '../hooks/useErrorMessage';
import { ErrorMessage } from '../components/ErrorMessage';
import { backendAdress } from '../services/apiConfig';
import { Context } from '../context/Context';

export const Documents = () => {
    const {state, dispatch} = useContext(Context);
    const { isOpen, openModal, closeModal } = useModal();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState<File | null>();
    const [selectTypeVisible, setSelectTypeVisible] = useState(false);
    const navigation = useNavigate();
    const {errorMessage, setText} = useErrorMessage();
    const [limit, setLimit] = useState(100);
    const [offset, setOffset] = useState(0);
    const [documents, setDocuments] = useState<any>([]);

    useEffect(()=>{
        handleFindDocuments()
    }, [])


    const handleFindDocuments = async ()=>{
        const data = await findDocuments(limit, offset)
        setDocuments(data);
        dispatch({ type: "SET_DOCUMENTS", payload: {documents: data} });
    };
    const downloadFile = (url: string, name: string, extension: string) => {
        console.log('Downloading file...');
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `${name}.${extension}`);
                document.body.appendChild(link);
                link.click();
            })
            .catch(error => console.error('Error downloading file:', error));
    };

    const openSelectDocument = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.onchange = handleFileSelect as any;
        input.click();
    };

    const handleConfirm = async ()=>{
        if(title.length == 0 || description.length == 0 || !file) {
            setText("O arquivo precisa ter título e descrição", 5000);
            return
        }
        try {
            const data = {
                title, description, file
            }
            const creation = await createNewDocument(data);
            if(!creation){
                return setText("Não foi possível criar o documento.", 5000);
            }
            console.log(creation.data)
            setDocuments([creation.data, ...documents]);
        } catch (error) {
            alert(`Erro ao criar ${error}`)
        }

        setTitle('');
        setDescription('')
        setFile(null);
        closeModal()
    }
    
    const handleDelete = async (id: number)=>{
        const deletion = await deleteDocument(id);
        if(!deletion) {
            setText('Não foi possivel realizar a deleção', 5000);
            return
        }
        dispatch({ type: "DELETE_DOCUMENT", payload: {id} });
        setDocuments(documents.filter((el: any)=>el.id !== id))
    }
    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFile(file)
        }
    };
    
    const handleRedirect = (url: string)=>{
        navigation(url)
    }

    const handleSetTitle = (value: string)=>{
        setTitle(value)
    }
    return (
        <div className="content">
            {errorMessage && (
                <ErrorMessage text={errorMessage} />
            )}
            <div>
                <span>Inicio › </span>
                <span className={styles.activeSpan}> Meus Documentos </span>
            </div>
            <div className={styles.documents}>
                <h2 style={{ display: 'flex' }}>
                    <span>Meus Documentos</span>
                    <div className={styles.createButton} onClick={openModal}><img src="/create.svg" rel="create" /></div>
                </h2>
                <div className={styles.list}>
                    {documents.map((el: any)=>(
                        <div className={styles.documentItem}>
                            <div className={styles.actions}>
                                <div className={styles.actionsImage} id={styles.edit} onClick={()=>{handleRedirect(`/editDocument/${el.id}`)}}>
                                    <img src="/edit.svg" alt="edit" />
                                </div>
                                <div className={styles.actionsImage} id={styles.delete} onClick={()=>{handleDelete(el.id)}}>
                                    <img src="/delete.svg" alt="delete" />
                                </div>
                            </div>
                            <div className={styles.display}>
                                <div className={styles.type}>.{el.path.split('.')[el.path.split('.').length -1].slice(0, 5)}</div>
                                <div className={styles.imageDisplay}>
                                    <img src={el.mimetype == 'image' 
                                        ? `${backendAdress}/documents/${el.mimetype}/${el.path}` 
                                        : "/textDocument.svg"} alt="no resource" />
                                </div>
                                <div className={styles.download} onClick={()=>{downloadFile(`${backendAdress}/documents/${el.mimetype}/${el.path}`, el.title, `${el.path.split('.')[el.path.split('.').length -1]}`)}}>Download</div>
                            </div>
                            <div className={styles.title}>{el ? el.title : 'carregando...'}</div>
                            <div className={styles.description}>{el ? `${el.description.substring(0, 55)}...` : 'carregando...'}</div>
                            <div className={styles.infoBox}>
                                <div>Criado em: {el.createdAt}</div>
                                <div>Arquivo: {el.path}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal title="Novo documento" isOpen={isOpen} onClose={closeModal}>
                <div className={styles.modalSelection}>
                    <Input placeholder='Titulo' value={title} handleType={(value)=>{handleSetTitle(value)}}/>
                    <TextArea placeholder='Descrição' value={description} handleType={(value: string)=>{setDescription(value)}} />
                    <div className={styles.fileSelect}>
                        {selectTypeVisible && (
                            <div className={styles.selectType}>
                                <div onClick={()=>{handleRedirect('/textEditor')}}>Texto</div>
                                <div>Imagem</div>
                            </div>
                        )}
                        <div  className={styles.fileArea}>
                            <div className={styles.uploadImage} onClick={openSelectDocument}>
                                <img src="/upload.svg" rel="upload" />
                            </div>
                            Carregar documento
                        </div>
                        <div  className={styles.fileArea}>
                            <div className={styles.uploadImage} onClick={()=>{setSelectTypeVisible(!selectTypeVisible)}}>
                                <img src="/newFile.svg" rel="upload" />
                            </div>
                            Criar documento
                        </div>
                        <div className={styles.infoBox}>
                            <div>Criado em: 12/01/2023 12:00</div>
                            <div>Arquivo: asdfalkdsjflaksdj.png</div>
                        </div>
                    </div>
                    {file?.name && (
                        <>
                            <h3 className={styles.selectedTitle}>Item selecionado:</h3>
                            <div className={styles.fileArea}>
                                    <div className={styles.selectedFile}>
                                        <img src="document.svg" />
                                    </div>
                                    <div>{file.name}</div>
                                </div>
                            <div className={styles.buttonConfirm} onClick={handleConfirm}>Confirmar</div>
                        </>
                    )}
                </div>
            </Modal>
        </div>
    );
};
