import { actionType } from "../types/action";
import { documentType } from "./documentReducer";

export const documentInitialState: documentType[] = [];

export const addDocument = (payload: any) => ({
    type: 'ADD_DOCUMENT',
    payload
});

export const setDocuments = (payload: any)=>({
    type: 'SET_DOCUMENTS',
    payload
})

export const documentReducer = (state: documentType[], action: actionType) => {
  switch (action.type) {
    case 'ADD_DOCUMENT':
      return [...state, action.payload.newDocument];
    case 'SET_DOCUMENTS':
      return action.payload.documents;
    default:
      return state;
  }
};
