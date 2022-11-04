import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { hideModal } from '../../../redux/actions/modalActions'
import { logout } from '../../../redux/actions/authActions'

interface Props {
  username: string
  logout: () => void
  hideModal: () => void
}

function AlreadyLogin({ username, logout, hideModal }: Props) {
  function handleLogout() {
    logout()
    hideModal()
  }

  return (
    <>
      <div>Welcome {username}</div>
      <Button variant='danger' onClick={() => handleLogout()}>Sign out</Button>
    </>
  )
}

const mapStateToProps = (state: any) => {
  return {

  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(logout()),
    hideModal: () => dispatch(hideModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlreadyLogin)