import { IAction } from './../actions/actionT';
import { MODAL_CASES } from "../constants";

export interface IModal

const initialState = {
    isShow: false,
    children: null,
    title: null
}

export const modalReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case MODAL_CASES.SET_INITIAL: {
            return {
                ...initialState,
            }
        }
        case MODAL_CASES.SHOW_MODAL: {
            return {
                isShow: true,
                children: action.payload.children,
                title: action.payload.title
            }
        }
        case MODAL_CASES.HIDE_MODAL: {
            return {
                isShow: false,
                children: null
            }
        }
        default:
            return state
    }
}