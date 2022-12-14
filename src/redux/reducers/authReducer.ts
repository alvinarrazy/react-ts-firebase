import { IReducerStore } from './store';
import { register, logout, login } from '../actions/authActions';
import { IUser } from '../../interfaces';
import { createSlice, isAnyOf } from '@reduxjs/toolkit'

export interface AuthState {
    userData: IUser | null,
    isLoading: boolean,
    error: {
        isError: boolean,
        message: string
    }
}

const initialState: AuthState = {
    userData: null,
    isLoading: false,
    error: {
        isError: false,
        message: ''
    }
}

const authSlice = createSlice({
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

export const { clearError } = authSlice.actions;

// Exporting pieces of state to be used in components with useSelector Hook
export const selectAuth = (state: IReducerStore) => state.authState;

export default authSlice.reducer