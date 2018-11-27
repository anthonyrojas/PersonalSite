import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
const Navbar = (props) =>(
    <nav style={props.visible ? {left: 0} : {left: '-20em'}}>
        <ul>
            <li><Link className='nav-link' to='/'>About</Link></li>
            <li><Link className='nav-link' to='/education'>Education</Link></li>
            <li><Link className='nav-link' to='/projects'>Projects</Link></li>
            <li><Link className='nav-link' to='/work'>Work</Link></li>
        </ul>
    </nav>
);
export default Navbar;