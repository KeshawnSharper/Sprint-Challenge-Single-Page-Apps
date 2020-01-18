import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';

export default function CharacterCard() {
  const [characters, setCharacters] = useState([])
  const [result,setResult] = useState("")
  useEffect(() => {
    
  Axios.get("https://rickandmortyapi.com/api/character/"
  )
  .then(res => setCharacters(res.data.results))
  .catch(error => console.log(error))
  
  }, []);
  const handleChange = e => {
setResult(e.target.value)
  }
  const handleSubmit = e => {
    Axios.get(`https://rickandmortyapi.com/api/character/?name=${result}`
  )
  .then(res => setCharacters(res.data.results))
  .catch(error => console.log(error))
  e.preventDefault()
  }
  return (
   
   <form onSubmit={handleSubmit}>
     <button>Submit</button>
<input value={result} onChange={handleChange} name={"search"}/>
      {characters.map(i => <div key={i.id}><Link to={`/characters/${i.id}`}><span>{i.name}</span></Link><img src={i.image}></img><p>{i.status}</p></div>)}
    {/* <span>{props.character.name}</span>
    <img src={props.character.image} />
    <p>{props.character.species}{props.character.status}</p> */}
    
    </form>
    )


}
