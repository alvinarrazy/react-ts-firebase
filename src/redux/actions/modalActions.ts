import { ActionT } from './actionT';
import { MODAL_CASES } from '../constants'
import store from '../reducers/store';

export const showModal: any = (title: string, children: JSX.Element) => {
    return (dispatch: any) => {
        let action: ActionT = {
            type: MODAL_CASES.SHOW_MODAL,
            payload: { title, children },
            message: null
        }

        return dispatch(action)
    }
}

export const hideModal: any = () => {
    return (dispatch: any) => {
        let action: ActionT = {
            type: MODAL_CASES.HIDE_MODAL,
            payload: null,
            message: null
        }

        return dispatch(action)
    }
}