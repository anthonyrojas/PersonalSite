import React from 'react';
import './Footer.css';
const Footer = (props) =>(
    <footer>
        <div className='row'>
            <div className='col-10 col-md-3 flex-center'>
                <a href='https://github.com/anthonyrojas?tab=repositories' target='_blank' rel='noopener noreferrer' className='footer-link'>
                    <i className='fab fa-github fa-4x'></i>
                </a>
            </div>
            <div className='col-10 col-md-4 flex-center'>
                <a href='mailto:anthony.rojas095@gmail.com' className='footer-link'>
                    <i className='far fa-envelope fa-4x'></i>
                </a>
            </div>
            <div className='col-10 col-md-3 flex-center'>
                <a href='https://www.linkedin.com/in/anthony-rojas-09/' target='_blank' rel='noopener noreferrer' className='footer-link'>
                    <i className='fab fa-linkedin fa-4x'></i>
                </a>
            </div>
        </div>
    </footer>
);
export default Footer;