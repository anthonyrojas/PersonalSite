import {Link} from 'gatsby';
import React, {useRef, useState} from 'react';
import './layout.css'
export default function Navbar(props){
    const navListRef = useRef(false);
    const [navHeight, setNavHeight] = useState('0px');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [menuActive,setMenuActive] = useState(false);
    const onButtonClick = () => {
        setMenuActive(!menuActive);
        if(menuActive){
            setNavHeight('0px');
        }else{
            setNavHeight('100%')
        }
    }
    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateWindowWidth);
    return (
        <nav className='navbar'>
            <div className='navbar-title-container'>
                <span className='navbar-title'>Anthony Rojas</span>
            </div>
            <div className='navbar-controls-container'>
                <div className='navbar-menu-btn' onClick={onButtonClick}>
                    <div className={`menu-line ${menuActive ? 'nav-btn-active' : 'nav-btn-inactive'}`}></div>
                    <div className={`menu-line ${menuActive ? 'nav-btn-active' : 'nav-btn-inactive'}`}></div>
                    <div className={`menu-line ${menuActive ? 'nav-btn-active' : 'nav-btn-inactive'}`}></div>
                </div>
            </div>
            <ul className='nav-list' style={{height: windowWidth <= 500 ? navHeight: '50px' }} ref={navListRef}>
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
}