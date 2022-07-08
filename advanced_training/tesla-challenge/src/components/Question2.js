import React,{useState,useEffect} from 'react'
import teslaData from '../teslaData'

export default function Question2() {
    const [regionSelect, setRegionSelect] = useState("");
    const [modelSelect, setModelSelect] = useState("");
    
        const allData = teslaData.map((data, i) => {
        return (
            <tr key={i}>
            <td>{data.region}</td>
            <td>{data.model}</td>
            <td>{data.sales}</td>
            </tr>
        );
        });
    
        const regionFilter = teslaData.map((data, i) => {
        if (data.region === regionSelect || data.model === modelSelect) {
            return (
            <tr key={i}>
                <td>{data.region}</td>
                <td>{data.model}</td>
                <td>{data.sales}</td>
            </tr>
            );
        } else if (regionSelect === "ALL" || modelSelect === "ALL") {
            return (
            <tr key={i}>
                <td>{data.region}</td>
                <td>{data.model}</td>
                <td>{data.sales}</td>
            </tr>
            );
        }
        });
    
        // const modelFilter = teslaData.map((data,i)=>{
    
        // })
    
        useEffect(() => {
        if (regionSelect || modelSelect) {
            setDisplayData(regionFilter);
        } else if (!regionSelect) {
            setDisplayData(allData);
        }
    
        // sumFn();
        }, [regionSelect, modelSelect]);
    
        const [displayData, setDisplayData] = useState(allData);
    
        return (
        <div className="x">
            <div className="selection-box">
            {/* region filter */}
            <p>Region: </p>
            <select
                onChange={(e) => {
                setRegionSelect(e.currentTarget.value);
                }}
            >
                <option value="ALL">ALL</option>
                <option value="US">US</option>
                <option value="EU">EU</option>
                <option value="CA">CA</option>
            </select>
            {/* model filter */}
            <p>Model: </p>
            <select
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
                {displayData}
            </tbody>
            </table>
        </div>
    );
}
