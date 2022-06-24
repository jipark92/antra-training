import { GET_ALBUM_SUCCESS } from "./actions"

const myFirstReducer = (state = {users:[]}, action) =>{
    switch (action.type){
        case GET_ALBUM_SUCCESS:
            return {...state,users: action.users}
        default: 
            return state;
    }
}

export default myFirstReducer