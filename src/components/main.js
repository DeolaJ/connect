import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import ImageUploader from './imageUploader'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import appActions from '../app/actions'

class Main extends Component {
  static propTypes = {
    doUploadImage: PropTypes.func.isRequired,
    errorMessage: PropTypes.bool,
    progressValue: PropTypes.number,
    doSetImage: PropTypes.func.isRequired
  }

  render () {
    const { doUploadImage, errorMessage, progressValue, doSetImage } = this.props

    return (
      <Grid stackable className={"app-container"}>
        <Grid.Column width={16}>
          <ImageUploader 
            doUploadImage={doUploadImage}
            errorMessage={errorMessage}
            progressValue={progressValue}
            doSetImage={doSetImage}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    imageUrl: state.app.imageUrl,
    errorMessage: state.app.errorMessage,
    progressValue: state.app.progressValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    doUploadImage (file) {
      dispatch(appActions.doUploadImage(file))
    },
    doSetImage (imageUrl) {
      dispatch(appActions.doSetImage(imageUrl))
    }
  }
}

const MainApp = connect (mapStateToProps, mapDispatchToProps)(Main)
export default MainApp