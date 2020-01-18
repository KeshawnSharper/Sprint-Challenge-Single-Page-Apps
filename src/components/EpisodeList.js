import React,{useState,useEffect} from "react";
import jssPluginPropsSort from "jss-plugin-props-sort";
import { Link } from 'react-router-dom';
import Axios from "axios";

export default function EpisodeCard(props) {
  const [episodes, setEpisodes] = useState([])
  const [result,setResult] = useState("")
  useEffect(() => {
   
  Axios.get("https://rickandmortyapi.com/api/episode/"
  )
  .then(res => setEpisodes(res.data.results))
  .catch(error => console.log(error))
  }, [])
  const handleChange = e => {
    setResult(e.target.value)
      }
      const handleSubmit = e => {
        Axios.get(`https://rickandmortyapi.com/api/episode/?name=${result}`
      )
      .then(res => setEpisodes(res.data.results))
      .catch(error => console.log(error))
      e.preventDefault()
      }
  
  return (<form onSubmit={handleSubmit}><button>Submit</button>
  <input value={result} onChange={handleChange} name={"search"}/>
    {episodes.map(i => <div key={i.id}>
    <Link to={`/episodes/${i.id}`}><h2>{i.name}</h2>
    </Link>
    <span>{i.air_date}</span>
     <span>{i.episode}</span>
     <button>{i.length}</button>
     
    </div>)}
  </form>)
}
