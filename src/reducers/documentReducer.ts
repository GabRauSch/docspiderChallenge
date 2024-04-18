import { actionType } from "../types/action"

export type documentType = {
    title: string,
    description: string,
    path: string
}

export const documentInitialState: documentType = {
    title: '',
    description: '',
    path: ''
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