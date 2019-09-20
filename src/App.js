import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage'
import LocationsList from "./components/LocationsList"
import EpisodeList from "./components/EpisodeList"
import SearchForm from "./components/SearchForm.js";

export default function App() {

  const [name,setName] = useState([{}])
  return (
   

    <main>
      <Header />
      
      <TabNav /> 
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/locations" component={LocationsList} />
      <Route path="/episodes" component={EpisodeList} />
      <Route path="/search" component={SearchForm} />

    </main>
   
   
  );
}
