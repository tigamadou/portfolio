import React from 'react';
import 'bulma/css/bulma.css'
import './App.css';
import Navbar from './components/NavBar'

import Projects from './views/Projects';
function App() {
  return (
    <div>

      <Navbar />
      <div className="hero is-dark is-large  main-hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-spaced full-name">Amadou IBRAHIM</h1>
            <div className="subtitle">
              <p>
                I'm a Full-Stack Developper based in Benin Republic and thisis my PortFolio
              </p>       

            </div>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-body">
          <h2 className="title has-text-centered has-text-uppercase">Projects</h2>
        </div>

      </div>
      <Projects/>
      
   
    </div>
  );
}

export default App;
