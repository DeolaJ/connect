import { firebase } from './../firebase'

export const RESET_PROGRESS = "RESET_PROGRESS"

export const SET_IMAGE = "SET_IMAGE"

export const UPLOAD_IMAGE_FAILURE = "UPLOAD_IMAGE_FAILURE"
export const UPLOAD_IMAGE_START = "UPLOAD_IMAGE_START"
export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS"

export const DOWNLOAD_RESULT_FAILURE = "DOWNLOAD_RESULT_FAILURE"
export const DOWNLOAD_RESULT_START = "DOWNLOAD_RESULT_START"
export const DOWNLOAD_RESULT_SUCCESS = "DOWNLOAD_RESULT_SUCCESS"

export const ERROR_NOTIFY = "ERROR_NOTIFY"
export const ERROR_HIDE = "ERROR_HIDE"

const resetProgress = (payload) => ({
  type: RESET_PROGRESS,
  payload
})

const setImage = (payload) => ({
  type: SET_IMAGE,
  payload
})

const uploadImageStart = (payload) => ({
  type: UPLOAD_IMAGE_START,
  payload
})

const uploadImageSuccess = (payload) => ({
  type: UPLOAD_IMAGE_SUCCESS,
  payload
})

const uploadImageFailure = (payload) => ({
  type: UPLOAD_IMAGE_FAILURE,
  payload
})

const downloadResultStart = (payload) => ({
  type: DOWNLOAD_RESULT_START,
  payload
})

const downloadResultSuccess = (payload) => ({
  type: DOWNLOAD_RESULT_SUCCESS,
  payload
})

const downloadResultFailure = (payload) => ({
  type: DOWNLOAD_RESULT_FAILURE,
  payload
})

const errorNotify = (payload) => ({
  type: ERROR_NOTIFY,
  payload
})

const errorHide = (payload) => ({
  type: ERROR_HIDE,
  payload
})

export const setErrorMessage = (errorMessage) => dispatch => {
  dispatch(errorNotify(errorMessage))
  setTimeout(() => {
    dispatch(errorHide({
      errorMessage: ""
    }))
  }, 2500)
}

export const doUploadImage = (file) => dispatch => {
  dispatch(uploadImageStart({
    progressValue: 0
  }))
  let url = "/.netlify/functions/upload"
  var formData = new FormData()

  formData.append('file', file)
  formData.append('filename', file.name)
  
  return fetch(url, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    console.log(response)
    dispatch(uploadImageSuccess({
      progressValue: 100,
    }))
    setTimeout(() => {
      dispatch(resetProgress({
        progressValue: null
      }))
    }, 2000)
  })
  .catch(() => { 
    dispatch(uploadImageFailure())
    setErrorMessage("There was an error uploading the image, Please try again")
  })
}

export const doSetImage = (imageUrl) => (dispatch) => {
  return dispatch(setImage({
    imageUrl
  }))
}

export default {
  doUploadImage,
  doSetImage
}