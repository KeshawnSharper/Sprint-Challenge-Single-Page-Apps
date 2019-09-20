import React, { useEffect, useState } from "react";
import Axios from "axios";
import EpisodeCard from "./EpisodeCard"


export default function LocationsList() {
    const [episodes, setEpisodes] = useState([])
  useEffect(() => {
   
  Axios.get("https://rickandmortyapi.com/api/episode/"
  )
  .then(res => setEpisodes(res.data.results))
  .catch(error => console.log(error))
  
  }, []);
console.log(episodes)
  return (
    <section className="location-list grid-view">
      {episodes.map(episode=> <EpisodeCard key={episode.id} episodes={episode} /> )}
    </section>
  );
}
