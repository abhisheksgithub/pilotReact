import React, { Component } from 'react'
import { connect } from 'react-redux';
import Dashboard from './components/Dashboard'

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
  }

  render() {
    return (
      <div className="App">
          <Dashboard />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userDetailUpdate : (val) => dispatch({ type: 'ADD_USERS', payload: val })
  }
}

export default connect(null, mapDispatchToProps)(App);


// store  <-- reducer <-- action (type, payload) [Child Component]
//        --> connect ( mapStateToProps )   --> [Child Component]
// Higher order component
// 