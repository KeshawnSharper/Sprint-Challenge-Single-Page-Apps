import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import LocationCard from "./LocationCard"


export default function LocationsList() {
    const [locations, setLocations] = useState([])
    const [result,setResult] = useState("")
  useEffect(() => {
    
  Axios.get("https://rickandmortyapi.com/api/location/"
  )
  .then(res => setLocations(res.data.results))
  .catch(error => console.log(error))
  
  }, []);
  const handleChange = e => {
    setResult(e.target.value)
      }
      const handleSubmit = e => {
        Axios.get(`https://rickandmortyapi.com/api/location/?name=${result}`
      )
      .then(res => setLocations(res.data.results))
      .catch(error => console.log(error))
      e.preventDefault()
      }
console.log(locations)
  return (
    <form onSubmit={handleSubmit}><button>Submit</button>
    <input value={result} onChange={handleChange} name={"search"}/>
      {locations.map(location=> <div key={location.id}><Link to={`/locations/${location.id}`}>
      <span>{location.name}</span>
    <span>{location.type}</span>
    <span>{location.dimension}</span>
    <button>{location.residents.length}</button> 
    </Link>
    </div> )}
    </form>
  );
}
