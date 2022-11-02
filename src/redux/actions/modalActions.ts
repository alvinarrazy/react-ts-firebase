import { IAction } from './actionT';
import { MODAL_CASES } from '../constants'
import store from '../reducers/store';

export const showModal: any = (title: string, children: JSX.Element) => {
    return (dispatch: any) => {
        let action: IAction = {
            type: MODAL_CASES.SHOW_MODAL,
            payload: { title, children },
        }

        return dispatch(action)
    }
}

export const hideModal: any = () => {
    return (dispatch: any) => {
        let action: IAction = {
            type: MODAL_CASES.HIDE_MODAL,
        }

        return dispatch(action)
    }
}