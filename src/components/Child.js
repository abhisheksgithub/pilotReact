import React from 'react'
import HOC from './HOC'

class Child extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <div style={{ color: this.props.color }}><h3>Child</h3></div>
            </div>
        )
    }
};

export default HOC('green')(Child)