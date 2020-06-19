import React from 'react';
import Project from '../components/Project';
import 'bulma/css/bulma.css';
import Fade from 'react-reveal/Fade';

const projectList = [
  {
    name: 'Shop Template',
    description: 'This Project is my Html/Css project for Capstone projects by Microverse. The pages built are for an online electronics shop and the users will be able to browse the products by category and also see the product details page.',
    images: [
      'shop-1.png', 'shop-2.png',
    ],
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    class: 'is-light',
    demo_link: 'https://rawcdn.githack.com/genzaraki/shoptemplate/c3a12d5c081d2b240f7ff6834a62bf97efebc885/index.html',
    github_link: 'https://github.com/tigamadou/shoptemplate',
  },
  {
    name: 'Ashu Social NetWork',
    description: 'Ashu is a Twitter-like social network where users can create, comment and like posts, but also follow other users. This app is build with Ruby On Rails.',
    images: [
      '2.png', 'shop-2.png',
    ],
    technologies: ['Ruby', 'Ruby on Rails', 'Html/Erb', 'Css', 'Javascript'],
    class: 'is-danger',
    demo_link: 'https://blooming-escarpment-87825.herokuapp.com/users/sign_in',
    github_link: 'https://github.com/tigamadou/ashu-social-network',

  },
  {
    name: 'Human Right Talks',
    description: 'Hrt is a Twitter like social Network. The user can create post, comment, like and follow other users.',
    images: [
      'hrt.png', 'shop-2.png',
    ],
    technologies: ['Ruby', 'Ruby on Rails', 'Html/Erb', 'Css', 'Javascript'],
    class: 'is-white',
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
