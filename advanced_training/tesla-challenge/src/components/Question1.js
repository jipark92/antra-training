import React, {} from "react";
import teslaData from '../teslaData'

export default function Question1() {

    const getTable = () => {
        return teslaData.map((data,i)=>{
            const {region,model,sales} = data
            return(
                <tr key={i}>
                    <th>{region}</th>
                    <th>{model}</th>
                    <th>{sales}</th>
                </tr>
            )
        })
    }

    let sum = teslaData.reduce((total,data)=>{
        const {region, sales}  = data
        if(region === "US" ){
            total.us += sales
        }
        if(region === "EU" ){
            total.eu += sales
        }
        if(region === "CA" ){
            total.ca += sales
        }
        return total
    },{
        us:0,
        eu:0,
        ca:0
    })

    return (
        <table border="1">
        <tbody>
            <tr>
                <th>Region</th>
                <th>Model</th>
                <th>Sales</th>
            </tr>
            {getTable()}
            <tr>
                <th>US</th>
                <th>SUM</th>
                <th>{sum.us}</th>
            </tr>
            <tr>
                <th>EU</th>
                <th>SUM</th>
                <th>{sum.eu}</th>
            </tr>
            <tr>
                <th>CA</th>
                <th>SUM</th>
                <th>{sum.ca}</th>
            </tr>
            </tbody>
        </table>
    );
}
