import React from 'react'

class List extends React.Component{
    constructor(props){
        super(props)
        this.state={
            items : props.item
        }
    }
    
    render(){
        return(
            <div>
                {this.props.item? (   
                    this.state.items.map(item => {
                        return (
                            <li>{item}</li>
                        )
                    })
                ): "Add TODO"}
            </div>
        )
    }
}

export default List;