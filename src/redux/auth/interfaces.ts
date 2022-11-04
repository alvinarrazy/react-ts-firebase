import { ThunkDispatch } from 'redux-thunk';
import { IAsyncProcess, IAction } from './../index';

export interface IAuthState {
    userProfile: IUser | null
    isLoading?: boolean
    loginProcess: IAsyncProcess
    registerProcess: IAsyncProcess
    logoutProcess: IAsyncProcess
}

export interface IUser {
    username: string,
    uid: string,
    email: string
}

export interface LoginBody {
    email: string,
    password: string
}

export interface RegisterBody {
    email: string,
    password: string,
    username: string
}

export type AuthDispatch = ThunkDispatch<IAuthState, any, IAction<IUser>>