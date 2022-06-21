import React from 'react'
import { useSelector} from 'react-redux'

export default function CounterNumber() {

    const counter = useSelector((state)=>state.counter)

    return (
        <div>{counter}</div>
    )
}
