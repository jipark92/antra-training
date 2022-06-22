import React,{useState, useContext} from 'react'
import { BuyStockContext } from '../../context/BuyStockContext'
import BuyStockNumber from './BuyStockNumber'

export default function BuyStockFn() {

    const [buyStockCount, addStock, subtractStock] = useContext(BuyStockContext)

    return (
        <div>
            <h1 style={{display:"flex", justifyContent:"center"}}>BuyStockFn<BuyStockNumber
            stockNumber={buyStockCount}/></h1>
            <p>{buyStockCount}</p>
            <button onClick={subtractStock} >-</button>
            <button onClick={addStock}>+</button>
        </div>
    )
}
