import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function HookConcepts(props) {    

    useEffect(() => {
        if(props.postsDetails.length == 0) {
            fetch('https://jsonplaceholder.typicode.com/posts').then(data =>  data.json())
            .then(data => props.addPosts(data))
        }
    }, [])

    // this.setState(
    //     ()=>{
    //         return {products: tempProducts, cart: [...this.state.cart, 
    //         product] };
    //     }, 
    //     () => {
    //        this.addTotals();
    //      });


    return (<>
            <div>
              <h4>Posts details</h4>
              <div>
                  <ul>
                    {props.postsDetails.map( (item, index) => {
                        return <li key={index}><Link to={`/posts/editPosts/${item.id}`}> {item.title} </Link></li>    
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