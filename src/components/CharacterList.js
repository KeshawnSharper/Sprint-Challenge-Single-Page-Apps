import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard"

export default function CharacterList() {

const [characters, setCharacters] = useState([])
  useEffect(() => {
    
  Axios.get("https://rickandmortyapi.com/api/character/"
  )
  .then(res => setCharacters(res.data.results))
  .catch(error => console.log(error))
  
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map(character => <CharacterCard key={character.id} character={character}  />)}
    </section>
  );
}
