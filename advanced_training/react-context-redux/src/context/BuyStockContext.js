import React, { useState, createContext, Component } from 'react';
import useCounter from '../hooks/useCounter'

export const BuyStockContext = createContext(null);

export const BuyStockProvider = ({children}) => {

    const [sub,add,counter] = useCounter()

    return(
        <BuyStockContext.Provider value={[sub, add, counter]}>
            {children}
        </BuyStockContext.Provider>
    )   
}