export default function reducer(state = {}, action) {
    switch(action.type) {
        case 'ADD_USERS' : {
            return {...state, userDetails: action.payload}
        }
        case 'UPDATE_USERNAME' : {
            let indUser = -1
            state.userDetails.find((item, ind) => {
                if(item.id == action.payload.id) {
                    indUser = ind
                    return true
                }
            })
            return {...state, userDetails: [...state.userDetails.slice(0, indUser), {...state.userDetails[indUser], name: action.payload.name}, ...state.userDetails.slice(indUser + 1) ]}
        }
        default: {
            return state
        }
    }
}