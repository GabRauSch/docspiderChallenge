import {createContext, useReducer, ReactNode} from 'react';
import { actionType } from '../types/action';
import { documentInitialState, documentReducer, documentType } from '../reducers/documentReducer';

type initialStateType = {
    document: documentType
}

type contextType = {
    state: initialStateType,
    dispatch: React.Dispatch<any>
}

const initialState = {
    document: documentInitialState
}

export const Context = createContext<contextType>({
    state: initialState,
    dispatch: ()=>null
})

const mainReducer = (state: initialStateType, action: actionType)=>({
    document: documentReducer(state.document, action)
})

export const ContextProvider: React.FC<{children: ReactNode }> = ({children})=>{
    const [state, dispatch] = useReducer(mainReducer, initialState);
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
} 