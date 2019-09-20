import React,{useState} from "react";


export default function LocationCard(props) {

  
  return (<div className="grid-view">
    <span>{props.location.name}</span>
    <span>{props.location.type}</span>
    <span>{props.location.dimension}</span>
    <button>{props.location.residents.length}</button>
    
  </div>)
}
