import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../actions/addtask';
import List from './list'

class Taskbar extends React.Component {
    constructor() {
        super()
        this.state = {
            input: '',
            item: [],
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (data) => {
        this.props.addTask(data)
        this.setState({
            input: []
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='inputContainer'>
                    <input className='inputFeild'
                    type="text" 
                    // refs = 'tasks' 
                    placeholder= 'Add Task'
                    name= "input"
                    value={this.state.input}
                    onChange={this.handleChange}
                    autoComplete = 'off'
                    />

                <button 
                    className='addButton' 
                    onClick={() => {this.handleSubmit(this.state.input)}} 
                >
                    +
                </button>
                 
                </div>
                <List />
            </div>
        )
    }
}

function mapDisptachToProps(dispatch){
    return bindActionCreators({addTask}, dispatch)                 
}

export default connect( () => {}, mapDisptachToProps) (Taskbar);