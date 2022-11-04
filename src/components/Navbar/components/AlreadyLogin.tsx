import React from 'react'
import { Button } from 'react-bootstrap'
import { useAppDispatch } from '../../../redux'
import { logout } from '../../../redux/auth/actions'
import { hideModal } from '../../../redux/modal/actions'
import { ModalDispatch } from '../../../redux/modal/interfaces'

interface Props {
  username: string
}

function AlreadyLogin({ username }: Props) {
  const dispatch: ModalDispatch = useAppDispatch()

  function handleLogout() {
    dispatch(logout())
    dispatch(hideModal())
  }

  return (
    <>
      <div>Welcome {username}</div>
      <Button variant='danger' onClick={() => handleLogout()}>Sign out</Button>
    </>
  )
}

export default AlreadyLogin