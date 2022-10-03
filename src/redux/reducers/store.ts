import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { dataReducer } from './dataReducer'
import { modalReducer } from './modalReducer'

const rootReducer = combineReducers({
    dataState: dataReducer,
    modalState: modalReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

const setInitialData = (payload: any) => {
    return {
        type: "SET_INITIAL",
        agendaListsData: payload,
    }
}

// const getAsyncStorage: any = () => {
//     return (dispatch: any) => {
//         let initialData: any = localStorage.getItem('agendaData')

//         return dispatch(setInitialData(JSON.parse(initialData)))
//     };
// };

// store.dispatch(getAsyncStorage())

export default store