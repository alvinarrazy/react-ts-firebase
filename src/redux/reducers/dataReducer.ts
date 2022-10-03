import { ActionT } from './../actions/actionT';
import {DATA_CASES} from "../constants";

const initialState = {
}

export const dataReducer = (state = initialState, action: ActionT) => {
    switch (action.type) {
        case DATA_CASES.SET_INITIAL: {
            return {
                ...state,
            }
        }
        default:
            return state
    }
}