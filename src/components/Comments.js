import React from 'react'
import { connect } from 'react-redux'

class Comments extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3>User comment Details</h3>
                <ul>
                    {this.props.userComments.map(item=> {
                        return <li>{item.name}</li>
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