import React from 'react'
import logo from '../images/logo.png'
import '../styles/footer.scss'

const Footer = (props) => {

  return (
    <footer className={"footer"}>
      <div>
        <p>Powered By</p>
        <img src={logo} alt="Connect Marketing logo" />
      </div>
    </footer>
  )
}

export default Footer