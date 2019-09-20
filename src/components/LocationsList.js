import React, { useEffect, useState } from "react";
import Axios from "axios";
import LocationCard from "./LocationCard"


export default function LocationsList() {
    const [locations, setLocations] = useState([])
  useEffect(() => {
    
  Axios.get("https://rickandmortyapi.com/api/location/"
  )
  .then(res => setLocations(res.data.results))
  .catch(error => console.log(error))
  
  }, []);
console.log(locations)
  return (
    <section className="location-list grid-view">
      {locations.map(location=> <LocationCard key={location.id} location={location} /> )}
    </section>
  );
}
