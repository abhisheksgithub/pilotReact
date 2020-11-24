import { act } from "react-dom/test-utils";

export default function postsDetailsReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_POSTS': {
            return action.payload
        }
         case 'EDIT_POST':{
                console.log("EDIT_POST",action.payload)
                let index = -1
                state.find((item, ind) => {
                    if(item.id === action.payload.id){
                        index = ind
                        return true
                    }
                 })
                return [...state.slice(0, index), {...state[index], ...action.payload}, ...state.slice(index+1)]
        }
        default: {
            return state
        }
    }
}