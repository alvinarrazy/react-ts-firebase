import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import './Modal.css'
import { connect } from 'react-redux'
import { hideModal } from '../../redux/actions/modalActions'

interface Props {
    modalState: {
        isShow: boolean,
        children: JSX.Element | null,
        title: string | null
    },
    hideModal: () => any
}

function ModalComp({ modalState, hideModal }: Props) {
    return (
        <div className='modal-container'>
            <Modal size={"lg"} scrollable show={modalState?.isShow} onHide={() => hideModal()}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalState.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalState?.children}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => hideModal()}>
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
        children: null,
        title: null
    }
}

const mapStateToProps = (state: any) => {
    return {
        modalState: state.modalState
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        hideModal: () => dispatch(hideModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalComp)