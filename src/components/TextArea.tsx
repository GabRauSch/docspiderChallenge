import styles from '../styles/component.Input.module.css'

type Props = {
    placeholder: string,
    value: string,
    handleType: (value: string)=>void
}

export const TextArea = ({placeholder, value, handleType}: Props)=>{
    return (
        <div className={styles.textArea}>
            <textarea placeholder={placeholder} style={{resize: 'none'}} onChange={(e: any)=>{handleType(e.target.value)}}>{value}</textarea>
        </div>
    )
}