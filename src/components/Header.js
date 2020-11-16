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
                <div style={{display:"inline", marginRight: "20px" }}><Link to="/comments">Comment Section</Link></div>
                <div style={{display:"inline",marginRight: "20px" }}><Link to="/photos">Photo Section</Link></div>
                <div style={{display:"inline",marginRight: "20px" }}><Link to="/posts">Posts Section</Link></div>
            </div>
        )
    }
};
