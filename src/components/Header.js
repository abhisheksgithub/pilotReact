import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div style={{ float: "left", marginRight: "20px" }}><Link to="/">Dashboard</Link></div>
                <div><Link to="/comments">Comment Section</Link></div>
                <div><Link to="/photos">Photo Section</Link></div>
            </div>
        )
    }
};
