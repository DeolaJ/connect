import React from 'react';
import './App.css';
import Layout from './components/layout'

const App = () => {
  
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

  return (
    <div>
      <Layout />
    </div>
  )
}

export default App;
