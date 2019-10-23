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

    // componentWillReceiveProps(prevProps, nextProps) {
    //     if (this.props.location.state !== nextProps.location.state) {
    //         this.setState({
    //             list: nextProps.location.state
    //         })
    //     }
    // }

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
                    {this.props.task.length >= 0 && this.props.task.map((task, index) => {
                        return (
                            <Task
                                key = {index}
                                task = {task}
                            />
                        )
                    }
                        // <Task
                        // key= {index}
                        // task = {task}
                        // />
                    )}
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
// {/* <div
                //     className='listContainer'
                // >
                //     {this.props.tasks > 0 && this.props.tasks.map((task, item) => {
                //         return (
                //             <div>
                //                 <Task
                //                     key={item}
                //                     task={task}
                //                 />
                //             </div>
                //         )
                //     })}
                // </div> */}