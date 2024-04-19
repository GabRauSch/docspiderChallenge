import { actionType } from "../types/action"

export type documentType = {
    id: number,
    title: string,
    description: string,
    path: string,
    mimetype: string,
    createdAt: Date,
    updatedAt: Date
}

export const documentInitialState: documentType = {
    id: 0,
    title: '',
    description: '',
    path: '',
    mimetype: '',
    createdAt: new Date(),
    updatedAt: new Date()
}

export const changeTitle = (payload: any)=>({
    type: 'CHANGE_TITLE',
    payload
})

export const changeDescription = (payload: any)=>({
    type: 'CHANGE_DESCRIPTION',
    payload
})

export const documentReducer = (state: documentType, action: actionType)=>{
    switch(action.type){
        case 'CHANGE_TITLE': return {...state, title: action.payload.title} 
            break;
        case 'CHANGE_DESCRIPTION': return {...state, description: action.payload.description};
            break;
    }
    return state;
}