import React, { useState } from 'react';
import Project from './../components/Project'
import 'bulma/css/bulma.css'
const projectList = [
    {
        name:'Shop Template',
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, quo. Vero odit consectetur, quo optio necessitatibus delectus tempore, alias blanditiis explicabo, sit harum aspernatur officiis fugit. Quibusdam blanditiis odit corporis?",
        images:[
            'shop-1.png','shop-2.png'
        ],
        technologies:['HTML','CSS','JAVASCRIPT'],
        class:'is-light'
    },
    {
        name:'Ashu Social NetWork',
        description:"Ashu is a Twitter-like social network where users can create, comment and like posts, but also follow other users. This app is build with Ruby On Rails.",
        images:[
            '2.png','shop-2.png'
        ],
        technologies:['Ruby','Ruby on Rails','Html/Erb','Css','Javascript'],
        class:'is-danger',
        demo_link:'https://blooming-escarpment-87825.herokuapp.com/users/sign_in',
        github_link:'https://github.com/tigamadou/ashu-social-network'
        
        
    }
];

let Projects = ()=>{
    
    return(
         renderProjects() 
    )
}

let renderProjects = ()=>{
    return projectList.map( (data,index) =>{
        
        return (
            <Project key={index} index={index+1} item={data}/>
        )
    })
}


export default Projects;