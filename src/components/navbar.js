import {Link} from 'gatsby';
import React from 'react';
import './layout.css'
const Navbar = (props) => (
    <nav className='navbar'>
        <ul className='nav-list'>
            <li className='nav-list-item'>
                <Link className='nav-link' to='/'>About</Link>
            </li>
            <li className='nav-list-item'>
                <Link className='nav-link' to='/projects'>Projects</Link>
            </li>
            <li className='nav-list-item'>
                <Link className='nav-link' to='/education'>Education</Link>
            </li>
            <li className='nav-list-item'>
                <Link className='nav-link' to='/work'>Work</Link>
            </li>
        </ul>
    </nav>
);
export default Navbar;