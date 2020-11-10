export default function commentDetailsReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENTS': {
            return action.payload
        }
        default: {
            return state
        }
    }
}