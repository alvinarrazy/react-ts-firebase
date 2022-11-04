import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { selectModal } from '../../redux/reducers/modalReducer'
import { useAppSelector } from '../../redux/reducers/store'
import './Modal.css'

export interface IModal {
    children: React.ReactNode | null,
    title: string | null
}

interface Props {
    onHide: () => any
}

function ModalComp({ onHide }: Props) {
    const modalState = useAppSelector(selectModal)

    return (
        <div className='modal-container'>
            <Modal scrollable show={modalState?.isShow} onHide={() => onHide()}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalState.modal.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalState.modal.children}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => onHide()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

ModalComp.defaultProps = {
    modalState: {
        isShow: false,
        modal: {
            children: null,
            title: null
        }
    }
}

export default ModalComp