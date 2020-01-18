import React from "react";

import { NavLink } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/


//<NavLink to="/character">Characters</NavLink> 
    
export default function TabNav() {
   
   return (
     <nav>
       <NavLink to="/">Home</NavLink>
       <NavLink to="/characters">Characters</NavLink> 
       <NavLink to="/locations">Locations</NavLink>
       <NavLink to="/episodes">Episodes</NavLink>
     </nav>
   )

      
      
      
};
