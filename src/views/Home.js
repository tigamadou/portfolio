import React from 'react';
import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Web from '../images/web.svg';
import Page from './../components/Page'
const Home = () => (

  <div className="hero  is-medium  main-hero">
    <Page pageTitle="Full-Stack Developer"/>
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <Fade bottom>
              <p className="subtitle">Hey, I'm a</p>
              <h1 className="title is-spaced full-name">
                <span>Full-Stack </span>
                {' '}
                <span className="last-name has-text-danger">Developer</span>
              </h1>
              <div className="subtitle">
                <p>
                  I'm a passionate self-taught developer with an operational problem-solving approach. 
                 
                </p>
                <p>
                I design, build, test, deploy awesome apps for great user experience, and this, efficiently.
                </p>
                <p>
                  Have a project, an Idea, an opportunity, or just want to say hi? 
                </p>
                <Link className=" has-text-danger is-link " to="/contact">
                    Contact me now
                  </Link>
                <br />
                <br />
                <div className="buttons">

                  <Link className="has-text-dark  is-small" to="/projects">
                    Here are my recent Projects
                  </Link>

                  
                </div>
              </div>
            </Fade>
          </div>
          <div className="column">
            <Zoom>

              <div className="image">
                <img src={Web} alt="Web developer svg"/>
              </div>
            </Zoom>
          </div>
        </div>

      </div>
    </div>
  </div>

);

export default Home;
