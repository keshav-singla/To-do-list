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

    handleDelete = (delData) => {
        this.props.deleteTask(delData)
    }

    render(){
        console.log(this.props.task);
        console.log('Hello');
        return( 
            <tr>
                <td>
                    {this.props.task}
                </td>
                <td>
                    <button onClick = { ()=> this.handleDelete(this.props.task)} >
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

export default connect( () => {return {};},mapDispatchToProps)(Task);