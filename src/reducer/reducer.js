import { combineReducers } from 'redux'
import commentDetailsReducer from './commentDetailsReducer'
import userDetailsReducer from './userDetailsReducer'

export default combineReducers({
    userDetails: userDetailsReducer,
    commentDetails: commentDetailsReducer
})