import React from 'react'
import { Button, FormControl } from 'react-bootstrap'
import { register, RegisterBody } from '../../redux/actions/userActions'
import { useAppDispatch, useAppSelector } from '../../redux/reducers/store'
import { selectUser } from '../../redux/reducers/userReducer'

function Register() {
    const dispatch = useAppDispatch()
    const userState = useAppSelector(selectUser)
    const [input, setInput] = React.useState<RegisterBody>({
        email: '',
        password: '',
        username: ''
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
        dispatch(register(input))
    }

    return (
        <div className="p-6">
            <div className='row-3 mb-3'>
                <p>Email</p>
                <FormControl
                    name='email'
                    placeholder="Insert your assignment title here!"
                    onChange={(e) => handleChange(e.target)}
                />
            </div>

            <div className='row-3 mb-3'>
                <p>Password</p>
                <FormControl
                    name='password'
                    placeholder="Insert your assignment title here!"
                    type='password'
                    onChange={(e) => handleChange(e.target)}
                />
            </div>

            <div className='row-3 mb-3'>
                <p>Username</p>
                <FormControl
                    name='username'
                    placeholder="Insert your assignment title here!"
                    onChange={(e) => handleChange(e.target)}
                />
            </div>

            <div className='d-flex flex-column align-items-center'>
                <div className='row mb-2'>
                    <Button
                        variant='primary'
                        size='lg'
                        className='pl-6 pr-6'
                        onClick={() => handleSubmit()}
                        disabled={userState.isLoading}
                    >Register</Button>
                </div>
            </div>
        </div>
    )
}

export default Register