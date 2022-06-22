import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import CounterNumber from './CounterNumber'

export default function CounterFn() {

    const counter = useSelector((state)=>state.counter)

    const dispatch = useDispatch()
    const sub = () =>{
        dispatch({type:"sub"})
    }

    const add = () =>{
        dispatch({type:"add"})
    }
    return (
        <div>
            <h1 style={{display:"flex", justifyContent:"center"}}>Redux CounterFn<CounterNumber/></h1>
            <p>{counter}</p>
            <button onClick={sub}>-</button>
            <button onClick={add}>+</button>
        </div>
    )
}
