import { IAction } from './../actions/actionT';
import { DATA_CASES } from "../constants";

export interface DataState {
    dataState: {
        data: any
    }
}

const initialState = {
    data: null
}

export const dataReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case DATA_CASES.SET_INITIAL: {
            return {
                ...state,
                data: action.payload.data
            }
        }
        case DATA_CASES.CHANGE_DATA: {
            return {
                ...state,
                data: action.payload
            }
        }
        default:
            return state
    }
}