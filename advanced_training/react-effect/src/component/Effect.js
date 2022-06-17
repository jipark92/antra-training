import { useState,useEffect } from "react"

export default function Effect() {

    const [refresher,setRefresher] = useState()
    const [data,setData] = useState([])

    //renders on every change
    useEffect(()=>{
        getData()
    })

    //renders only once
    useEffect(()=>{
        getData()

    },[])
    
    //render on state change
    useEffect(()=>{
        getData()
    },[refresher]) 

    const getData = async ()=>{
        const url = await fetch ('http://localhost:3001/')
        const data = await url.json()
        setData(data)
    }

    return (
        <div>Effect</div>
    )
}
