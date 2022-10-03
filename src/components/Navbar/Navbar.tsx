import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Login } from '../../pages'
import { showModal } from '../../redux/actions/modalActions'
import LoginButton from './components/LoginButton'

interface Props {
    showModal: (title: string, children: JSX.Element) => any,
}

function NavigationBar({ showModal }: Props) {

    function showLoginModal() {
        showModal("Login", <Login />)
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand className='ml-6' >React Typescript X Firebase</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse style={{ marginRight: 0 }} id="basic-navbar-nav">
                    <Nav className="me-auto align-items-center">
                        {/* <Link className='nav-link' to="/">Assignment List</Link> */}
                        <LoginButton
                            onClick={() => showLoginModal()}
                        />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const mapStateToProps = (state: any) => {
    return {

    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        showModal: (title: string, children: JSX.Element) => dispatch(showModal(title, children))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)