import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../redux'


function Home() {
    const authState = useAppSelector((state) => state.authState)

    return (
        <Container fluid className='p-4 home-container'>
            <Container className='mt-4 d-flex justify-content-between'>
                <h1>
                    {
                        authState.userProfile?.username ?
                            authState.userProfile.username :
                            "Login first"
                    }
                </h1>
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