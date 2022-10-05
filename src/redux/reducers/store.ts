import { userReducer } from './userReducer';
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { dataReducer } from './dataReducer'
import { modalReducer } from './modalReducer'

const rootReducer = combineReducers({
    dataState: dataReducer,
    modalState: modalReducer,
    userState: userReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

const setInitialData = (payload: any) => {
    return {
        type: "SET_INITIAL",
        payload: {
            userProfile: payload.userProfile
        },
    }
}

const getStorage: any = () => {
    return (dispatch: any) => {
        let initialData: string | null = localStorage.getItem('userProfile')

        if (initialData) {
            let payload = {
                userProfile: JSON.parse(initialData)
            }
            console.log(payload)
            return dispatch(setInitialData(payload))
        }
    };
};

store.dispatch(getStorage())

export default store