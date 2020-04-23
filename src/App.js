import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  componentDidMount () {
    fetch("/.netlify/functions/upload")
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render () {

    return (
      <div>
        Placeholder
      </div>
    )
  }
}

export default App;
