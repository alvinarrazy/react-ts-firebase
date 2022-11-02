import { IAction } from './../actions/actionT';
import { USER_CASES } from "../constants";

export interface UserState {
    userState: {
        userProfile?: any,
        loginProcess: {
            request: boolean,
            succeed: boolean,
            failed: boolean,
            message?: string | null
        }
    }
}

const initialState = {
    userProfile: null,
    loginProcess: {
        request: false,
        succeed: false,
        failed: false,
        message: null
    },
    logoutProcess: {
        request: false,
        failed: false,
        message: null
    }
}

export const userReducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case USER_CASES.SET_INITIAL: {
            return {
                ...state,
                userProfile: action.payload.userProfile
            }
        }
        case USER_CASES.LOGIN.REQUEST: {
            return {
                ...state,
                userProfile: null,
                loginProcess: {
                    request: true,
                    succeed: false,
                    failed: false,
                    message: action.message
                }
            }
        }
        case USER_CASES.LOGIN.SUCCEED: {
            return {
                ...state,
                userProfile: action.payload,
                loginProcess: {
                    request: false,
                    succeed: true,
                    failed: false,
                    message: action.message
                },
            }
        }
        case USER_CASES.LOGIN.FAILED: {
            return {
                ...state,
                userProfile: null,
                loginProcess: {
                    request: false,
                    succeed: false,
                    failed: true,
                    message: action.message
                }
            }
        }
        case USER_CASES.LOGOUT.REQUEST: {
            return {
                ...state,
                userProfile: null,
                logoutProcess: {
                    request: true,
                    succeed: false,
                    failed: false,
                    message: action.message
                }
            }
        }
        case USER_CASES.LOGOUT.SUCCEED: {
            return {
                ...state,
                userProfile: null,
                logoutProcess: {
                    request: false,
                    failed: false,
                    message: action.message
                }
            }
        }
        case USER_CASES.LOGOUT.FAILED: {
            return {
                ...state,
                userProfile: null,
                logoutProcess: {
                    request: false,
                    failed: true,
                    message: action.message
                }
            }
        }
        default:
            return state
    }
}