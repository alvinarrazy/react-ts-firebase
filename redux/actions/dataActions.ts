import types from "../constants"

export const resetDataState = () => {
    return dispatch => {
        dispatch({
            type: types.RESET_DATA_STATE
        })
    }
}

export const addNewData = (newAgenda) => {
    const {REQUEST, SUCCEED, FAILED} = types.ADD_DATA
    return async (dispatch) => {
        dispatch({
            type: REQUEST
        })
        try {


            // return dispatch({
                // type: SUCCESSS,
                // payload: 
            // })
        } catch (error) {
            console.log('Error Line 34 userAction:', error)

            // let action = newAction(SUCCEED, newData)
            // return dispatch({
            //     type: FAILED,
            //     message: error
            // })
        }

    }
}