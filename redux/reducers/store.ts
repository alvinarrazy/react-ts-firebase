import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { dataReducer } from './dataReducer'
import types from '../constants'

const rootReducer = combineReducers({
    dataState: dataReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

const setInitialData = (payload: any) => {
    return {
        type: types.SET_INITIAL,
        agendaListsData: payload,
    }
}

const getAsyncStorage: any = () => {
    return (dispatch: any) => {
        let initialData: any = localStorage.getItem('agendaData')

        return dispatch(setInitialData(JSON.parse(initialData)))
    };
};

store.dispatch(getAsyncStorage())

export default store