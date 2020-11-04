import React from 'react'

export default class GridLayout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li key={this.props.item.id}>
                {this.props.item.name} <br/> {this.props.item.website} 
                <button onClick={() => { this.props.deleteMe(this.props.item.id) }}>Delete</button>
                <button onClick={() => { this.props.editMe(this.props.item.id) }} >Edit</button>
            </li>
        )
    }
};
