import useAside from '../hooks/useAside';
import styles from '../styles/component.Header.module.css';

type Props = {
    menuFunction: ()=>void
}

export const Header = ({menuFunction} : Props)=>{
    const {isOpen, toggleAside} = useAside();

    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <div className={styles.menuIcon} onClick={menuFunction}>
                    <img src="/menu.svg" alt="menu" />
                </div>
            </div>
            <div className={styles.imageArea}>
                <img src="/docspider.png" alt="logo" />
            </div>
        </header>
    )
}