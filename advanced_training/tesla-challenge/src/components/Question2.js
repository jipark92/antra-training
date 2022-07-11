import React, { useState } from "react";

export default function Question2(props) {
    const { teslaData } = props;

    const [regionSelect, setRegionSelect] = useState("ALL");
    const [modelSelect, setModelSelect] = useState("ALL");

    const filteredTable = teslaData
        .sort((a, b) => {
            if (a.region < b.region) return 1;
            return -1;
        })
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

    return (
        <div className="App">
            <form className="option-container">
                <label htmlFor="region">Region: </label>
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
                <label htmlFor="model">Model: </label>
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
            </form>
            <table border="1">
                <thead>
                    <tr>
                        <th>Region</th>
                        <th>Model</th>
                        <th>Sales</th>
                    </tr>
                </thead>
                <tbody>{filteredTable}</tbody>
            </table>
        </div>
    );
}
