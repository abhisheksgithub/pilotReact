export default function commentDetailsReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENTS': {
            return action.payload
        }
        case 'EDIT_COMMENT': {
            let index = -1
            state.find((item, ind) => {
                if(item.id === action.payload.id){
                    index = ind
                    return true
                }    
            })
            return [...state.slice(0, index), action.payload , ...state.slice(index+1) ]
        }
        default: {
            return state
        }
    }
}