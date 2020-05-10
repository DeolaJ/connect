import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/errorpage.scss'
import { analytics } from '../firebase'

const ErrorPage = (props) => {

  analytics.logEvent("error_view", { message: "User got lost" })
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