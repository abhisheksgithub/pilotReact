export default function commentDetailsReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_PHOTOS': {
            return action.payload
        }
        case 'EDIT_PHOTO': {
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