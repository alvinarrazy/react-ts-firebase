import { userReducer } from './userReducer';
import { combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { dataReducer } from './dataReducer'
import { modalReducer } from './modalReducer'
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        dataState: dataReducer,
        modalState: modalReducer,
        userState: userReducer,
    },
})

const setInitialData = (payload: any) => {
    return {
        type: "SET_INITIAL",
        payload: {
            userProfile: payload.userProfile,
            // data: payload.data
        },
    }
}

const getStorage: any = () => {
    return (dispatch: any) => {

        let payload = {
            userProfile: JSON.parse(localStorage.getItem('userProfile') ?? "{}"),
            data: JSON.parse(localStorage.getItem("data") ?? "{}")
        }
        console.log(payload)
        return dispatch(setInitialData(payload))
    };
};

store.dispatch(getStorage())

export default store