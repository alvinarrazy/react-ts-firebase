import { IModal } from './interfaces';
import { IAction } from '..';
import cases from './cases'

export const showModal: any = (modal: IModal) => {
    return (dispatch: any) => {
        let action: IAction<IModal> = {
            type: cases.SHOW_MODAL,
            payload: modal,
        }

        return dispatch(action)
    }
}

export const hideModal: any = () => {
    return (dispatch: any) => {
        let action: IAction<IModal> = {
            type: cases.HIDE_MODAL,
        }

        return dispatch(action)
    }
}