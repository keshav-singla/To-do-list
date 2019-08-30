import React from 'react'
import {Icon} from 'semantic-ui-react'
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
            <div>
                <input className='inputFeild' type="text" name="name"
                    value={this.state.input}
                    onChange={this.handleChange}
                />
                <button className='button' onClick={this.handleSubmit} ><Icon name='add' color='grey'/> Add </button>
                <div>
                    <List items={this.state.item} />
                </div>
            </div>
        )
    }
}

export default Input;