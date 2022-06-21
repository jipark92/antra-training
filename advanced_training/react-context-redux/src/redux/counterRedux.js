import { createStore} from 'redux'

const reducerFn = (state={counter:0},action) =>{

    if(action.type === "sub"){
        return {counter: state.counter - 1}
    }

    if(action.type === "add"){
        return {counter: state.counter + 1}
    }
    
    return state
}

const store = createStore(reducerFn)
export default store