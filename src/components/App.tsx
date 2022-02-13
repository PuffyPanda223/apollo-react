//dependicies
import React from 'react';
import {NavLink, BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// components 
import Characters from './characters.page';
import About from './about.page';
const Header : React.FC = () => {
  return(
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to ="/">Home</NavLink>
          </li>
          <li>
            <NavLink to ="/characters">Something</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const App : React.FC= () => {
  return (
   <Router>
      <Header />
      <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/characters" element={<Characters />}/>
      </Routes>      
   </Router>
  );
}

export default App;
