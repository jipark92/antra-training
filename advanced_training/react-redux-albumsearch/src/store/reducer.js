import { GET_ALBUM_SUCCESS } from "./actions"

const myFirstReducer = (state = {album:[]}, action) =>{
    switch (action.type){
        case GET_ALBUM_SUCCESS:
            return {...state,album: action.album}
        default: 
            return state;
    }
}

export default myFirstReducer