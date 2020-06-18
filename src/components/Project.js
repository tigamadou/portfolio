import React from 'react';
import 'bulma/css/bulma.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
const images = require.context('./../images', true);
let Project = (props) => {
    let class_names = 'project hero is-fullheight '


    if (props.item.class) {
        class_names += props.item.class
    }
    props.item.class = class_names
    if (props.index % 2 != 0) {
        return (
            defaultTemplate(props)
        )
    } else {
        return (
            variantTemplate(props)
        )
    }
}


let defaultTemplate = (props) => {

    return (
        <div className={props.item.class} key={props.index}>
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column is-7">
                            <Zoom>
                                <figure className="image ">
                                    <img src={images('./' + props.item.images[0])} alt={props.item.name} />
                                </figure>
                            </Zoom>
                        </div>
                        <div className="column">
                            <Fade bottom cascade>
                                <h3 className="title">{props.item.name} </h3>
                                <p  className="description">
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

    )
}

let variantTemplate = (props) => {
    return (
        <div className={props.item.class} key={props.index}>
            <div className="hero-body">
                <div className="container">
                    <div className="columns project">
                        <div className="column">
                            <Fade bottom cascade>
                                <h3 className="title">{props.item.name} </h3>
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
                                    <img src={images('./' + props.item.images[0])} alt={props.item.name} />
                                </figure>
                            </Zoom>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

let renderLinks = (item) => {
    let demo = (item) => {
        console.log(item)
        if (item.demo_link) {
            return (
                <a className="is-link" href={item.demo_link} target="_blank">
                    Demo
                </a>
            )
        }
    }

    let github = (item) => {
        if (item.github_link) {
            return (
                <a className="is-link" href={item.github_link} target="_blank">
                    GitHub
                </a>
            )
        }
    }

    let site = (item) => {
        if (item.site_link) {
            return (
                <a className="is-link">
                    Visit Site
                </a>
            )
        }
    }

    return (
        <div className="links">
            {demo(item)}
            {github(item)}
            {site(item)}

        </div>
    )
}
export default Project;