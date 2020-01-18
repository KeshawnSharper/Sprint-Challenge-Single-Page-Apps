import React,{useState,useEffect} from "react";
import jssPluginPropsSort from "jss-plugin-props-sort";
import Axios from "axios";

export default function EpisodeCard(props) {
  const [episode, setEpisode] = useState([])
  const [characters,setCharacters] = useState([])
  useEffect(() => {
   
  Axios.get(`https://rickandmortyapi.com/api/episode/${props.match.params.id}`
  )
  .then(res => {
      setCharacters(res.data.characters)
      setEpisode(res.data)})
  .catch(error => console.log(error))
  }, [])
console.log(characters.length)
  
  return (<div>
    
    <h2>Title: {episode.name}</h2>
   
    <p>Aired: {episode.air_date}</p>
   
     <p>Episode: {episode.episode}</p>

     <p>Characters: {characters.length}</p>
     
    </div>)
}
