import React, { Component } from 'react';
import './App.css';
import Layout from './components/layout'

class App extends Component {
  
  // componentDidMount () {
  //   fetch("/.netlify/functions/upload")
  //   .then(response => response.json())
  //   .then(response => {
  //     console.log(response)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }

  render () {

    return (
      <div>
        <Layout />
      </div>
    )
  }
}

export default App;
