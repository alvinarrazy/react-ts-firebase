import { ActionT } from './actionT';
import { USER_CASES } from "../constants"
import userService from '../services/user';


export const login: any = (email: string, password: string) => {
    return async (dispatch: any) => {
        const { REQUEST, SUCCEED, FAILED } = USER_CASES.LOGIN
        let action: ActionT = {
            type: REQUEST,
            message: null,
            payload: null
        }

        dispatch(action)
        try {
            let { error, result } = await userService.login(email, password)

            if (error) throw error

            action = {
                ...action,
                type: SUCCEED,
                payload: result
            }

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
            message: null,
            payload: null
        }

        dispatch(action)
        try {
            let { error, result } = await userService.register(email, password, username)

            if (error) throw error

            action = {
                ...action,
                type: SUCCEED,
                payload: result
            }

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