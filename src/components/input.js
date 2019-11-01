import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../actions/addtask';
import List from './list'
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Taskbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            item: [],
            tasks: props.tasks
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (data) => {
        if (this.props.task.includes(data)) {
            console.log("same element");
            this.setState({
                input: []
            })
        }
        else {
            this.props.addTask(data)
            this.setState({
                input: []
            })
        }
    }

    render() {
        console.log(this.props.task);
        return (
            <div className='container'>
                <Grid container >
                    <Grid item xs={12} className='inputContainer'>
                        <Input
                            className='inputFeild'
                            type="text"
                            placeholder='Add Task'
                            name="input"
                            value={this.state.input}
                            onChange={this.handleChange}
                            inputProps={{
                                maxLength: 75,
                                }}
                            autoComplete='off'
                        />
                        
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => { this.handleSubmit(this.state.input) }}
                        >
                            Add Task
                        </Button>
                        <List />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

function mapDisptachToProps(dispatch) {
    return bindActionCreators({ addTask }, dispatch)
}

function mapStateToProps(state) {
    console.log(state.tasks);
    return {
        task: state.tasks
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(Taskbar);