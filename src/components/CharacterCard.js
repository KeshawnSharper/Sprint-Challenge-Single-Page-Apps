import React from "react";

export default function CharacterCard(props) {
  console.log(props.character)
  return (
   <div>
    <span>{props.character.name}</span>
    <img src={props.character.image} />
    <p>{props.character.species}{props.character.status}</p>
    </div>
    )


}
