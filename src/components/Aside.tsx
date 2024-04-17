import styles from '../styles/component.Aside.module.css'

export const Aside = ()=>{

    const handleOpenModal = ()=>{
        
    }
    return (
        <aside className={styles.aside}>
            <div className={styles.asideItem}>
                <div>Inicio</div>
                <div className={styles.imageArea}>
                    <img src="/home.svg" alt="" />
                </div>
            </div>
            <div className={styles.asideItem}>
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