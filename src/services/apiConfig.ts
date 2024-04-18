import axios from "axios";

export const backendAdress = `http://localhost:3001`;

export const callPostFormData = async (url: string, body: { title: string; description: string, file: File }) => {
    try {
        const finalUrl = `${backendAdress}${url}`;
        
        const fileUri = body.file;
        const fileName = body.file.name.split('/').pop()!;
        const extension = fileName.split('.')[1];

        
        const formData = new FormData();
        formData.append('file', JSON.parse(JSON.stringify({
            name: fileName,
            uri: fileUri,
            type: body.file.type
        }))); 
        formData.append('title', body.title);
        formData.append('description', body.description)

        const response = await axios.post(finalUrl, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });

        return response;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const callPostEndpoint = async (url: string, body: object, queries?: string)=>{
    try {
        const finalUrl = `${backendAdress}${url}`
        const response = await axios.post(finalUrl, body);
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.data) {
                return error.response;
            }
        }
        throw error;
    }
}

export const callGetEndpoint = async (url: string, params: string[] | number[], queries?: string)=>{
    try {
        const paramsString = params.join('/');
        const finalUrl = `${backendAdress}${url}/${paramsString}`
        const response = await axios.get(finalUrl)
        return response
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.data) {
                return error.response;
            }
        }
        throw error;
    }
}

export const callPutEndpoint = async (url: string, body: object, queries?: string)=>{
    try {
        const finalUrl = `${backendAdress}${url}`
        const response = await axios.put(finalUrl, body)
        return response
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.data) {
                return error.response;
            }
        }
        throw error;
    }
}