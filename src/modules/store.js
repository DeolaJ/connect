import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import combinedReducer from '../combinedReducer'
import logger from 'redux-logger'

export default function configureStore(persistedState) {
    const store = createStore(
        combinedReducer,
        persistedState,
        applyMiddleware(logger, thunkMiddleware)
    )
    return store;   
}
