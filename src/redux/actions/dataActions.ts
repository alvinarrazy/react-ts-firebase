import { ActionT } from './actionT';
import { DATA_CASES } from "../constants"

export const resetDataState = () => {
    return (dispatch: any) => {
        dispatch({
            type: DATA_CASES.RESET_DATA_STATE
        })
    }
}

export const addNewData = (newData: string) => {
    const { REQUEST, SUCCEED, FAILED } = DATA_CASES.ADD_DATA
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