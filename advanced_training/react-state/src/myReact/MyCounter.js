import React from 'react'
import {useState} from 'react'

export default function Counter() {

    const [counter,SetCounter] = useState(0)



    const add = () =>{
        console.log('add')
        SetCounter(prevCounter => prevCounter + 1)
    }

    const sub = () =>{
        console.log('sub')
        SetCounter(prevCounter => prevCounter - 1)
    }

    return (
        <div>
            <p>Counter 0 </p>
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
            <button>Alert after 5</button>
        </div>
    )
}
