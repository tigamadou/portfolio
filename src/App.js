import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Home from './views/Home';
import Projects from './views/Projects';
import About from './views/About';
import Contact from './views/Contact';

function App() {
  const [menuState, setMenuState] = useState('');

  const menuClicked = (menu) => {
    if (menu === 'open') {
      setMenuState('');
    } else {
      setMenuState('open');
    }
  };

  return (
    <Router>
      <nav className={`menu ${menuState}`} role="navigation" aria-label="main navigation">
        <div className="burger-container">

          <div className={`burger ${menuState}`} onClick={() => menuClicked(menuState)}>
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="menu-container">
          <Link to="/" className="menu-item" onClick={() => setMenuState('')}>Home</Link>
          <Link to="/projects" className="menu-item" onClick={() => setMenuState('')}>PROJECTS</Link>
          <Link to="/contact" className="menu-item" onClick={() => setMenuState('')}>CONTACT</Link>

        </div>

      </nav>
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
