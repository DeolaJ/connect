import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import ImageUploader from './imageUploader'
import BoldSelect from './boldselect'
import TextSelect from './textselect'
import BackgroundSelect from './backgroundselect'
import PreviewContainer from './previewcontainer'
import ControlSection from './controlsection'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import appActions from '../app/actions'

class Main extends Component {
  static propTypes = {
    doUploadImage: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    progressValue: PropTypes.number,
    doSetImage: PropTypes.func.isRequired,
    doSetPreviewText: PropTypes.func.isRequired,
    doSetPreviewBoldText: PropTypes.func.isRequired,
    doSetPreviewBackground: PropTypes.func.isRequired,
    doSetActivePreview: PropTypes.func.isRequired,
    doSetPreviewMode: PropTypes.func.isRequired,
    doResetChanges: PropTypes.func.isRequired,
    doDownloadImage: PropTypes.func.isRequired,
    imageUrl: PropTypes.string,
    previewText: PropTypes.string,
    previewBoldText: PropTypes.string,
    previewBackground: PropTypes.string,
    uploadUrl: PropTypes.string,
    uploading: PropTypes.bool,
    generalUrl: PropTypes.string
  }

  render () {
    const { doUploadImage, errorMessage, progressValue, doSetImage, 
      doSetPreviewBoldText, doSetPreviewText, doSetPreviewBackground,
      imageUrl, previewText, previewBoldText, previewBackground,
      doSetActivePreview, previewMode, selectedPreview, doSetPreviewMode,
      doResetChanges, doDownloadImage, reset, uploading, uploadUrl,
      generalUrl
    } = this.props

    return (
      <Grid stackable className={"app-container"}>
        {
          !reset &&
          <>
            <Grid.Column width={16}>
              <Grid columns={2} reversed={"mobile vertically"} stackable className={"main-control-grid"}>
                <Grid.Column width={5} className={"sidebar-column"} style={{ display: previewMode ? "none": "" }}>
                  <BoldSelect 
                    previewBoldText={previewBoldText}
                    doSetPreviewBoldText={doSetPreviewBoldText}
                  />
                  <TextSelect 
                    previewText={previewText}
                    doSetPreviewText={doSetPreviewText}
                  />
                  <ImageUploader 
                    doUploadImage={doUploadImage}
                    previewBackground={previewBackground}
                    errorMessage={errorMessage}
                    progressValue={progressValue}
                    doSetImage={doSetImage}
                  />
                  <p className="separator">OR</p>
                  <BackgroundSelect
                    previewBackground={previewBackground}
                    doSetPreviewBackground={doSetPreviewBackground}
                  />
                </Grid.Column>

                <Grid.Column verticalAlign="middle" width={previewMode ? 8 : 11} className={previewMode ? "preview-column" : "editing preview-column"}>
                  <PreviewContainer 
                    imageUrl={imageUrl}
                    previewText={previewText}
                    previewBoldText={previewBoldText}
                    previewBackground={previewBackground}
                    previewMode={previewMode}
                    doSetActivePreview={doSetActivePreview}
                    selectedPreview={selectedPreview}
                    doSetPreviewMode={doSetPreviewMode}
                />
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column width={16}>
              <ControlSection
                doSetPreviewMode={doSetPreviewMode}
                previewMode={previewMode}
                doDownloadImage={doDownloadImage}
                doResetChanges={doResetChanges}
                imageUrl={imageUrl}
                previewBackground={previewBackground}
                previewText={previewText}
                selectedPreview={selectedPreview}
                previewBoldText={previewBoldText}
                uploadUrl={uploadUrl}
                uploading={uploading}
                generalUrl={generalUrl}
                errorMessage={errorMessage}
              />
            </Grid.Column>
          </>
        }
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reset: state.app.reset,
    imageUrl: state.app.imageUrl,
    errorMessage: state.app.errorMessage,
    progressValue: state.app.progressValue,
    previewText: state.app.previewText,
    previewBoldText: state.app.previewBoldText,
    previewBackground: state.app.previewBackground,
    previewMode: state.app.previewMode,
    selectedPreview: state.app.selectedPreview,
    uploadUrl: state.app.uploadUrl,
    uploading: state.app.uploading,
    generalUrl: state.app.generalUrl
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    doUploadImage (file) {
      dispatch(appActions.doUploadImage(file))
    },
    doSetImage (imageUrl) {
      dispatch(appActions.doSetImage(imageUrl))
    },
    doSetPreviewText (previewText) {
      dispatch(appActions.doSetPreviewText(previewText))
    },
    doSetPreviewBoldText (previewBoldText) {
      dispatch(appActions.doSetPreviewBoldText(previewBoldText))
    },
    doSetPreviewBackground (previewBackground) {
      dispatch(appActions.doSetPreviewBackground(previewBackground))
    },
    doSetActivePreview (selectedPreview) {
      dispatch(appActions.doSetActivePreview(selectedPreview))
    },
    doSetPreviewMode (previewMode) {
      dispatch(appActions.doSetPreviewMode(previewMode))
    },
    doResetChanges () {
      dispatch(appActions.doResetChanges())
    },
    doDownloadImage (checked) {
      dispatch(appActions.doDownloadImage(checked))
    }
  }
}

// Link the Reducer state and Action creators to the Main Component
const MainApp = connect (mapStateToProps, mapDispatchToProps)(Main)
export default MainApp