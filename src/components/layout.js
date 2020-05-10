import React from 'react'
import { Grid, Container } from 'semantic-ui-react';
import "semantic-ui-css/components/grid.min.css";
import "semantic-ui-css/components/container.min.css";
import Main from './main'
import { analytics } from '../firebase'
import '../styles/layout.scss'
import header from '../images/header.png'

const Layout = (props) => {

  analytics.logEvent("main_app_view", { name: "initial" })

  return (
    <Grid stackable className={"main-container"}>
      <Grid.Column width={16}>
        <Container textAlign="center" className={"header-container"}>
          <img src={header} alt="header logo" className={"header-logo"} />
          <br/>
          <h1 className={"header-title"}>
            <q>
              <span style={{ marginLeft: ".2rem" }}>We'll be better</span> &amp; <span style={{ marginRight: ".2rem" }}>Stronger</span>
            </q>
          </h1>
        </Container>
      </Grid.Column>
      <Grid.Column width={16}>
        <Main />
      </Grid.Column>
    </Grid>
  )
}

export default Layout