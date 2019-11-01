import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask, checkTask } from '../actions/addtask';
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
            lists: props.lists
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
        console.log(this.props.list);
        
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

function mapStateToProps(state){
    return{
        list : state.lists
    }
}
export default connect( mapDisptachToProps, mapStateToProps)(Taskbar);