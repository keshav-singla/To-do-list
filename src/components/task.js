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

    render(){
        return( 
            <tr>
                <td>
                    {this.props.task}
                </td>
                <td>
                    <button
                        onClick = { ()=> {this.props.deleteTask(this.props.id )} }
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