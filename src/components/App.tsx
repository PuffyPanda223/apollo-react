//dependicies
import React from 'react';
import {NavLink, BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// components 
import CharactersComponent from './characters.page';
import About from './about.page';
const Header : React.FC = () => {
  return(
    <div>
      <header style={{display:"grid"}}>
        <nav style={{float:"left"}}>
          <p><NavLink to ="/characters">Characters</NavLink></p>
          <p><NavLink to ="/">Home</NavLink></p>
        </nav>
      </header>
    </div>
  );
};

const App : React.FC= () => {
  return (
   <Router>
      <Header />
      <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/characters" element={<CharactersComponent />}/>
      </Routes>      
   </Router>
  );
}

export default App;
