import { callPostFormData } from "./apiConfig"

export const createNewDocument = (data: any)=>{
    callPostFormData('/document/file', data)
}