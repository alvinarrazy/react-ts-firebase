import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addNewData, DataInterface, getData } from '../../redux/actions/dataActions'
import { showModal } from '../../redux/actions/modalActions'
import { DataState } from '../../redux/reducers/dataReducer'
import { UserState } from '../../redux/reducers/userReducer'
import AddData from '../AddData/AddData'

interface Props extends UserState, DataState {
  addNewData: (newData: DataInterface) => void,
  getData: () => void,
  showModal: (title: string, children: JSX.Element) => void
}


function Home({ userState, dataState, addNewData, getData, showModal }: Props) {
  React.useEffect(() => {
    getData()
  }, [])


  return (
    <Container fluid className='p-4 home-container'>
      <Container className='mt-4 d-flex justify-content-between'>
        <h1>
          {
            userState?.userProfile?.username ?
              userState.userProfile.username :
              "Login first"
          }
        </h1>
        <Button size='lg' onClick={() => showModal("New data", <AddData />)}>+</Button>
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
            !!dataState.data ?
              <tbody>
                {
                  dataState.data.map((d: { name: string, description: string }) => (
                    <tr className=''>
                      <td>
                        {d.name}
                      </td>
                      <td >
                        {d.description}
                      </td>
                    </tr>
                  ))
                }
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

const mapStateToProps = (state: any) => {
  return {
    userState: state.userState,
    dataState: state.dataState
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    getData: () => dispatch(getData()),
    addNewData: (newData: DataInterface) => dispatch(addNewData(newData)),
    showModal: (title: string, children: JSX.Element) => dispatch(showModal(title, children))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)