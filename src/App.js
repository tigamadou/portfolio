import React from 'react';
import 'bulma/css/bulma.css'
import './App.css';
import Navbar from './components/NavBar'
import Home from './views/Home';
import Projects from './views/Projects';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <nav className="navbar  is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
                <div className="container">



                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-middle">
                            <Link to="/" className="navbar-item">Home</Link>
                            <Link to="/projects" className="navbar-item">PROJECTS</Link>
                           
                           
                            <a className="navbar-item">
                                ABOUT
                </a>
                            <a className="navbar-item">
                                CONTACT
                </a>
                        </div>
                    </div>

                </div>
            </nav>
      <Switch>
        
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
