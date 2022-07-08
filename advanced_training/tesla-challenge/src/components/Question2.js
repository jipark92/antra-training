import React,{useState,useEffect} from 'react'
import teslaData from '../teslaData'

export default function Question2() {
    const [regionSelect, setRegionSelect] = useState("");
    const [modelSelect, setModelSelect] = useState("");

    const defaultTable = teslaData.map((data,i)=>{
        return(
            <tr key={i}>
                <td>{data.region}</td>
                <td>{data.model}</td>
                <td>{data.sales}</td>
            </tr>
        )
    })
    
    const filteredTable = teslaData.filter(data=>{

        const {region,model,sales} = data

        if(region === regionSelect || model === modelSelect){
            return region
        }
        if(regionSelect === "ALL" || modelSelect === "ALL"){
            return region
        }
    }).map((data,i)=>{
        return (
            <tr key={i}>
                <td>{data.region}</td>
                <td>{data.model}</td>
                <td>{data.sales}</td>
            </tr>
        )
    })

    const [renderTable, setRenderTable] = useState(defaultTable)

    useEffect(()=>{
        if(modelSelect||regionSelect){
            setRenderTable(filteredTable)
        }
        if(!modelSelect&&!regionSelect){
            setRenderTable(defaultTable)
        }
    },[regionSelect,modelSelect])

    return (
        <div>
            <select
                onChange={(e) => {setRegionSelect(e.currentTarget.value)}}
                >
                <option value="ALL">ALL</option>
                <option value="US">US</option>
                <option value="EU">EU</option>
                <option value="CA">CA</option>
            </select>
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
