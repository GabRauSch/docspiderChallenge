import { useParams } from "react-router-dom"

export const EditDocument = ()=>{
    const {id } = useParams();


    return (
        <div>Editar documento {id}</div>
    )
}