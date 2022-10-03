import { ActionT } from './actionT';
import { USER_CASES } from "../constants"

export const resetDataState = () => {
    return (dispatch: any) => {
        dispatch({
            type: USER_CASES.RESET_DATA_STATE
        })
    }
}

export const addNewData = (newData: string) => {
    const { REQUEST, SUCCEED, FAILED } = USER_CASES.ADD_DATA
    return async (dispatch: any) => {
        let action: ActionT = {
            type: REQUEST,
            message: null,
            payload: null
        }
        dispatch(action)

        try {
            //...service

            return dispatch(action)
        } catch (error) {
            // console.log('Error Line 34 userAction:', error)
            // action = {
            //     ...action,
            //     type: FAILED,
            //     message: error
            // }

            // return dispatch(action)
        }

    }
}