import styles from '../styles/component.ErrorMesssage.module.css'

type Props ={
    text: string
}
export const ErrorMessage = ({text}: Props)=>{
    return(
        <div className={styles.errorMessage}> {text}</div>
    )
}