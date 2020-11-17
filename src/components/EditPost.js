import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'


export function EditPosts(props){

const [state, updatePost] = useState({
    title: "",
    body: ""
 })


useEffect(() => {
    const { id } = props.match.params
    const filterPost = props.postDetails.find(item => item.id == id)
    updatePost({
            title: filterPost.title,
            body: filterPost.body
        })
    }, [])

  const handleChange = (evt) => {
    updatePost ({
            editPost: {...state.editPost, [evt.target.name]:evt.target.value}})
    }

  const  handleClick = () => {
      console.log("HAndle Click --- ", state.editPost)
        props.updatePost(state.editPost)
        props.history.push("/posts");
    }

return (<>
Test message
    <div>
        <div style={{margin:"10px"}}><input type="text" value={state.title} onChange={handleChange}/></div>
        <div style={{margin:"10px"}}><input type="text" value={state.body} onChange={handleChange}/></div>
        <div style={{margin:"10px"}}><input type="button" value="Save" onClick={handleClick}/></div>
    </div>
</>)

}



const mapDispatchToProps = dispatch => ({
    updatePost : (val) => { dispatch({
        type: 'EDIT_POST',
        payload: val
    })}
})

const mapStateToProps = state => ({
    postDetails : state.postsDetails,
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPosts)