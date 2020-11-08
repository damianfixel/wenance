import { combineReducers } from 'redux'
import withReduxState from './Reducer'
import loader from './loader/Reducer'

export default combineReducers({
    withReduxState,
    loader
})
