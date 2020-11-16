export default function postsDetailsReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_POSTS': {
            return action.payload
        }
        default: {
            return state
        }
    }
}