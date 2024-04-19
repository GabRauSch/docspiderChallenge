import styles from '../styles/page.Home.module.css';
import {Link} from 'react-router-dom'

export const Home = ()=>{
    return (
        <div className={styles.content}>
            <h1>Salve seus documentos de forma fácil com a DocSpider!</h1>
            <div className={styles.options}>
                <div className={styles.optionItem}>
                    Seus textos!
                    <div>
                        <img src="/text.svg" alt='texto'></img>
                    </div>
                </div>
                <div className={styles.optionItem}>
                    Suas imagens!
                    <div>
                        <img src="/images.svg" alt='texto'></img>
                    </div>
                </div>
                <div className={styles.optionItem}>
                    Suas Músicas!
                    <div>
                        <img src="/musics.svg" alt='texto'></img>
                    </div>
                </div>
                <div className={styles.optionItem}>
                    Seus PDFs!
                    <div>
                        <img src="/pdf.svg" alt='texto'></img>
                    </div>
                </div>
            </div>
            <Link to="/documents" className={[styles.btn,  styles.btnPrimary].join('')}>Começar Agora!</Link>
        </div>
    )
}