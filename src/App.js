import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage'
import LocationsList from "./components/LocationsList"
import LocationCard from "./components/LocationCard"
import CharacterCard from "./components/CharacterCard"
import EpisodeCard from "./components/EpisodeCard"
import EpisodeList from "./components/EpisodeList"
import SearchForm from "./components/SearchForm.js";

export default function App() {

  
  return (
   

    <main>
      <Header />
      
      <TabNav /> 
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Route exact path="/locations" component={LocationsList} />
      <Route exact path="/locations/:id" component={LocationCard} />
      <Route exact path="/episodes/:id" component={EpisodeCard} />
      <Route exact path="/characters/:id" component={CharacterCard} />
      <Route exact path="/episodes" component={EpisodeList} />

    </main>
   
   
  );
}
