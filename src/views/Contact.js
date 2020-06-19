import React from 'react';
import 'bulma/css/bulma.css';
import Fade from 'react-reveal/Fade';
import {
  FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaSkype, FaDiscord,
} from 'react-icons/fa';
import ContactImg from '../images/contact.svg';
import Page from './../components/Page'
const Contact = () => {
  const Contacts = [
    {
      name: 'Gmail',
      image: 'FaEnvelope',
      link: 'mailto:ibrahimtigamadou@gmail.com',
    },
    {
      name: 'Linkedin',
      image: 'FaLinkedIn',
      link: 'https://www.linkedin.com/in/amadou-ibrahim/',
    },
    {
      name: 'Twitter',
      image: 'FaTwitter',
      link: 'https://twitter.com/tigamadou',
    },
    {
      name: 'GitHub',
      image: 'FaGithub',
      link: 'https://github.com/tigamadou',
    },
    {
      name: 'FaSkype',
      image: 'FaSkype',
      link: 'skype:tigamadou?chat',
    },
    {
      name: 'FaDiscord',
      image: 'FaDiscord',
      link: 'discord:tigamadou?chat',
    },
  ];

  const renderContacts = () => Contacts.map((element, index) => (
    <ContactElement key={index} index={index} item={element} />
  ));
  const Icon = (props) => {
    if (props.item.image === 'FaFacebook') {
      return (
        <FaFacebook />
      );
    } if (props.item.image === 'FaTwitter') {
      return (
        <FaTwitter />
      );
    } if (props.item.image === 'FaLinkedIn') {
      return (
        <FaLinkedin />
      );
    }
    if (props.item.image === 'FaGithub') {
      return (
        <FaGithub />
      );
    }
    if (props.item.image === 'FaSkype') {
      return (
        <FaSkype />
      );
    }
    if (props.item.image === 'FaDiscord') {
      return (
        <FaDiscord />
      );
    }
    return (
      <FaEnvelope />
    );
  };
  const ContactElement = (props, index) => (
    <a className="contact" href={props.item.link} target="_blank"  rel="noopener noreferrer">
      <Icon key={index} index={index} item={props.item} />
    </a>
  );
  return (
    <div>
      <Page pageTitle="Contact"/>
      <div className="hero">
        <div className="hero-body">
          <Fade bottom>
            <h1 className="title has-text-centered has-text-uppercase is-size-1">Contact</h1>
          </Fade>
        </div>

      </div>
      <div className="hero is-light is-medium contactsection">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <Fade bottom >

                
                <h2 className="title is-size-1 has-text-danger">Get in touch</h2>
                <br/>
                <p className="subtitle">
                  Did I sound like a great fit for an opportunity? Thus, don't hesitate to get in contact now: 
                </p>
                <p className="contactMail">
                  ibrahimtigamadou@gmail.com

                </p>
                <br />
                <br />
                <div className="contacts">

                  {renderContacts()}
                </div>
                </Fade>
              </div>
              <div className="column">
                <Fade bottom>
                <div className="image">
                  <img src={ContactImg} alt="Contact"/>

                </div>
                </Fade>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
