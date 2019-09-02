import React from 'react'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='listContainer' >
                        {this.props.items.map(item => {
                            return (
                                <div >
                                    {item}
                                </div>
                            )
                        })}
            </div>
        )
    }
}

export default List;