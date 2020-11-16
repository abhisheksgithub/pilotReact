import React from 'react'
import { connect } from 'react-redux'

const style = {
    margin: {
        margin: '10px'
    }
}

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

    handleChange = (evt) => {
     this.setState({editComment:{...this.state.editComment, [evt.target.name]:evt.target.value}})
    }

    handleClick = () => {
        console.log(this.state.editComment)
        this.props.updateComment(this.state.editComment)
        
    }

    render() {
        console.log(this.state, 'filtered comments')
        return (
            <div>
                <div style={style.margin}><input type='text' name='body' placeholder="body" value={this.state.editComment?.body} onChange={this.handleChange}/></div>
                <div style={style.margin}><input type='text' name='email' placeholder="email" value={this.state.editComment?.email} onChange={this.handleChange}/></div>
                <div style={style.margin}><input type='text' name='name' placeholder="name" value={this.state.editComment?.name} onChange={this.handleChange}/></div>
                <div style={style.margin}><input type='text' name='postId' placeholder="postid" value={this.state.editComment?.postId} onChange={this.handleChange}/></div>
                <div style={style.margin}><input type='button' value="Save" onClick={()=>{this.handleClick()}}/></div>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    updateComment : (val) => { dispatch({
        type: 'EDIT_COMMENT',
        payload: val
    })}
})

const mapStateToProps = state => ({
    commentDetails : state.commentDetails,
})

export default connect(mapStateToProps, mapDispatchToProps)(EditComments)