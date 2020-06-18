import React from 'react';
import 'bulma/css/bulma.css'

let Navbar= ()=>{
    return (
        <nav className="navbar  is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
      <div className="container">

      

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-middle">
              <a className="navbar-item">
                Home
              </a>
              <a className="navbar-item">
                PROJECTS
              </a>
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
    )
}

export default Navbar;