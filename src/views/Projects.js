import React from 'react';
import Project from '../components/Project';
import 'bulma/css/bulma.css';
import Fade from 'react-reveal/Fade';

const projectList = [
  {
    name: 'PortFolio',
    description: 'This is my Portfolio web app Project. The Portfolio is built with ReactJS, and Bulma CSS Framework.',
    images: [
      'react.png', 'shop-2.png',
    ],
    technologies: ['HTML', 'CSS', 'JAVASCRIPT','REACTJS','BULMA'],
    class: 'is-light',
    demo_link: '/',
    github_link: 'https://github.com/tigamadou/portfolio',
  },
  {
    name: 'Shop Template',
    description: 'This Project is my HTML/CSS project for Capstone projects by Microverse. The pages were built for an online electronics shop where users will be able to browse products by category and access detailed product pages.',
    images: [
      'shop-1.png', 'shop-2.png',
    ],
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    class: 'is-white',
    demo_link: 'https://rawcdn.githack.com/genzaraki/shoptemplate/c3a12d5c081d2b240f7ff6834a62bf97efebc885/index.html',
    github_link: 'https://github.com/tigamadou/shoptemplate',
  },
  {
    name: 'Ashu Social NetWork',
    description: 'Ashu is a Twitter-like social network where users can create, comment and like posts, but also follow other users. This app is built with Ruby On Rails.',
    images: [
      '2.png', 'shop-2.png',
    ],
    technologies: ['RUBY', 'RoR', 'HTML/ERB', 'CSS', 'JAVASCRIPT','BULMA'],
    class: 'is-danger ',
    demo_link: 'https://blooming-escarpment-87825.herokuapp.com/users/sign_in',
    github_link: 'https://github.com/tigamadou/ashu-social-network',

  },
  {
    name: 'Human Right Talks',
    description: 'Hrt is a social network with Twitter-like functionnality. The user can create posts, comment, like, and follow other users. This app is built with Ruby On Rails.',
    images: [
      'hrt.png', 'shop-2.png',
    ],
    technologies: ['RUBY', 'RoR', 'HTML/ERB', 'CSS', 'JAVASCRIPT'],
    class: 'is-light',
    demo_link: 'https://thawing-wave-61294.herokuapp.com/',
    github_link: 'https://github.com/tigamadou/hrt',

  },
];

const Projects = () => (
  <div className="hero">
    <div className="hero-body">
      <Fade bottom>
        <h1 className="title has-text-centered has-text-uppercase is-size-1">Projects</h1>
      </Fade>
    </div>

    {renderProjects()}
  </div>
);

let renderProjects = () => projectList.map((data, index) => (

  <Project key={index} index={index + 1} item={data} />

));

export default Projects;
