import { ActionT } from './../actions/actionT';
import {MODAL_CASES} from "../constants";

const initialState = {
    isShow: false,
    children: null,
    title: null
}

export const modalReducer = (state = initialState, action: ActionT) => {
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