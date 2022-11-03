import { getData } from './../actions/dataActions';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addNewData } from '../actions/dataActions';
import { IData } from '../../interfaces';

export interface DataState {
    data: IData[] | null,
    isLoading: boolean
}

const initialState: DataState = {
    data: null,
    isLoading: false
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        reset: (state) => {
            state = initialState
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                isAnyOf(addNewData.pending, getData.pending),
                (state) => {
                    state.isLoading = true
                }
            )
            .addMatcher(
                isAnyOf(getData.fulfilled, addNewData.fulfilled),
                (state, action) => {
                    state.data = action.payload ?? null
                    state.isLoading = false
                }
            )
    }
})

export const { reset } = dataSlice.actions

export const selectData = (state: DataState) => state

export default dataSlice.reducer


