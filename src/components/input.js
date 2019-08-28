import React from 'react'
import List from './list';

class Input extends React.Component {
    constructor() {
        super()
        this.state = {
            input: '',
            item: [],
            name : ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = () => {
        const items = this.state.item.push(this.state.name)
        return items;

    }


    render() {
        console.log(this.state.item)
        return (
            <div>
                <input type="text" name="name" onChange={this.handleChange} />
                <button onClick={this.handleSubmit} >Add</button>
                <List item={this.state.item} />
            </div>
        )
    }
}

export default Input;