import React, { useState, useEffect } from "react";
import teslaData from "../teslaData";

export default function Question2() {
    const [regionSelect, setRegionSelect] = useState("ALL");
    const [modelSelect, setModelSelect] = useState("ALL");

    const defaultTable = teslaData.map((data, i) => {
        return (
        <tr key={i}>
            <td>{data.region}</td>
            <td>{data.model}</td>
            <td>{data.sales}</td>
        </tr>
        );
    });

    const filteredTable = teslaData
        .filter((data) => {
        const { region, model } = data;

        if (regionSelect === "ALL" && modelSelect === "ALL") return data;
        if (region === regionSelect && modelSelect === "ALL") return data;
        if (regionSelect === "ALL" && model === modelSelect) return data;
        if (region === regionSelect && model === modelSelect) return data;
        })
        .map((data, i) => {
        return (
            <tr key={i}>
            <td>{data.region}</td>
            <td>{data.model}</td>
            <td>{data.sales}</td>
            </tr>
        );
        });

    const [renderTable, setRenderTable] = useState(defaultTable);

    useEffect(() => {
        if (regionSelect || modelSelect) setRenderTable(filteredTable);
    }, [regionSelect, modelSelect]);

    return (
        <div className="App">
        <div className="option-container">
            <label htmlFor="region">Region</label>
            <select
            name="region"
            id="region"
            onChange={(e) => {
                setRegionSelect(e.currentTarget.value);
            }}
            >
            <option value="ALL">ALL</option>
            <option value="US">US</option>
            <option value="EU">EU</option>
            <option value="CA">CA</option>
            </select>
            <label htmlFor="model">Model</label>
            <select
            name="model"
            id="model"
            onChange={(e) => {
                setModelSelect(e.currentTarget.value);
            }}
            >
            <option value="ALL">ALL</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            </select>
        </div>
        <table border="1">
            <tbody>
            <tr>
                <th>Region</th>
                <th>Model</th>
                <th>Sales</th>
            </tr>
            {renderTable}
            </tbody>
        </table>
        </div>
    );
}
