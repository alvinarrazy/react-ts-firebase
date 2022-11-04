import React from 'react'
import { Button, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { RootState, useAppDispatch, useAppSelector } from '../../redux'
import { login } from '../../redux/auth/actions'
import { AuthDispatch, LoginBody } from '../../redux/auth/interfaces'

function Login() {
    const dispatch: AuthDispatch = useAppDispatch()
    const authState = useAppSelector((state: RootState) => state.authState)

    const [input, setInput] = React.useState<LoginBody>({
        email: '',
        password: ''
    })

    function handleChange(target: any) {
        const { name, value } = target
        setInput(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function handleSubmit() {
        dispatch(login(input))
    }

    return (
        <div>
            <div className='row-3 mb-3'>
                <p>Email</p>
                <FormControl
                    data-testid='email-input'
                    name='email'
                    placeholder="Insert your assignment title here!"
                    onChange={(e) => handleChange(e.target)}
                />
            </div>

            <div className='row-3 mb-3'>
                <p>Password</p>
                <FormControl
                    data-testid='password-input'
                    name='password'
                    placeholder="Insert your assignment title here!"
                    type='password'
                    onChange={(e) => handleChange(e.target)}
                />
            </div>

            <div className='d-flex flex-column align-items-center'>
                <div className='row mb-2'>
                    <Button
                        variant='primary'
                        data-testid='login-button'
                        size='lg'
                        className='pl-6 pr-6'
                        onClick={() => handleSubmit()}
                        disabled={authState.isLoading}
                    >Login</Button>
                </div>
                <div className='row'>
                </div>
            </div>
        </div>
    )
}

export default Login