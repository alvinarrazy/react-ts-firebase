import React from 'react'
import { Button, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addNewData, DataInterface } from '../../redux/actions/dataActions'

interface Props {
    addNewData: (data: DataInterface) => void,
}

function AddData({ addNewData }: Props) {
    const [input, setInput] = React.useState({
        name: '',
        description: ''
    })

    function handleChange(target: any) {
        const { name, value } = target
        setInput((prev: any) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function handleSubmit() {
        let data: DataInterface = {
            name: input.name,
            desc: input.description
        }

        addNewData(data)
    }

    return (
        <>
            <div className='row-3'>
                <p>Name</p>
                <FormControl
                    name='name'
                    placeholder="Insert your assignment title here!"
                    onChange={(e) => handleChange(e.target)}
                />
            </div>
            <div className='row-3'>
                <p>Description</p>
                <FormControl
                    name='description'
                    placeholder="Insert your assignment title here!"
                    onChange={(e) => handleChange(e.target)}
                />
            </div>
            <div className='row-3 mt-3 d-flex justify-content-center'>
                <Button onClick={() => handleSubmit()} size={'lg'}>
                    Submit
                </Button>
            </div>
        </>
    )
}

const mapStateToProps = (state: any) => {
    return {

    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        addNewData: (data: DataInterface) => dispatch(addNewData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddData)