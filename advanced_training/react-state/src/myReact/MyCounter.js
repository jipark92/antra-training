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

    if(counter > 5){
        setTimeout(() => {
            alert('alert after 5 counter')            
        }, 5000);
    }

    return (
        <div>
            <p>Counter {counter} </p>
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
            <button>Alert after 5</button>
        </div>
    )
}