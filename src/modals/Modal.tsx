import { ReactElement } from 'react'
import styles from '../styles/modal.NewDocument.module.css'

type Props = {
    isOpen: boolean,
    onClose: ()=>void,
    title: string,
    children: ReactElement
}
export const Modal = ({isOpen, onClose, title, children}: Props)=>{
    return (
        <>
            {isOpen && (
                <div className={styles.modal} >
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <h2 className={styles.modalTitle}> {title} </h2>
                            <div className={styles.close} onClick={onClose}>
                                <img src="/close.svg" alt="close" />
                            </div>
                        </div>
                        <div className={styles.modalBody}>
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}