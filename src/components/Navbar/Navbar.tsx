import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Login } from '../../pages'
import { showModal } from '../../redux/actions/modalActions'
import { UserState } from '../../redux/reducers/userReducer'
import AlreadyLogin from './components/AlreadyLogin'
import LoginButton from './components/LoginButton'

interface Props extends UserState {
    showModal: (title: string, children: JSX.Element) => any,
}

function NavigationBar({ showModal, userState }: Props) {

    function showLoginModal() {
        if (userState.userProfile?.username)
            showModal("Hello", <AlreadyLogin username={userState.userProfile?.username}/>)
        else
            showModal("Login", <Login />)
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand className='ml-6' >{userState.userProfile?.username ? userState.userProfile.username : "React Typescript X Firebase"}</Navbar.Brand>
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

const mapStateToProps = (state: any) => {
    return {
        userState: state.userState
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        showModal: (title: string, children: JSX.Element) => dispatch(showModal(title, children))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)