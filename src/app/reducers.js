import {
  UPLOAD_IMAGE_START, 
  UPLOAD_IMAGE_SUCCESS, 
  UPLOAD_IMAGE_FAILURE,
  RESET_PROGRESS,
  SET_IMAGE
} from "./actions"
  
export const defaultState = {
  imageUrl: "",
  errorMessage: null,
  progressValue: null
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

    default: {
      return state
    }
  }
}
  