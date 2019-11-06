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
        console.log(this.props.task);
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>

                            <TableCell align="left"> Status </TableCell>
                            <TableCell> Tasks </TableCell>
                            <TableCell align="right"> Actions </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.task.length >= 0 && this.props.task.map((task, index) => {
                            return (
                                <Task
                                    key={index}
                                    taskIndex= {index}
                                    task={task}
                                />
                            )
                        })}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

// Getting state from Redux store
function mapStateToProps(state) {
    return {
        task: state.tasks
    }
}

export default connect(mapStateToProps)(List);