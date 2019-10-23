import React from 'react';
import { connect } from 'react-redux';
import { deleteTask} from '../actions/addtask';
import { bindActionCreators } from 'redux'

class Task extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }

    handleDelete = () => {
        this.props.deleteTask(this.props.id )
    }

    render(){
        console.log(this.props.task);   
        return( 
            <tr>
                <td>
                    {this.props.task}
                </td>
                <td>
                    <button
                        onClick = { ()=> this.handleDelete }
                    >
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({deleteTask}, dispatch)
}

export default connect( () => {return {};},mapDispatchToProps ) (Task);