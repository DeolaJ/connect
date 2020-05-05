import React, { Component } from 'react';
import { Progress } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import '../styles/imageUploader.scss';
import "semantic-ui-css/components/progress.min.css";

class ImageUploader extends Component {
  static propTypes = {
    doUploadImage: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    progressValue: PropTypes.number,
    doSetImage: PropTypes.func.isRequired
  }

  state = {
    filename: null
  }

  previewFile = (file) => {
    const base = this
    const { doSetImage } = this.props
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function () {
      doSetImage(reader.result)
      base.setState({
        filename: file.name
      })
    }
  }

  handleFiles = (file) => {
    this.previewFile(file)
  }

  render () {
    const { errorMessage, progressValue } = this.props
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
        />
        <label htmlFor="fileElem" arial-label="Click to upload image" className={"main-button bold"} id="upload-label">
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