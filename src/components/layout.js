import React from 'react'
import { Grid, Container } from 'semantic-ui-react';
import "semantic-ui-css/components/grid.min.css";
import "semantic-ui-css/components/container.min.css";
import Main from './main'

const Layout = (props) => {

  return (
    <Grid stackable className={"main-container"}>
      <Grid.Column width={16}>
        <Container>
          <Main />
        </Container>
      </Grid.Column>
    </Grid>
  )
}

export default Layout