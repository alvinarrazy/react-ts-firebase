import ActionI from "../actions/actionI";
import types from "../constants";

const initialState = {
}

export const dataReducer = (state = initialState, action: ActionI) => {
    switch (action.type) {
        case types.SET_INITIAL: {
            return {
                ...state,
            }
        }
        default:
            return state
    }
}