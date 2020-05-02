import { firebase } from './../firebase'

export const RESET_PROGRESS = "RESET_PROGRESS"

export const SET_IMAGE = "SET_IMAGE"
export const SET_PREVIEW_TEXT = "SET_PREVIEW_TEXT"
export const SET_PREVIEW_BOLD_TEXT = "SET_PREVIEW_BOLD_TEXT"
export const SET_PREVIEW_BACKGROUND = "SET_PREVIEW_BACKGROUND"
export const SET_ACTIVE_PREVIEW = "SET_ACTIVE_PREVIEW"

export const SET_PREVIEW_MODE = "SET_PREVIEW_MODE"

export const UPLOAD_IMAGE_FAILURE = "UPLOAD_IMAGE_FAILURE"
export const UPLOAD_IMAGE_START = "UPLOAD_IMAGE_START"
export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS"

export const DOWNLOAD_RESULT_FAILURE = "DOWNLOAD_RESULT_FAILURE"
export const DOWNLOAD_RESULT_START = "DOWNLOAD_RESULT_START"
export const DOWNLOAD_RESULT_SUCCESS = "DOWNLOAD_RESULT_SUCCESS"

export const ERROR_NOTIFY = "ERROR_NOTIFY"
export const ERROR_HIDE = "ERROR_HIDE"

export const RESET_CHANGES = "RESET_CHANGES"
export const RETURN_RESET = "RETURN_RESET"
export const SHARE_IMAGE = "SHARE_IMAGE"

const resetProgress = (payload) => ({
  type: RESET_PROGRESS,
  payload
})

const setImage = (payload) => ({
  type: SET_IMAGE,
  payload
})

const setPreviewText = (payload) => ({
  type: SET_PREVIEW_TEXT,
  payload
})

const setPreviewBoldText = (payload) => ({
  type: SET_PREVIEW_BOLD_TEXT,
  payload
})

const setPreviewBackground = (payload) => ({
  type: SET_PREVIEW_BACKGROUND,
  payload
})

const setActivePreview = (payload) => ({
  type: SET_ACTIVE_PREVIEW,
  payload
})

const setPreviewMode = (payload) => ({
  type: SET_PREVIEW_MODE,
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

const resetChanges = (payload) => ({
  type: RESET_CHANGES,
  payload
})

const returnReset = (payload) => ({
  type: RETURN_RESET,
  payload
})

const shareImage = (payload) => ({
  type: SHARE_IMAGE,
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

export const doSetPreviewText = (previewText) => (dispatch) => {
  return dispatch(setPreviewText({
    previewText
  }))
}

export const doSetPreviewBoldText = (previewBoldText) => (dispatch) => {
  return dispatch(setPreviewBoldText({
    previewBoldText
  }))
}

export const doSetPreviewBackground = (previewBackground) => (dispatch) => {
  return dispatch(setPreviewBackground({
    previewBackground
  }))
}

export const doSetActivePreview = (selectedPreview) => (dispatch) => {
  return dispatch(setActivePreview({
    selectedPreview
  }))
}

export const doSetPreviewMode = (previewMode) => (dispatch) => {
  return dispatch(setPreviewMode({
    previewMode
  }))
}

export const doResetChanges = () => (dispatch) => {
  dispatch(resetChanges({
    previewMode: false,
    imageUrl: "",
    previewText: "",
    previewBoldText: "",
    previewBackground: "",
    selectedPreview: "image",
    reset: true
  }))
  setTimeout(() => {
    dispatch(returnReset({
      reset: false
    }))
  }, 100)
}

export const doShareImage = () => (dispatch) => {
  return dispatch(shareImage())
}

export const doDownloadImage = (imageUrl) => dispatch => {
  dispatch(downloadResultStart())
}

export default {
  doUploadImage,
  doSetImage,
  doSetPreviewText,
  doSetPreviewBoldText,
  doSetPreviewBackground,
  doSetActivePreview,
  doSetPreviewMode,
  doResetChanges,
  doShareImage,
  doDownloadImage
}