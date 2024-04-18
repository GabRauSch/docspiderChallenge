import { useNavigate } from 'react-router-dom';
import styles from '../styles/component.Aside.module.css'
import { Modal } from '../modals/Modal';
import { About } from '../modals/About';
import useAbout from '../hooks/useAbout';

export const Aside = ()=>{
    const navigation = useNavigate();
    const {isOpen, openAbout, closeAbout} = useAbout();

    const handleOpenModal = ()=>{
        openAbout()
    }

    const handleRedirect = (url: string)=>{
        navigation(url)
    }

    return (
        <aside className={styles.aside}>
            {isOpen && (
                <About handleClose={closeAbout} />
            )}
            <div className={styles.asideItem} onClick={()=>{handleRedirect('/')}}>
                <div>Inicio</div>
                <div className={styles.imageArea} >
                    <img src="/home.svg" alt="" />
                </div>
            </div>
            <div className={styles.asideItem} onClick={()=>{handleRedirect('/documents')}}>
                <div>Meus Documentos</div>
                <div className={styles.imageArea}>
                    <img src="/document.svg" alt="home" />
                </div>
            </div>
            <div className={styles.asideItem} onClick={handleOpenModal}>
                <div>Sobre</div>
                <div className={styles.imageArea}>
                    <img src="/about.svg" alt="home" />
                </div>
            </div>
        </aside>
    )
}