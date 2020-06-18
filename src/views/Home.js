import React from 'react';
import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Web from '../images/web.svg';

const Home = () => (

  <div className="hero  is-fullheight  main-hero">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-5">
            <Fade bottom cascade>

              <h1 className="title is-spaced full-name">
                <span>Amadou</span>
                {' '}
                <span className="last-name has-text-danger">IBRAHIM</span>
              </h1>
              <div className="subtitle">
                <p>
                  I'm a Full-Stack Developer based in Benin Republic and thisis my PortFolio
                </p>
                <br />
                <br />
                <div className="buttons">

                  <Link className="button  " to="/projects">
                    Projects
                  </Link>

                  <Link className="button   " to="/contact">
                    Contacts
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
          <div className="column">
            <Zoom>

              <div className="image">
                <img src={Web} />
              </div>
            </Zoom>
          </div>
        </div>

      </div>
    </div>
  </div>

);

export default Home;
