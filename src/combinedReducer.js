import { combineReducers } from 'redux'

import { default as app } from './app/reducers'

export default combineReducers({
  app: app
})
