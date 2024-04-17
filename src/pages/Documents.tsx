import React from 'react';
import styles from '../styles/page.Documents.module.css';

export const Documents = () => {
    const downloadFile = () => {
        console.log('carlkfasjdlkfjasdklfj')
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

    return (
        <div className="content">
            <div>
                <span>Inicio › </span>
                <span className={styles.activeSpan}> Meus Documentos </span>
            </div>
            <div className={styles.documents}>
                <h2>Meus Documentos</h2>
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
        </div>
    );
};
