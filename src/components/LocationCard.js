import React,{useState,useEffect} from "react";
import Axios from "axios"

export default function LocationCard(props) {
  const [location, setLocation] = useState("")
  const [residents,setResidents] = useState([])
  const [result,setResult] = useState("")
useEffect(() => {
  
Axios.get(`https://rickandmortyapi.com/api/location/${props.match.params.id}`
)
.then(res => {
  console.log(res.data)
  setResidents(res.data.residents)
  setLocation(res.data)})
.catch(error => console.log(error))

}, []);
  console.log(props.match.params.id)
  console.log(residents.length)
  return(<div>
    <br></br>
    <br></br>
   <span>Location: {location.name}</span>
   <br></br>
   <br></br>
     <span>Type: {location.type}</span>
     <br></br>
     <br></br>
    <span>Dimension: {location.dimension}</span>
    <br></br>
    <br></br>
     <span>Residents: {residents.length}</span>
    
  </div>)
}
