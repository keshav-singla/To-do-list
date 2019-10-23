import React from 'react'
import { connect } from 'react-redux'
import Task from './task'

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
            <table>
                <thead>
                    <tr>
                        <th>
                            Tasks
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.task.length >= 0 && this.props.task.slice(0).reverse().map((task, index) => {
                        return (
                            <Task
                                key = {index}
                                task = {task}
                            />
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return {
        task: state.tasks
    }
}

export default connect(mapStateToProps)(List);