import React from 'react'
// import List from './list';

class Input extends React.Component {
    constructor() {
        super()
        this.state = {
            input: '',
            item: [],
            // value: ''
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
                <input type="text" name="name"
                    value={this.state.input}

                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit} >Add</button>
                <div>
                    {this.state.item.map(item => {
                        return (
                            <div>
                                {item}
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        )
    }
}

export default Input;

// onChange={e =>
//     this.setState({ value: e.target.value })
// } />