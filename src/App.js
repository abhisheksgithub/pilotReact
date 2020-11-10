import React, { Component } from 'react'
import { connect } from 'react-redux';
import Child from './components/Child';
import Dashboard from './components/Dashboard'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Comments from './components/Comments';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
       return response.json()
       })
       .then(data => { 
           this.props.userDetailUpdate(data)
       })
    fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json())
      .then(data => {
          this.props.commentDetailUpdate(data)
      })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/comments" component={Comments} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userDetailUpdate : (val) => dispatch({ type: 'ADD_USERS', payload: val }),
    commentDetailUpdate: (val) => dispatch({ type: 'ADD_COMMENTS', payload: val})
  }
}

export default connect(null, mapDispatchToProps)(App);


// store  <-- reducer <-- action (type, payload) [Child Component]
//        --> connect ( mapStateToProps )   --> [Child Component]
// Higher order component
// 