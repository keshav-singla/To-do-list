import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, taskDone } from '../actions/addtask';
import { bindActionCreators } from 'redux'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

class Task extends React.Component {

    handleDone = (taskStatus) => {
        console.log('hello');
        
        this.props.taskDone(taskStatus)
    }
    handleDelete = (delData) => {
        this.props.deleteTask(delData)
    }

    render() {
        console.log(this.props.taskDone);
        return (
            <TableRow >
                <TableCell>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    // checked={state.checkedB}
                                    onChange={this.handleDone(this.props.task)}
                                    value="checkedB"
                                    color="primary"
                                />
                            }
                        // label="Primary"
                        />
                    </FormGroup>
                </TableCell>

                <TableCell>
                    {this.props.task}
                </TableCell>

                <TableCell align="right">
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon
                            onClick={() => this.handleDelete(this.props.task)}
                        />
                    </IconButton>
                </TableCell>

            </TableRow>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deleteTask, taskDone }, dispatch)
}

export default connect(() => { return {}; }, mapDispatchToProps)(Task);