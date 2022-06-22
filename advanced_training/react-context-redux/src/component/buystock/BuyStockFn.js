import React,{useContext} from 'react'
import { BuyStockContext } from '../../context/BuyStockContext'
import BuyStockNumber from './BuyStockNumber'

export default function BuyStockFn() {

    const [sub, add, counter] = useContext(BuyStockContext)

    return (
        <div>
            <h1 style={{display:"flex", justifyContent:"center"}}>Context BuyStockFn<BuyStockNumber
            stockNumber={counter}/></h1>
            <p>{counter}</p>
            <button onClick={sub} >-</button>
            <button onClick={add}>+</button>
        </div>
    )
}
