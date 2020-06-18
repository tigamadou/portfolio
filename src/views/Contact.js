import React from 'react';
import 'bulma/css/bulma.css';
import Fade from 'react-reveal/Fade';
import {
  FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaSkype, FaDiscord,
} from 'react-icons/fa';
import ContactImg from '../images/contact.svg';

const Contact = () => {
  const Contacts = [
    {
      name: 'Gmail',
      image: 'FaEnvelope',
      link: 'mailto:amadou140589@gmail',
    },
    {
      name: 'Facebook',
      image: 'FaFacebook',
      link: 'https://facebook.com',
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
    if (props.item.image == 'FaFacebook') {
      return (
        <FaFacebook />
      );
    } if (props.item.image == 'FaTwitter') {
      return (
        <FaTwitter />
      );
    } if (props.item.image == 'FaLinkedIn') {
      return (
        <FaLinkedin />
      );
    }
    if (props.item.image == 'FaGithub') {
      return (
        <FaGithub />
      );
    }
    if (props.item.image == 'FaSkype') {
      return (
        <FaSkype />
      );
    }
    if (props.item.image == 'FaDiscord') {
      return (
        <FaDiscord />
      );
    }
    return (
      <FaEnvelope />
    );
  };
  const ContactElement = (props, index) => (
    <a className="contact" href={props.item.link} target="_blank">
      <Icon key={index} index={index} item={props.item} />
    </a>
  );
  return (
    <div>

      <div className="hero">
        <div className="hero-body">
          <Fade bottom>
            <h2 className="title has-text-centered has-text-uppercase is-size-1">Contact</h2>
          </Fade>
        </div>

      </div>
      <div className="hero is-light is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h1 className="title is-size-1 has-text-danger">Get in touch</h1>
                <p className="subtitle">
                  If you want to know more about me or my work, feel free to contact me on
                </p>
                <br />
                <br />
                <div className="contacts">

                  {renderContacts()}
                </div>
              </div>
              <div className="column">
                <div className="image">
                  <img src={ContactImg} />

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
