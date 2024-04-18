import { actionType } from "../types/action";
import { documentType } from "./documentReducer";

export const documentsListInitialState: documentType[] = [];

export const documentsListReducer = (state: documentType[], action: actionType) => {
  switch (action.type) {
    case 'ADD_DOCUMENT':
      return [...state, action.payload.newDocument];
    case 'SET_DOCUMENTS':
      return action.payload.documents;
    case 'DELETE_DOCUMENT':
        return state.filter((el)=>el.id !== action.payload.id);
    default:
      return state;
  }
};
