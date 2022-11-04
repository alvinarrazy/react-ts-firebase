import { modalReducer } from './modal/reducers';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, Action } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { authReducer } from './auth/reducers';
import { IUser } from './auth/interfaces';

const rootReducer = combineReducers({
    authState: authReducer,
    modalState: modalReducer
})

// const store = createStore(rootReducer)
const store = createStore(rootReducer, applyMiddleware(thunk, logger))

const setInitialData = (payload: IUser) => {
    return {
        type: "SET_INITIAL",
        payload
    }
}

const getStorage: any = () => {
    return (dispatch: any) => {

        let payload = JSON.parse(localStorage.getItem('userProfile') ?? "{}") as IUser

        console.log(payload)
        return dispatch(setInitialData(payload))
    };
};

store.dispatch(getStorage())

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch

export default store

export interface IAction<T> extends Action {
    message?: string;
    payload?: T;
}

export interface IAsyncProcess {
    request: boolean,
    succeed: boolean,
    failed: boolean,
    message?: string | null
}

export interface IService<T> {
    result?: T,
    error?: string
}