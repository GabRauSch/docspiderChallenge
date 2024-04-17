import styles from '../styles/component.Header.module.css';

export const Header = ()=>{
    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <div className={styles.menuIcon}>
                    <img src="/menu.svg" alt="menu" />
                </div>
            </div>
            <div className={styles.imageArea}>
                <img src="/docspider.png" alt="logo" />
            </div>
        </header>
    )
}