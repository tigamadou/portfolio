import React from 'react';
import 'bulma/css/bulma.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Page from './../components/Page'
const images = require.context('./../images', true);
const defaultTemplate = (props) => (
    <div className={props.item.class} key={props.index}>
      <Page pageTitle="Projects"/>
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-7">
              <Zoom>
                <figure className="image ">
                  <img src={images(`./${props.item.images[0]}`)} alt={props.item.name} />
                </figure>
              </Zoom>
            </div>
            <div className="column">
              <Fade bottom >
                <h3 className="title">{props.item.name}</h3>
                <p className="description">
                  {props.item.description}
                </p>
                <ul className="technologies">
                  {props.item.technologies.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
                {renderLinks(props.item)}
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>

);

const variantTemplate = (props) => (
    <div className={props.item.class} key={props.index}>
      <div className="hero-body">
        <div className="container">
          <div className="columns project">
            <div className="column">
              <Fade bottom >
                <h3 className="title">
                  {props.item.name}
                  {' '}
                </h3>
                <p className="description">
                  {props.item.description}
                </p>
                <ul className="technologies">
                  {props.item.technologies.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
                {renderLinks(props.item)}
              </Fade>
            </div>
            <div className="column is-7">
              <Zoom>
                <figure className="image ">
                  <img src={images(`./${props.item.images[0]}`)} alt={props.item.name} />
                </figure>
              </Zoom>
            </div>

          </div>
        </div>
      </div>
    </div>

);
const Project = (props) => {
  let classNames = 'project hero is-fullheight ';

  if (props.item.class) {
    classNames += props.item.class;
  }
  props.item.class = classNames;
  if (props.index % 2 !== 0) {
    return (
      defaultTemplate(props)
    );
  }
  return (
    variantTemplate(props)
  );
};

let renderLinks = (item) => {
  const demo = (item) => {
    
    if (item.demo_link) {
      return (
        <a className="is-link" href={item.demo_link} target="_blank">
          Demo
        </a>
      );
    }
  };

  const github = (item) => {
    if (item.github_link) {
      return (
        <a className="is-link" href={item.github_link} target="_blank">
          GitHub
        </a>
      );
    }
  };

  const site = (item) => {
    if (item.site_link) {
      return (
        <a className="is-link">
          Visit Site
        </a>
      );
    }
  };

  return (
    <div className="links">
      {demo(item)}
      {github(item)}
      {site(item)}

    </div>
  );
};
export default Project;
