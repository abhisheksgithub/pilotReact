import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

function HookConcepts(props) {    

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(data =>  data.json())
                .then(data => props.addPosts(data))
    }, [])

    return (<>
            <div>
              <h4>Posts details</h4>
              <div>
                  <ul>
                    {props.postsDetails.map(item => {
                        return <li>{item.title}</li>
                    })}
                  </ul>
              </div>
            </div>
        </>
    )
};


const mapStateToProps = (state) => ({
    postsDetails: state.postsDetails ? state.postsDetails : []
})

const mapDispatchToProps = dispatch => ({
    addPosts: (val) => dispatch({ type: 'ADD_POSTS', payload: val})
})

export default connect(mapStateToProps, mapDispatchToProps)(HookConcepts)