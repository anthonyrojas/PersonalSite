import React from 'react';
import './Header.css';
const Header = (props)=>(
    <header className='Header'>
        <div className='header-overlay'>
            <h1 id='header-name'>Anthony Rojas</h1>
            <h3 id='header-caption'>Software Developer, Web Developer, Javascript Programmer.</h3>
        </div>
    </header>
);
export default Header;