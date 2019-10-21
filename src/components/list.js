import React from 'react'
import {connect } from 'react-redux'
import Task from './task'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks : props.tasks
        }
    }
    
    render() {
        console.log(this.props);
        const {tasks} = this.state;

        return (
            <table>
                <tr>
                    <th>
                        Tasks
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
            </table>

            // <div 
            //      className='listContainer'
            //  >
            //         { tasks > 0 && tasks.map((task , item) => {
            //             return (
            //                 <div>
            //                     <Task
            //                         key = {item}
            //                         task = {task}
            //                     />
            //                 </div>
            //             )
            //         })}
            // </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        task: state.tasks
    }
}

export default connect(mapStateToProps) (List);