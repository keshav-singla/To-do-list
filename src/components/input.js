import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../actions/addtask';
import List from './list'
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ReactSvgPieChart from "react-svg-piechart"

const options = {
    animationEnabled: true,
    title: {
        text: "Customer Satisfaction"
    },
    subtitles: [{
        text: "71% Positive",
        verticalAlign: "center",
        fontSize: 24,
        dockInsidePlotArea: true
    }],
    data: [{
        type: "doughnut",
        showInLegend: true,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: [
            { name: "Unsatisfied", y: 5 },
            { name: "Very Unsatisfied", y: 31 },
            { name: "Very Satisfied", y: 40 },
            { name: "Satisfied", y: 17 },
            { name: "Neutral", y: 7 }
        ]
    }]
}

const data = [
    { title: "Data 1", value: 100, color: "#22594e" },
    { title: "Data 2", value: 20, color: "#2f7d6d" },
    { title: "Data 3", value: 80, color: "#3da18d" },
    { title: "Data 4", value: 60, color: "#69c2b0" },
    { title: "Data 5", value: 100, color: "#a1d9ce" },
]


class Taskbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            item: [],
            error: false
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (data) => {
        if (this.props.task.includes(data)) {
            this.setState({
                error: true,
                input: []
            })
        }
        else {
            this.props.addTask(data)
            this.setState({
                error: false,
                input: []
            })
        }
    }

    render() {

        console.log(this.props.task);
        return (
            <div className='container'>
                <Grid container >
                    <Grid item xs={12} className='inputContainer'>
                        <Input
                            className='inputFeild'
                            type='text'
                            placeholder='ADD TASK'
                            name='input'
                            value={this.state.input}
                            onChange={this.handleChange}
                            inputProps={{
                                maxLength: 75,
                            }}
                            autoComplete='off'
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => { this.handleSubmit(this.state.input) }}
                        >
                            ADD TASK
                        </Button>
                        
                        {/* LIST COMPONENT */}
                        <List />

                    </Grid>
                </Grid>

                {this.state.error === true ?
                    'This TASK is already exist!'
                    : null
                }

                {/* <ReactSvgPieChart
                    data={data}
                    // If you need expand on hover (or touch) effect
                    expandOnHover
                    // If you need custom behavior when sector is hovered (or touched)
                    onSectorHover={(d, i, e) => {
                        if (d) {
                            console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                        } else {
                            console.log("Mouse leave - Index:", i, "Event:", e)
                        }
                    }}
                /> */}
            </div>
        )
    }
}

function mapDisptachToProps(dispatch) {
    return bindActionCreators({ addTask }, dispatch)
}

function mapStateToProps(state) {
    console.log(state.tasks);
    return {
        task: state.tasks
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(Taskbar);