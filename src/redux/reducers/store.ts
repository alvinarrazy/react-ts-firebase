import userReducer, { UserState } from './userReducer';
import modalReducer, { ModalState } from './modalReducer'
import dataReducer, { DataState } from './dataReducer'
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

// Use throughout your app instead of plain `useDispatch` and `useSelector`


export interface IReducerStore {
    userState: UserState,
    modalState: ModalState,
    dataState: DataState
}

export const store = configureStore({
    reducer: {
        userState: userReducer,
        modalState: modalReducer,
        dataState: dataReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector