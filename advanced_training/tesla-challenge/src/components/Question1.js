import React, { useState, useEffect } from "react";
import teslaData from "../teslaData";

export default function Question1() {
    const [teslaArr, setTeslaArr] = useState(teslaData);

    let sum = teslaArr.reduce(
        (total, data) => {
            const { region, sales } = data;
            if (region === "US") total.us += sales;
            if (region === "EU") total.eu += sales;
            if (region === "CA") total.ca += sales;
            return total;
        },
        {
            us: 0,
            eu: 0,
            ca: 0,
        }
    );

    useEffect(() => {
        setTeslaArr([
            ...teslaArr,
            {
                region: "US",
                model: "SUM",
                sales: sum.us,
            },
            {
                region: "EU",
                model: "SUM",
                sales: sum.eu,
            },
            {
                region: "CA",
                model: "SUM",
                sales: sum.ca,
            },
        ]);
    }, []);

    const getTable = teslaArr
        .sort((a, b) => {
            if (a.region < b.region) {
                return 1;
            } else {
                return -1;
            }
        })
        .map((data, i) => {
            const { region, model, sales } = data;
            // console.log(teslaArr)
            return (
                <tr key={i}>
                    <td>{region}</td>
                    <td>{model}</td>
                    <td>{sales}</td>
                </tr>
            );
        });

    return (
        <table border='1'>
            <tbody>
                <tr>
                    <th>Region</th>
                    <th>Model</th>
                    <th>Sales</th>
                </tr>
                {/* <tr>
                    <td>US</td>
                    <td>SUM</td>
                    <td>{sum.us}</td>
                </tr>
                <tr>
                    <td>EU</td>
                    <td>SUM</td>
                    <td>{sum.eu}</td>
                </tr>
                <tr>
                    <td>CA</td>
                    <td>SUM</td>
                    <td>{sum.ca}</td>
                </tr> */}
                {getTable}
            </tbody>
        </table>
    );
}
