import { createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../services/user';

export interface LoginBody {
    email: string,
    password: string
}
export const login = createAsyncThunk('user/login', async (data: LoginBody, { rejectWithValue }) => {
    try {
        let { error, result } = await userService.login(data)

        if (error) throw error

        localStorage.setItem("userProfile", JSON.stringify(result))

        return result
    } catch (error) {
        console.log(error)
        return rejectWithValue(error)
    }
})

export interface RegisterBody {
    email: string,
    password: string,
    username: string
}
export const register = createAsyncThunk('user/register', async (data: RegisterBody, { rejectWithValue }) => {
    try {
        let { error, result } = await userService.register(data)

        if (error) throw error

        return result
    } catch (error) {
        console.log(error)
        return rejectWithValue(error)
    }
})

export const logout = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
    try {
        let { error, result } = await userService.logout()

        if (error) throw error

        localStorage.removeItem("userProfile")

        return result

    } catch (error) {
        console.log(error)
        rejectWithValue(error)
    }
})