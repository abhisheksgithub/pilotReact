import { combineReducers } from 'redux'
import commentDetailsReducer from './commentDetailsReducer'
import userDetailsReducer from './userDetailsReducer'
import photoDetailsReducer from './photoDetailsReducer'
import postsDetailsReducer from './postsDetailsReducer'
import todoReducer from './todoReducer'

export default combineReducers({
    userDetails: userDetailsReducer,
    commentDetails: commentDetailsReducer,
    photoDetails: photoDetailsReducer,
    postsDetails: postsDetailsReducer,
    todo: todoReducer
})