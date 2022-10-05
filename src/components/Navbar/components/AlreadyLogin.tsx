import React from 'react'

interface Props {
    username: string
}

function AlreadyLogin({username}:Props) {
  return (
    <div>Welcome {username}</div>
  )
}

export default AlreadyLogin