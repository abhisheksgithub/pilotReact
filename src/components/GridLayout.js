import React from 'react'

export default class GridLayout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li style={{ margin: "15px" }} key={this.props.item.id}>
                {this.props.item.name} 
                <button style={{  marginLeft: "5px" }} onClick={() => { this.props.deleteMe(this.props.item.id) }}>Delete</button>
                <button style={{ marginLeft: "5px" }} onClick={() => { this.props.editMe(this.props.item.id) }} >Edit</button>
                <br/> {this.props.item.website} 
            </li>
        )
    }
};
