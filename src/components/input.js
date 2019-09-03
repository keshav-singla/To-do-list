import React from 'react'
import List from './list';

class Input extends React.Component {
    constructor() {
        super()
        this.state = {
            input: '',
            item: [],
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            input: '',
            item: [...this.state.item, this.state.input]
        })
    }

    handleChange = e => {
        e.preventDefault()
        this.setState({ input: e.target.value })
    }

    render() {
        return (
            <div className='container'>
                <div className='inputContainer'>
                    <input className='inputFeild' type="text" name="name"
                    placeholder= 'Add Task'
                    value={this.state.input}
                    onChange={this.handleChange}
                />
                 <button className='addButton' onClick={this.handleSubmit} >+</button>
                 
                </div>
                <List items={this.state.item} />
                   
            </div>
        )
    }
}

export default Input;