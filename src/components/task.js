import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, taskDone } from '../actions/addtask';
import { bindActionCreators } from 'redux'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from "@material-ui/core/Checkbox";

let trueArray = []

class Task extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }

    handleChange = name => event => {
        this.setState({ 
            ...this.state, checked : {[name]: event.target.checked }
        });

        this.props.taskDone(name , event.target.checked )

        if( event.target.checked === true ){
            trueArray.push(name)
        }

        else if (event.target.checked === false){
            trueArray = trueArray.filter( x => x !== name )
        }
    };

    // handleFilter  = (name) => {
    //     const { checked } = this.state; 
    //     console.log(this.state)
    //     console.log(checked);
    // }

    handleDelete = (delData) => {
        this.props.deleteTask(delData)
    }

    render() {
        console.log(trueArray);
        // console.log(trueArray.length);
        // console.log(this.props.taskIndex);

        return (
            <TableRow>

                <TableCell>
                    <Checkbox
                        name={this.props.task}
                        checked={this.state[this.props.task]}
                        onChange={this.handleChange(`${this.props.task}`)}
                        value="checked"
                        inputProps={{
                            'aria-label': 'primary checkbox',
                        }}
                    />
                </TableCell>

                <TableCell>
                    {this.props.task}
                </TableCell>

                <TableCell align = "right" >

                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon
                            onClick={ () => this.handleDelete(this.props.task) }
                        />
                    </IconButton>

                </TableCell>

            </TableRow>
        )
    }
}

// Dispataching Actions
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deleteTask, taskDone }, dispatch)
}

// Getting state from Redux store
function mapStateToProps(state) {
    return {
        taskArray: state.tasks
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);