import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { showModal } from '../../redux/actions/modalActions'
import { useAppDispatch, useAppSelector } from '../../redux/reducers/store'
import { selectUser } from '../../redux/reducers/userReducer'
import AddData from '../AddData/AddData'


function Home() {
  const dispatch = useAppDispatch()
  const users = useAppSelector(selectUser)

  return (
    <Container fluid className='p-4 home-container'>
      <Container className='mt-4 d-flex justify-content-between'>
        <h1>
          {
            users.userData?.username ?
              users.userData.username :
              "Login first"
          }
        </h1>
        <Button size='lg' onClick={() => dispatch(showModal({ children: <AddData />, title: "New Data" }))}>+</Button>
      </Container>
      <Container>
        <Table className='p6'>
          <thead >
            <tr>
              <td>Name</td>
              <td>Description</td>
            </tr>
          </thead>
          {
            false ?
              <tbody>

              </tbody>
              :
              <tr className=''>
                <td>
                  No data
                </td>
              </tr>
          }
        </Table>
      </Container>
    </Container>)
}

export default Home