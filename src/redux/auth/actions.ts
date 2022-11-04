import { LoginBody, RegisterBody, IUser } from './interfaces';
import { IAction } from '..';
import cases from "./cases"
import authServices from './services';
import { Dispatch } from 'redux';

export const login = (data: LoginBody) => {
    return async (dispatch: Dispatch<IAction<IUser>>) => {
        const { REQUEST, SUCCEED, FAILED } = cases.LOGIN
        let action: IAction<IUser> = {
            type: REQUEST,
            message: "Request login",
        }

        dispatch(action)
        try {
            let { error, result } = await authServices.login(data)

            if (error) throw error

            action = {
                ...action,
                type: SUCCEED,
                payload: result,
            }

            localStorage.setItem("userProfile", JSON.stringify(result))

            console.log(action.message)
            return dispatch(action)

        } catch (error) {
            console.log(error)

            action = {
                type: FAILED,
                message: String(error)
            }
            return dispatch(action)
        }
    }
}

export const register = (data: RegisterBody) => {
    return async (dispatch: Dispatch<IAction<IUser>>) => {
        const { REQUEST, SUCCEED, FAILED } = cases.REGISTER
        let action: IAction<IUser> = {
            type: REQUEST,
            message: "Request register",
        }

        dispatch(action)
        try {
            let { error, result } = await authServices.register(data)

            if (error) throw error

            action = {
                ...action,
                type: SUCCEED,
                message: "Register succeed"
            }

            console.log(action.message)
            return dispatch(action)

        } catch (error) {
            console.log(error)

            action = {
                type: FAILED,
                message: String(error)
            }
            dispatch(action)
        }
    }
}

export const logout = () => {
    return async (dispatch: Dispatch<IAction<IUser>>) => {
        const { REQUEST, SUCCEED, FAILED } = cases.LOGOUT
        let action: IAction<IUser> = {
            type: REQUEST,
            message: "Request logout",
        }

        dispatch(action)
        try {
            let { error, result } = await authServices.logout()

            if (error) throw error

            action = {
                ...action,
                type: SUCCEED,
                message: "Logout succeed"
            }

            localStorage.removeItem("userProfile")

            console.log(action.message)
            return dispatch(action)

        } catch (error) {
            console.log(error)

            action = {
                type: FAILED,
                message: String(error)
            }
            dispatch(action)
        }
    }
}