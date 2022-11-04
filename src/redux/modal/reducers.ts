import { IModal, IModalState } from './interfaces';
import { IAction } from '..';
import cases from "./cases";

const initialState: IModalState = {
    isShow: false,
    modal: {}
}

export const modalReducer = (state = initialState, action: IAction<IModal> = { type: '' }) => {
    switch (action.type) {
        case cases.SET_INITIAL: {
            return {
                ...initialState,
            }
        }
        case cases.SHOW_MODAL: {
            return {
                isShow: true,
                modal: action.payload ?? {}
            }
        }
        case cases.HIDE_MODAL: {
            return {
                isShow: false,
                modal: {}
            }
        }
        default:
            return state
    }
}