import {
  UPLOAD_IMAGE_START, 
  UPLOAD_IMAGE_SUCCESS, 
  UPLOAD_IMAGE_FAILURE,
  DOWNLOAD_RESULT_START,
  DOWNLOAD_RESULT_SUCCESS,
  DOWNLOAD_RESULT_FAILURE,
  RESET_PROGRESS,
  SET_IMAGE,
  SET_PREVIEW_TEXT,
  SET_PREVIEW_BOLD_TEXT,
  SET_PREVIEW_BACKGROUND,
  SET_ACTIVE_PREVIEW,
  SET_PREVIEW_MODE,
  RESET_CHANGES,
  SHARE_IMAGE,
  RETURN_RESET
} from "./actions"
  
export const defaultState = {
  reset: false,
  imageUrl: "",
  errorMessage: "",
  progressValue: -1,
  previewText: "",
  previewBoldText: "",
  previewBackground: "",
  previewMode: false,
  selectedPreview: "image"
}

export default function appReducers (state=defaultState, action) {
  const { type, payload } = action
  
  switch (type) {

    case RESET_PROGRESS: {
      return {
        ...state,
        ...payload
      }
    }

    case SET_IMAGE: {
      return {
        ...state,
        ...payload
      }
    }

    case SET_PREVIEW_TEXT: {
      return {
        ...state,
        ...payload
      }
    }

    case SET_PREVIEW_BOLD_TEXT: {
      return {
        ...state,
        ...payload
      }
    }

    case SET_PREVIEW_BACKGROUND: {
      return {
        ...state,
        ...payload
      }
    }

    case SET_ACTIVE_PREVIEW: {
      return {
        ...state,
        ...payload
      }
    }

    case SET_PREVIEW_MODE: {
      return {
        ...state,
        ...payload
      }
    }

    case UPLOAD_IMAGE_START: {
      return {
        ...state,
        ...payload
      }
    }

    case UPLOAD_IMAGE_SUCCESS: {
      return {
        ...state,
        ...payload
      }
    }

    case UPLOAD_IMAGE_FAILURE: {
      return {
        ...state,
        ...payload
      }
    }

    case DOWNLOAD_RESULT_START: {
      return {
        ...state,
        ...payload
      }
    }

    case DOWNLOAD_RESULT_SUCCESS: {
      return {
        ...state,
        ...payload
      }
    }

    case DOWNLOAD_RESULT_FAILURE: {
      return {
        ...state,
        ...payload
      }
    }

    case RESET_CHANGES: {
      return {
        ...state,
        ...payload
      }
    }

    case RETURN_RESET: {
      return {
        ...state,
        ...payload
      }
    }

    case SHARE_IMAGE: {
      return {
        ...state,
        ...payload
      }
    }

    default: {
      return state
    }
  }
}
  