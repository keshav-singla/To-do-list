import React from 'react'
import { connect } from 'react-redux'
import Task from './task'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: props.tasks
        }
    }

    render() {
        console.log(this.props.task.length);
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Tasks</TableCell>
                            <TableCell align="Right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.task.length >= 0 && this.props.task.map((task, index) => {
                            return(
                                <Task
                                    key = {index}
                                    task = {task}
                                />
                            )
                        })}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

function mapStateToProps(state) {
    return {
        task: state.tasks
    }
}

export default connect(mapStateToProps)(List);