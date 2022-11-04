import { ThunkDispatch } from 'redux-thunk';
import { IAction } from '..';

export interface IModalState {
    isShow: boolean,
    modal: IModal
}

export interface IModal {
    children?: React.ReactNode,
    title?: string
}

export type ModalDispatch = ThunkDispatch<IModalState, any, IAction<IModal>>