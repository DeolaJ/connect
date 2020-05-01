import React, { Component } from 'react';
import { Progress } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import '../styles/imageUploader.scss';
import "semantic-ui-css/components/progress.min.css";

class ImageUploader extends Component {
  static propTypes = {
    doUploadImage: PropTypes.func.isRequired,
    errorMessage: PropTypes.bool,
    progressValue: PropTypes.number,
    doSetImage: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.dropArea = document.querySelector(".drop-area");

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      this.dropArea.addEventListener(eventName, this.preventDefaults, false)
    })

    ;['dragenter', 'dragover'].forEach(eventName => {
      this.dropArea.addEventListener(eventName, this.highlight, false)
    })
    
    ;['dragleave', 'drop'].forEach(eventName => {
      this.dropArea.addEventListener(eventName, this.unhighlight, false)
    })

    this.dropArea.addEventListener('drop', this.handleDrop)
  }

  preventDefaults = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  
  highlight = (e) => {
    this.dropArea.classList.add('highlight')
  }
  
  unhighlight = (e) => {
    this.dropArea.classList.remove('highlight')
  }

  previewFile = (file) => {
    const { doSetImage } = this.props
    const gallery = document.getElementById('gallery');
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function() {
      let img = document.createElement('img')
      img.src = reader.result
      gallery.appendChild(img)
      doSetImage(reader.result)
    }
  }

  handleFiles = (file) => {
    const { doUploadImage } = this.props

    // doUploadImage(file)
    this.previewFile(file)
  }

  handleDrop = (e) => {
    let dt = e.dataTransfer

    // Uploading one file
    let file = dt.files[0]
    this.handleFiles(file)
  }

  render () {
    const { errorMessage, progressValue } = this.props

    return (
      <div className={"uploader-container"}>
        <div className={"drop-area"}>
          {
            errorMessage &&
            <p>{errorMessage}</p>
          }
          <form 
            className="my-form"
          >
            <label className="button" htmlFor="fileElem">Upload desired image</label>
            <input 
              type="file" 
              id="upload-input"
              accept="image/*"  
              onChange={e => this.handleFiles(e.target.files[0])}
            />
          </form>
          {
            progressValue &&
            <Progress percent={progressValue} indicating />
          }
          <div id={"gallery"}></div>
        </div>
      </div>
    )
  }
}

export default ImageUploader