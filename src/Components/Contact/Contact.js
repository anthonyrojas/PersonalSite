import React from 'react';
import './Contact.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/fontawesome-free-solid';
import {faGithub, faLinkedin} from '@fortawesome/fontawesome-free-brands';
const Contact = () =>(
  <div className="contact-row">
    <div className="contact-header">
      <h className="contact-header-title">Contact Info</h>
      <p>anthony.rojas095@gmail.com</p>
      <p className="contact-header-info">Always feel free to contact me on any platforms below. I'm open to talking about anything related to my projects, school, programming, or joining a team to bring a app idea to life. You may of course ask for my resume if you are an employer.</p>
    </div>
    <div className="contact-item">
      <div className="contact-item-border">
        <a href="https://www.github.com/anthonyrojas" target="_blank" className="contact-item-link">
          <FontAwesomeIcon icon={faGithub} className="contact-item-logo"/>
        </a>
      </div>
    </div>
    <div className="contact-item">
      <div className="contact-item-border">
        <a href="mailto:anthonyrojas095@gmail.com" className="contact-item-link">
          <FontAwesomeIcon icon={faEnvelope} className="contact-item-logo"/>
        </a>
      </div>
    </div>
    <div className="contact-item">
      <div className="contact-item-border">
        <a href="https://www.linkedin.com/in/anthony-rojas-106322b2/" target="_blank" className="contact-item-link">
          <FontAwesomeIcon icon={faLinkedin} className="contact-item-logo"/>
        </a>
      </div>
    </div>
  </div>
);
export default Contact;