import {createContext, useReducer, ReactNode} from 'react';
import { actionType } from '../types/action';
import { documentInitialState, documentReducer, documentType } from '../reducers/documentReducer';
import { documentsListInitialState, documentsListReducer } from '../reducers/documentsListReducer';

type initialStateType = {
    document: documentType,
    documentsList: documentType[]
}

type contextType = {
    state: initialStateType,
    dispatch: React.Dispatch<any>
}

const initialState = {
    document: documentInitialState,
    documentsList: documentsListInitialState
}

export const Context = createContext<contextType>({
    state: initialState,
    dispatch: ()=>null
})

const mainReducer = (state: initialStateType, action: actionType)=>({
    document: documentReducer(state.document, action),
    documentsList: documentsListReducer(state.documentsList, action)
})

export const ContextProvider: React.FC<{children: ReactNode }> = ({children})=>{
    const [state, dispatch] = useReducer(mainReducer, initialState);
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
} 