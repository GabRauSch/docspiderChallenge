import { Link } from 'react-router-dom'
import styles from '../styles/modal.About.module.css'

type Props = {
    handleClose: ()=>void
}

export const About = ({handleClose}: Props)=>{

    return (
        <div className={styles.modal} onClick={handleClose}>
             <div className={styles.content}>
                <h1>Bem vindo ao gerenciador de documentos da DocSpider!</h1>
                <p>O DocSpider é sua solução completa de gerenciamento de documentos. Com o DocSpider, você pode facilmente fazer upload, gerenciar e organizar seus documentos com facilidade.</p>
                <p>Seja você um pequeno empresário, um freelancer ou uma grande empresa, o DocSpider tem as ferramentas que você precisa para otimizar seu processo de gerenciamento de documentos.</p>
                <p>Utilizando as mais recentes tecnologias e melhores práticas, o DocSpider oferece uma experiência de usuário perfeita em todos os dispositivos, garantindo que você possa acessar seus documentos a qualquer momento e em qualquer lugar.</p>
                <Link to="/documents" className="btn btn-primary">Meus documentos</Link>
            </div>
        </div>
    )
}