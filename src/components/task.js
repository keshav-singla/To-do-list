import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, taskDone } from '../actions/addtask';
import { bindActionCreators } from 'redux'
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from "@material-ui/core/Checkbox";

let trueArray = []

class Task extends React.Component {
    constructor() {
        super()
        this.state = {
            disabled : false,
        }
    }

    componentWillReceiveProps = ( nextProps ) => {
        if(this.props !== nextProps){
            console.log(nextProps);
            console.log(this.props);
        }
    }

    handleChange = name => event => {
        this.setState({ 
            ...this.state, checked : {[name]: event.target.checked }
        });

        this.props.taskDone(name , event.target.checked )

        if( event.target.checked === true ){
            trueArray.push(name)
            this.setState({

            })
        }

        else if (event.target.checked === false){
            trueArray = trueArray.filter( x => x !== name )
        }
    };

    handleDelete = (delData) => {
        this.props.deleteTask(delData)
    }

    handleEdit = () => {
        console.log('Edit Icon');
    }

    render() {
        console.log(trueArray);
        // console.log(trueArray.length);
        console.log(this.props.task);
        console.log(this.props.taskIndex);
        
        return (
            <TableRow>
                <TableCell>
                    <Checkbox
                        color = 'primary'
                        name={this.props.task}
                        checked={this.state[this.props.task]}
                        onChange={this.handleChange(`${this.props.task}`)}
                        value="checked"
                        inputProps={{
                            'aria-label': 'primary checkbox',
                        }}
                    />
                </TableCell>

                <TableCell>
                    {this.props.task}
                </TableCell>

                <TableCell align = 'right' >
                    <IconButton edge="end" aria-label="delete">
                        <EditTwoToneIcon color = 'primary'
                            onClick = { () => this.handleEdit() } 
                        />
                    </IconButton>

                    <IconButton edge="end" aria-label="delete">
                        <DeleteForeverTwoToneIcon color = 'secondary'
                            onClick={ () => this.handleDelete(this.props.task)}
                        />
                    </IconButton>
                </TableCell>
            </TableRow>
        )
    }
}

// Dispataching Actions
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deleteTask, taskDone }, dispatch)
}

// Getting state from Redux store
function mapStateToProps(state) {
    return {
        taskArray: state.tasks
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);