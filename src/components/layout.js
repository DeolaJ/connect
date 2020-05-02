import React from 'react'
import { Grid } from 'semantic-ui-react';
import "semantic-ui-css/components/grid.min.css";
import Main from './main'

const Layout = (props) => {

  return (
    <Grid stackable className={"main-container"}>
      <Grid.Column width={16}>
        <Main />
      </Grid.Column>
    </Grid>
  )
}

export default Layout