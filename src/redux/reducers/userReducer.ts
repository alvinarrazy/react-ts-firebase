import { IReducerStore } from './store';
import { register, logout, login } from '../actions/userActions';
import { UserData } from './../../types';
import { createSlice, isAnyOf } from '@reduxjs/toolkit'

export interface UserState {
    userData: UserData | null,
    isLoading: boolean,
    error: {
        isError: boolean,
        message: string
    }
}

const initialState: UserState = {
    userData: null,
    isLoading: false,
    error: {
        isError: false,
        message: ''
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error.isError = false;
            state.error.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                isAnyOf(login.pending, register.pending, logout.pending),
                (state) => {
                    state.isLoading = true;
                }
            )
            .addMatcher(
                isAnyOf(login.fulfilled, logout.fulfilled, register.fulfilled),
                (state, action) => {
                    state.isLoading = false
                    state.error = {
                        isError: false,
                        message: ''
                    }
                    state.userData = action.payload ?? null
                }
            )
            .addMatcher(
                isAnyOf(login.rejected, logout.rejected, register.rejected),
                (state, action) => {
                    state.isLoading = false
                    state.error = {
                        isError: true,
                        message: action.error?.message ?? "error occured"
                    }
                    state.userData = null
                }
            )
    },
});

export const { clearError } = userSlice.actions;

// Exporting pieces of state to be used in components with useSelector Hook
export const selectUser = (state: IReducerStore) => state.userState;

export default userSlice.reducer