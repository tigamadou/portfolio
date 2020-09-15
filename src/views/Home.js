import React from 'react';
import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Web from '../images/web.svg';
import Page from './../components/Page'
import Lottie from 'react-lottie';
import developerLottie from './../lotties/developer.json';

export default function Home (){

  return(

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
                I design, build, test, deploy YOUR awesome apps with great user experience and efficiency  in mind.
                </p>
                <p>
                  Do you have a project, an idea, an opportunity, or just want to say hi? 
                </p>
                <Link className=" has-text-danger is-link " to="/contact">
                  Let's talk!
                  </Link>
                <br />
                <br />
                <div className="buttons">

                  <Link className="has-text-dark  is-small" to="/projects">
                    Here are my most recent Projects
                  </Link>

                  
                </div>
              </div>
            </Fade>
          </div>
          <div className="column">
            <Zoom>

              <div className="image">
                {/* <img src={Web} alt="Web developer svg"/> */}
                <Lottie 
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: developerLottie,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice"
                    }}
                  }
                    
                    width="100%"
                  />
                
              </div>
            </Zoom>
          </div>
        </div>

      </div>
    </div>
  </div>
  )

}


