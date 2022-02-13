//dependicies
import React from 'react';
import {NavLink, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ApolloProvider} from '@apollo/client';
// components 
import CharactersComponent from './components/characters.page';
import About from './about.page';
import client from './common/apollo-client';
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
    <ApolloProvider client = {client} >
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<About/>}/>
              <Route path="/characters" element={<CharactersComponent />}/>
          </Routes>      
      </Router>
    </ApolloProvider>
  );
}

export default App;
