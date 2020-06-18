import React from 'react';
import 'bulma/css/bulma.css';
import {

  Link,
} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const About = () => (
  <div>

    <div className="hero">
      <div className="hero-body">
        <Fade bottom>

          <h1 className="title has-text-centered has-text-uppercase is-size-1">About</h1>
        </Fade>
      </div>

    </div>

    <div className="hero is-light">
      <div className="hero-body">
        <div className="container">
          <h2 className="title">Technologies</h2>

        </div>
      </div>

    </div>
  </div>
);

export default About;
