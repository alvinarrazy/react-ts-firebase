import { ActionT } from './../actions/actionT';
import {USER_CASES} from "../constants";

const initialState = {
}

export const dataReducer = (state = initialState, action: ActionT) => {
    switch (action.type) {
        case USER_CASES.SET_INITIAL: {
            return {
                ...state,
            }
        }
        default:
            return state
    }
}