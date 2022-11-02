import { IReducerStore } from './store';
import { IModal } from './../../components/Modal/Modal';
import { showModal, hideModal } from './../actions/modalActions';
import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
    isShow: boolean,
    modal: IModal
}

const initialState: ModalState = {
    isShow: false,
    modal: {
        children: null,
        title: null
    }
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        reset: (state) => {
            state = initialState
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(hideModal, (state, action) => {
                state.isShow = false
                state.modal.children = null
                state.modal.title = null
            })
            .addCase(showModal, (state, action) => {
                state.isShow = true
                state.modal = action.payload
            })

    }
})

export const { reset } = modalSlice.actions

export const selectModal = (state: IReducerStore) => state.modalState

export default modalSlice.reducer