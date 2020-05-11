import React from 'react'
import logo from '../images/logo.png'
import '../styles/footer.scss'
import { ReactComponent as Twitter } from '../images/twitter.svg'
import { ReactComponent as Linkedin } from '../images/linkedin.svg'
import { ReactComponent as Instagram } from '../images/instagram.svg'

const Footer = (props) => {

  return (
    <footer className={"footer"}>
      <div>
        <p className={"powered-text"}>Powered By</p>
        <a href="https://connectmarketingonline.com" rel="noopener noreferrer" target="_blank">
          <img src={logo} alt="Connect Marketing logo" />
        </a>
      </div>
      <div className={"social-icons"}>
        <p>Follow us on</p>
        <a href="https://twitter.com/ConnectNg" rel="noopener noreferrer" target="_blank">
          <Twitter />
        </a>
        <a href="https://www.instagram.com/connectmarketingservices" rel="noopener noreferrer" target="_blank">
          <Instagram />
        </a>
        <a href="https://www.linkedin.com/company/connect-marketing-services" rel="noopener noreferrer" target="_blank">
          <Linkedin />
        </a>
      </div>
    </footer>
  )
}

export default Footer