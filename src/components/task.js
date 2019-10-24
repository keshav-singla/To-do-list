import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actions/addtask';
import { bindActionCreators } from 'redux'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Task extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }

    handleDelete = (delData) => {
        this.props.deleteTask(delData)
    }

    render() {
        console.log(this.props.task);
        console.log('Hello');
        return (
            <TableRow >
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
    return bindActionCreators({ deleteTask }, dispatch)
}

export default connect(() => { return {}; }, mapDispatchToProps)(Task);