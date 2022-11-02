import { createAsyncThunk } from '@reduxjs/toolkit';
import dataService from '../services/data';

export interface NewDataBody {
    name: string,
    desc: string
}

export const addNewData = createAsyncThunk('data/add', async (data: NewDataBody, { rejectWithValue }) => {
    try {
        let { result, error } = await dataService.addData(data)

        if (error) throw error

        return result
    } catch (error) {
        console.log(error)
        return rejectWithValue(error)
    }
})


export const getData = createAsyncThunk('data/get', async (_, { rejectWithValue }) => {
    try {
        let { result, error } = await dataService.getData()

        if (error) throw error


        return result
    } catch (error) {
        console.log(error)
        rejectWithValue(error)
    }
})



