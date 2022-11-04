import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Login from './Login'

describe('Login Component', () => {
    describe('Static Page', () => {
        it('should render forms', () => {
            render(<Login />)

            const emailInputEl = screen.getByTestId('email-input')
            const passwordInputEl = screen.getByTestId('password-input')
            const loginButton = screen.getByTestId('login-button')

            expect(emailInputEl).toBeInTheDocument()
            expect(passwordInputEl).toBeInTheDocument()
            expect(loginButton).toBeInTheDocument()
        })
    })


    describe('Firebase auth test', () => {

    })


})