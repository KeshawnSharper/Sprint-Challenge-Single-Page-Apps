import React,{useState} from "react";
import jssPluginPropsSort from "jss-plugin-props-sort";
import Axios from "axios";

export default function EpisodeCard(props) {

  
  return (<div className="grid-view">
    <h2>{props.episodes.name}</h2>
    <span>{props.episodes.air_date}</span>
     <span>{props.episodes.episode}</span>
     <button>{props.episodes.characters.length}</button>
  </div>)
}
