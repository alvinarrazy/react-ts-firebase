import { ActionT } from './actionT';
import { USER_CASES } from "../constants"
import userService from '../services/user';


export const login: any = (email: string, password: string) => {
    return async (dispatch: any) => {
        const { REQUEST, SUCCEED, FAILED } = USER_CASES.LOGIN
        let action: ActionT = {
            type: REQUEST,
            message: "Request login",
            payload: null,
        }

        dispatch(action)
        try {
            let { error, result } = await userService.login(email, password)

            if (error) throw error

            action = {
                ...action,
                type: SUCCEED,
                payload: result,
                message: "Login succeed"
            }

            localStorage.setItem("userProfile", JSON.stringify(result))

            console.log(action.message)
            return dispatch(action)

        } catch (error) {
            console.log(error)

            action = {
                ...action,
                type: FAILED,
                message: String(error)
            }
            dispatch(action)
        }
    }
}

export const register = (email: string, password: string, username: string) => {
    return async (dispatch: any) => {
        const { REQUEST, SUCCEED, FAILED } = USER_CASES.REGISTER
        let action: ActionT = {
            type: REQUEST,
            message: "Request register",
            payload: null
        }

        dispatch(action)
        try {
            let { error, result } = await userService.register(email, password, username)

            if (error) throw error

            action = {
                ...action,
                type: SUCCEED,
                payload: result,
                message: "Register succeed"
            }

            console.log(action.message)
            return dispatch(action)

        } catch (error) {
            console.log(error)

            action = {
                ...action,
                type: FAILED,
                message: String(error)
            }
            dispatch(action)
        }
    }
}