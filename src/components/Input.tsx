import styles from '../styles/component.Input.module.css'

type Props = {
    placeholder: string,
    value: string,
    handleType: (e: any)=>void
}
export const Input = ({placeholder, value, handleType}: Props)=>{
    return (
        <div className={styles.input}>
            <input type="text" placeholder={placeholder} value={value} onChange={(e)=>{handleType(e.target.value)}}/>
        </div>
    )
}