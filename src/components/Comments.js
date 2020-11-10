import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Comments extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3>User comment Details</h3>
                <ul>
                    {this.props.userComments.map((item, index)=> {
                        return <li key={index}><Link to={`/comments/editComments/${item.id}`}>{item.name}</Link></li>
                    })}
                </ul>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    userComments: state.commentDetails ? state.commentDetails : []
})

export default connect(mapStateToProps)(Comments)