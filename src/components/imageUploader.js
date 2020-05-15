import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../styles/imageUploader.scss';
import "semantic-ui-css/components/progress.min.css";
import imageCompression from 'browser-image-compression'
import firebase from '../firebase'

// Checks for IOS devices
let isIOS = /iPad|iPhone|iPod/.test(navigator.platform)
|| (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)

const analytics = firebase.analytics()
class ImageUploader extends Component {
  static propTypes = {
    doUploadImage: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    progressValue: PropTypes.number,
    doSetImage: PropTypes.func.isRequired,
    previewBackground: PropTypes.string.isRequired
  }

  state = {
    filename: null,
    options: {
      maxSizeMB: isIOS ? .7 : 1,
    }
  }

  previewFile = async (file) => {
    const { options } = this.state
    // Compress the uploaded image before applying it to the preview
    const output = await imageCompression(file, options)
    const base = this
    const { doSetImage } = this.props
    let reader = new FileReader(output)
    reader.readAsDataURL(output)
    reader.onloadend = function () {
      // Apply image to the preview
      doSetImage(reader.result)
      // Add file name to the bottom of the upload button
      base.setState({
        filename: file.name
      })
    }
  }

  handleFiles = (file) => {
    this.previewFile(file)
    // Log on Firebase analytics
    analytics.logEvent("upload_image")
  }

  render () {
    const { errorMessage, previewBackground } = this.props
    const { filename } = this.state

    return (
      <div className={"uploader-container"}>
        {
          errorMessage &&
          <p>{errorMessage}</p>
        }
        <input 
          type="file" 
          id="fileElem"
          accept="image/*"  
          className={"file-upload-input"}
          onChange={e => this.handleFiles(e.target.files[0])}
          disabled={previewBackground.length}
          name="covid"
        />
        <label htmlFor="fileElem" arial-label="Click to upload image" className={"main-button bold"} disabled={previewBackground.length} id="upload-label">
          Upload Image
        </label>

        {
          filename &&
          <p>
            Uploaded {filename}
          </p>
        }
      </div>
    )
  }
}

export default ImageUploader