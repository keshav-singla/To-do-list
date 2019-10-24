import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../actions/addtask';
import List from './list'
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';


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

                    <Input
                        className='inputFeild'
                        // fullWidth={true}
                        type="text"
                        placeholder='Add Task'
                        name="input"
                        value={this.state.input}
                        onChange={this.handleChange}
                        autoComplete='off'
                    />

                    <Button 
                        variant="contained"
                        color="primary" 
                        // className={classes.button}
                        onClick={() => {this.handleSubmit(this.state.input)}}
                    >
                        Add Task
                    </Button>

                </div>
                <List />
            </div>
        )
    }
}

function mapDisptachToProps(dispatch) {
    return bindActionCreators({ addTask }, dispatch)
}

export default connect(() => { }, mapDisptachToProps)(Taskbar);