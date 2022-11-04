import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Login } from '../../pages'
import { useAppDispatch, useAppSelector } from '../../redux'
import { showModal } from '../../redux/modal/actions'
import AlreadyLogin from './components/AlreadyLogin'
import LoginButton from './components/LoginButton'

function NavigationBar() {
    const authState = useAppSelector((state) => state.authState)
    const dispatch = useAppDispatch()

    function showLoginModal() {
        dispatch(showModal({ title: "Login", children: authState?.userProfile ? <AlreadyLogin username={authState?.userProfile?.username ?? "Username not found"} /> : <Login /> }))
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand className='ml-6' >{authState.userProfile?.username ? authState.userProfile.username : "React Typescript X Firebase"}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse style={{ marginRight: 0 }} id="basic-navbar-nav">
                    <Nav className="me-auto align-items-center">
                        <Link className='nav-link mr-4' to="/">Home</Link>
                        <LoginButton
                            onClick={() => showLoginModal()}
                        />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar