import React, { Component } from 'react'
import { Progress } from 'semantic-ui-react'
import FileUploader from 'react-firebase-file-uploader';
import firebase from '../firebase';
import "semantic-ui-css/components/progress.min.css";

class ImageUploader extends Component {

  constructor (props) {
    super (props)
    this.state = {
      file: "",
      isUploading: false,
      progress: 0,
      files: [],
      fileUploading: []
    }
  }

  handleUploadStart = (file) => this.setState(prevState => ({ fileUploading: prevState.fileUploading.concat(file), isUploading: true, progress: 0 }));

  handleProgress = progress => this.setState({ progress });

  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  }

  handleUploadSuccess = filename => {
    this.setState(prevState => ({ file: filename, progress: 100, isUploading: false, complete: true, files: prevState.files.concat(filename) }));
    firebase
      .storage()
      .ref("display")
  }

  render () {

    const { progress, complete, files, fileUploading } = this.state


    return (

      <fieldset>

        <FileUploader
          accept=".png,.jpg,.jpeg"
          storageRef={firebase.storage().ref('display')}
          onUploadStart={this.handleUploadStart}
          onUploadError={this.handleUploadError}
          onUploadSuccess={this.handleUploadSuccess}
          onProgress={this.handleProgress}
        />
        {

          this.state.isUploading && 

          fileUploading.map(file => (
            <div key={file.size} className={'uploading'}>
              <label>Uploading {file.name}</label>
              <Progress percent={progress} indicating />
            </div>
          ))
          
        }

        {
          complete &&

          files.map(file => (
            <div className={'uploaded'} key={file}>
              Uploaded {file}
            </div>
          ))
        }

      </fieldset>
    )
  }
}

export default ImageUploader