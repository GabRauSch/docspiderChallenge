import React, { ChangeEvent, useState } from 'react';
import styles from '../styles/page.Documents.module.css';
import { Modal } from '../modals/Modal';
import useModal from '../hooks/useModal';
import { Input } from '../components/Input';
import { TextArea } from '../components/TextArea';
import { useNavigate } from 'react-router-dom';

export const Documents = () => {
    const { isOpen, openModal, closeModal } = useModal();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState<File | null>();
    const [selectTypeVisible, setSelectTypeVisible] = useState(false);
    const navigation = useNavigate();

    const downloadFile = () => {
        console.log('Downloading file...');
        fetch('http://localhost:3001/documents/text/1ee0fb8b1053f7bf318c9be8368a2e7b07fc0b58.txt')
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'document.txt');
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

    const handleConfirm = ()=>{
        setFile(null);
        closeModal()
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
                    <div className={styles.documentItem}>
                        <div className={styles.display}>
                            <div className={styles.type}>.txt</div>
                            <div className={styles.imageDisplay}>
                                <img src="/textDocument.svg" alt="" />
                            </div>
                            <div className={styles.download} onClick={downloadFile}>Download</div>
                        </div>
                        <div className={styles.title}>Titulo do documento...</div>
                        <div className={styles.description}>Descição do documento pode ser bem extensa...</div>
                        <div className={styles.infoBox}>
                            <div>Criado em: 12/01/2023 12:00</div>
                            <div>Arquivo: asdfalkdsjflaksdj.png</div>
                        </div>
                    </div>
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
