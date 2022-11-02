import { IAction } from './actionT';
import { DATA_CASES } from "../constants"
import dataService from '../services/data';

export const resetDataState = () => {
    return (dispatch: any) => {
        dispatch({
            type: DATA_CASES.RESET_DATA_STATE
        })
    }
}

export interface DataInterface {
    name: string,
    desc: string
}

export const addNewData = (newData: DataInterface) => {
    const { REQUEST, SUCCEED, FAILED } = DATA_CASES.ADD_DATA
    return async (dispatch: any) => {
        let action: IAction = {
            type: REQUEST,
        }
        dispatch(action)

        try {
            let { result, error } = await dataService.addData(newData)

            if (error) throw error

            action = {
                type: DATA_CASES.CHANGE_DATA,
                message: "updating data",
                payload: result
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

export const getData = () => {
    const { REQUEST, SUCCEED, FAILED } = DATA_CASES.ADD_DATA
    return async (dispatch: any) => {
        let action: IAction = {
            type: REQUEST,
        }
        dispatch(action)

        try {
            let { result, error } = await dataService.getData()

            if (error) throw error

            action = {
                type: DATA_CASES.CHANGE_DATA,
                message: "updating data",
                payload: result
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