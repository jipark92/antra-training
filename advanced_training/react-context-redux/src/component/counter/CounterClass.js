import React, {Component} from 'react'

class CounterClass extends Component {
    render(){
        return(
            <div>
            <h1 style={{display:"flex", justifyContent:"center"}}>Redux CounterClass0</h1>
            <p>0</p>
            <button  >-</button>
            <button >+</button>
        </div>
        )
    }
}

export default CounterClass