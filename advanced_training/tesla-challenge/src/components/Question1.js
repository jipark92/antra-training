import React, { useState, useEffect } from "react";

export default function Question1(props) {
    const { teslaData } = props;

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
            ca: 0
        }
    );

    useEffect(() => {
        setTeslaArr([
            ...teslaArr,
            {
                region: "US",
                model: "SUM",
                sales: sum.us
            },
            {
                region: "EU",
                model: "SUM",
                sales: sum.eu
            },
            {
                region: "CA",
                model: "SUM",
                sales: sum.ca
            }
        ]);
    }, []);

    const getTable = teslaArr
        .sort((a, b) => {
            if (a.region < b.region) return 1;
            return -1;
        })
        .map((data, i) => {
            const { region, model, sales } = data;
            return (
                <tr key={i}>
                    <td>{region}</td>
                    <td>{model}</td>
                    <td>{sales}</td>
                </tr>
            );
        });

    return (
        <table border="1">
            <tbody>
                <tr>
                    <th>Region</th>
                    <th>Model</th>
                    <th>Sales</th>
                </tr>
                {getTable}
            </tbody>
        </table>
    );
}
