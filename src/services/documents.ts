import { callDeleteEndpoint, callGetEndpoint, callPostFormData, callPutFormData } from "./apiConfig"

export const createNewDocument = async (data: any)=>{
    const response = await callPostFormData('/document/file', data);

    return response
}

export const findDocuments = async (limit: number, offset: number)=>{
    const query = `?limit=1000&offset=${offset}`;
    const response = await callGetEndpoint('/document/all', [], query);

    return response.data
}

export const deleteDocument = async (id: number)=>{
    const response = await callDeleteEndpoint('/document', {},[id])
    return response.data
}

export const updateWithFile = async (data: any)=>{
    const response = await callPutFormData('/document/file', data);
    return response
}