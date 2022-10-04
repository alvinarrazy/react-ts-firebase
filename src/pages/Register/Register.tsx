import React from 'react'
import { Button, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import { register } from '../../redux/actions/userActions'

interface Props {
    register: (email: string, password: string, username: string) => any
}

function Register({ register }: Props) {
    const [input, setInput] = React.useState({
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
        register(input.email, input.password, input.username)
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
                    >Register</Button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {

    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        register: (email: string, password: string, username: string) => dispatch(register(email, password, username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)