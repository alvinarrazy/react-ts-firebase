import { IModal } from './../../components/Modal/Modal';
import { createAction } from '@reduxjs/toolkit'

export const showModal = createAction<IModal>('modal/show')

export const hideModal = createAction('modal/hide')