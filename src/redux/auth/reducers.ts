import { IAction } from "..";
import cases from "./cases";
import { IAuthState, IUser } from './interfaces';

const initialState: IAuthState = {
    userProfile: null,
    isLoading: false,
    loginProcess: {
        request: false,
        succeed: false,
        failed: false,
        message: null
    },
    logoutProcess: {
        request: false,
        succeed: false,
        failed: false,
        message: null
    },
    registerProcess: {
        request: false,
        succeed: false,
        failed: false,
        message: null
    }
}

export const authReducer = (state = initialState, action: IAction<IUser> = { type: '' }): IAuthState => {
    switch (action.type) {
        case cases.SET_INITIAL: {
            console.log(action.payload)
            return {
                ...state,
                userProfile: action?.payload ?? null
            }
        }
        case cases.LOGIN.REQUEST: {
            return {
                ...state,
                userProfile: null,
                isLoading: true,
                loginProcess: {
                    request: true,
                    succeed: false,
                    failed: false,
                    message: action.message
                }
            }
        }
        case cases.LOGIN.SUCCEED: {
            return {
                ...state,
                userProfile: {
                    username: action.payload?.username ?? "name not found",
                    uid: action.payload?.uid ?? "uid not found",
                    email: action.payload?.email ?? 'email not found'
                },
                isLoading: false,
                loginProcess: {
                    request: false,
                    succeed: true,
                    failed: false,
                    message: action.message
                },
            }
        }
        case cases.LOGIN.FAILED: {
            return {
                ...state,
                userProfile: null,
                isLoading: false,
                loginProcess: {
                    request: false,
                    succeed: false,
                    failed: true,
                    message: action.message
                }
            }
        }
        case cases.REGISTER.REQUEST: {
            return {
                ...state,
                userProfile: null,
                isLoading: true,
                registerProcess: {
                    request: true,
                    succeed: false,
                    failed: false,
                    message: action.message
                }
            }
        }
        case cases.REGISTER.SUCCEED: {
            return {
                ...state,
                isLoading: false,
                registerProcess: {
                    request: false,
                    succeed: true,
                    failed: false,
                    message: action.message
                },
            }
        }
        case cases.REGISTER.FAILED: {
            return {
                ...state,
                isLoading: false,
                registerProcess: {
                    request: false,
                    succeed: false,
                    failed: true,
                    message: action.message
                }
            }
        }
        case cases.LOGOUT.REQUEST: {
            return {
                ...state,
                userProfile: null,
                isLoading: true,
                logoutProcess: {
                    request: true,
                    succeed: false,
                    failed: false,
                    message: action.message
                }
            }
        }
        case cases.LOGOUT.SUCCEED: {
            return {
                ...state,
                userProfile: null,
                isLoading: false,
                logoutProcess: {
                    request: false,
                    succeed: true,
                    failed: false,
                    message: action.message
                }
            }
        }
        case cases.LOGOUT.FAILED: {
            return {
                ...state,
                userProfile: null,
                isLoading: false,
                logoutProcess: {
                    request: false,
                    succeed: false,
                    failed: true,
                    message: action.message
                }
            }
        }
        default:
            return state
    }
}