import React from 'react'
import { connect } from 'react-redux'

class EditComments extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editComment: {}
        }
    }

    componentDidMount() {
        const { commentId } = this.props.match.params
        const filterComment = this.props.commentDetails.find(item => item.id == commentId)
        this.setState({ editComment: filterComment })
    }

    render() {
        console.log(this.state, 'filtered comments')
        return (
            <div>
                
            </div>
        )
    }
};

const mapStateToProps = state => ({
    commentDetails : state.commentDetails
})

export default connect(mapStateToProps)(EditComments)