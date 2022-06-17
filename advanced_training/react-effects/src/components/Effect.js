import { useState,useEffect } from "react"

export default function Effect() {

    const [refresher,setRefresher] = useState(false)
    const [data,setData] = useState([])

    //examples

    //renders on every change //
    useEffect(()=>{
        getData()
    })

    // //renders only once
    useEffect(()=>{
        getData()
    },[])
    
    // //render on state change
    useEffect(()=>{
        getData()
    },[refresher]) 

    //example function
    const getData = async ()=>{
        const url = await fetch ('http://localhost:3001/')
        const data = await url.json()
        setData(data)
    }

    return (
        <div>Effect
            <button onClick={()=>{
                console.log(refresher)
                setRefresher(prevRefresher => !prevRefresher)
            }}>refresh</button>
        </div>
    )
}