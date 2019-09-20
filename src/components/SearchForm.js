import React, { useState } from "react";
import styled from 'styled-components'

import Axios from "axios";


const FirstLabel = styled.label`
display:block;
margin-bottom:3rem;
      `
      const SecondLabel = styled.label`
display:block;
margin-left:1rem;
margin-bottom:3rem;
      `
      const ThridLabel = styled.label`
display:block;
margin-left:-2rem;
margin-bottom:3rem;
      `
      const FirstInput = styled.input`
padding:0.5rem;
display:block;
margin-left:28rem
margin-top:1rem;
padding-left:10rem;
padding-right:10rem;
      `
      const SecInput = styled.input`
padding:0.5rem;
display:block;
margin-left:27rem
margin-top:1rem;
padding-left:10rem;
padding-right:10rem;
      `
      const ThrInput = styled.input`
padding:0.5rem;
display:block;
margin-left:30rem
margin-top:1rem;
padding-left:10rem;
padding-right:10rem;
      `
     const FirstP = styled.p`
     margin-left:-1rem;
     `
     const SecondP = styled.p`
     margin-left:-1rem;
     `
     const ThridP = styled.p`
     margin-left:1.3rem;
     `


const Input = props => {
    console.log("props",props);
    const [user,setUser] = useState({name:"",role:"",Experience:""})
   const [characters,setCharacters] =useState([])
    const handleChanges = event => {
        setUser({...user, [event.target.name]: event.target.value});

      };
      
const handleSubmit = event => {
        event.preventDefault();
        console.log(user);
        Axios.get(`https://rickandmortyapi.com/api/character/?name=${user.name}`)
        .then(res => {            
           
            setCharacters(res.data.results)
      })
        .catch(error => console.log(error))
        setUser({name:"",role:"",Experience:""})
        
        
        
      };

 


    return(
   
      <div>
<form onSubmit={handleSubmit}>
<FirstLabel>
    <FirstP>Name:</FirstP>
    <FirstInput 
    id="title"
    name="name"
     type="text" 
     onChange = { handleChanges}
      value={user.name} ></FirstInput>
</FirstLabel>

<button>Submit!</button>
</form>

{characters.map(character => (<div key={character.id}><p>{character.name}</p></div>))}

</div>)
}
export default Input