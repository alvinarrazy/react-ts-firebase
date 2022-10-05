import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { UserState } from '../../redux/reducers/userReducer'

interface Props extends UserState {}

function Home({ userState }: Props) {
  return (
    <Container fluid className='p-4 home-container'>
      <Container className='mt-4'>
        <h1>Data list</h1>
      </Container>
      <Table >
        <thead className='text-center'>
          <tr>
            <td className='col'>
              {
                userState.userProfile ?
                  userState.userProfile.username :
                  "Login first"
              }
            </td>
          </tr>
        </thead>
        {/* {
        !!agendas ?
          <tbody>
            {
             
            }
          </tbody>
          :
          <tr className='text-muted text-center'>
            <td colSpan={4}>
              No assigment
            </td>
          </tr>
      } */}
      </Table>
    </Container>)
}

const mapStateToProps = (state: any) => {
  return {
    userState: state.userState
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)