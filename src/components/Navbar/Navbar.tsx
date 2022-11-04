import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Login } from '../../pages'
import { showModal } from '../../redux/actions/modalActions'
import { useAppDispatch, useAppSelector } from '../../redux/reducers/store'
import { selectUser } from '../../redux/reducers/userReducer'
import AlreadyLogin from './components/AlreadyLogin'
import LoginButton from './components/LoginButton'

function NavigationBar() {
    const userState = useAppSelector(selectUser)
    const dispatch = useAppDispatch()

    function showLoginModal() {
        dispatch(showModal({ title: "Login", children: userState?.userData ? <AlreadyLogin username={userState?.userData?.username ?? "Username not found"} /> : <Login /> }))
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand className='ml-6' >{userState.userData?.username ? userState.userData.username : "React Typescript X Firebase"}</Navbar.Brand>
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