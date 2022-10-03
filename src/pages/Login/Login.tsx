import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

interface Props {
    login: (email: string, password: string) => any
}

function Login({ login }: Props) {
    const [input, setInput] = React.useState({
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
        console.log(input)
    }

    return (
        <div>
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

            <div className='d-flex flex-column align-items-center'>
                <div className='row mb-2'>
                    <Button
                        variant='primary'
                        size='lg'
                        className='pl-6 pr-6'
                        onClick={() => handleSubmit()}
                    >Login</Button>
                </div>
                <div className='row'>
                    <Link to='#'>Register</Link>
                </div>
            </div>
        </div>
    )
}

Login.defaultProps = {
    login: () => console.log("Any")
}

const mapStateToProps = (state: any) => {
    return {

    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        // login: (email: string, password: string) => dispatch(login(email, string))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)