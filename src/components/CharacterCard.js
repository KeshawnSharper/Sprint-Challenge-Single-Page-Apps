import React,{useState,useEffect} from "react";
import Axios from "axios"

export default function LocationCard(props) {
  const [character, setCharacter] = useState("")
  const [residents,setResidents] = useState([])
  const [result,setResult] = useState("")
useEffect(() => {
  
Axios.get(`https://rickandmortyapi.com/api/character/${props.match.params.id}`
)
.then(res => {
  console.log(res.data)
  setCharacter(res.data)})
.catch(error => console.log(error))

}, []);
  console.log(props.match.params.id)
  console.log(character)
  return (<div>
  
    <img src={character.image} />
    <br></br>
    <br></br>
    <span>{character.name}</span>
    <p>{character.species}</p>
    <p>{character.status}</p>
    
   </div>)
}
