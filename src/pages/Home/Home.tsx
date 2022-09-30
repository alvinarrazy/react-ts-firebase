import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'

function Home() {
  return (
    <Container fluid className='p-4 home-container'>
    <Container className='mt-4'>
      <h1>Data list</h1>
    </Container>
    <Table >
      <thead className='text-center'>
        <tr>
          <td className='col'>
            Data
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
  </Container>  )
}

export default Home