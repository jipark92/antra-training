import React, { useState, createContext } from 'react';
export const BuyStockContext = createContext(null);

export const BuyStockProvider = ({children}) => {

    const [buyStockCount, setBuyStockCount] = useState(0)

    const subtractStock = () =>{
        setBuyStockCount(buyStockCount - 1)
    }

    const addStock = () =>{
        setBuyStockCount(buyStockCount + 1)
    }

    return(
        <BuyStockContext.Provider value={[buyStockCount, addStock, subtractStock]}>
            {children}
        </BuyStockContext.Provider>
    )
}