import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/errorpage.scss'

const ErrorPage = (props) => {

  return (
    <div className={"error-container"}>
      <h1>
        Oops, Lets take you home
      </h1>

      <div>
        <Link to='/'>
          <button className={'main-button'}>
            Home
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage