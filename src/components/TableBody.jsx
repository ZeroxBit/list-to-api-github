import React from 'react';


const TableBody = (props) => (
   
    <tr >
        <td className="td-foto"><img src={props.picture} alt={props.name} className="img-thumbnail tamaño-img" /></td>
        <td className="text-center pt-5" >{props.name} </td>
        <td className="text-center pt-5">{props.url}</td>
        {/* <td className="text-center pt-5">{props.repos}</td> */}
        <td className="text-center aling-vertical-btn">
            <button value={props.name} className="btn btn-success" onClick={props.searchUser}>{props.name}</button>
        </td>
    </tr>
    
)

export default TableBody;
