import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {CSSTransition} from 'react-transition-group';
class Navbar extends Component{
    state={
        navVisibility: false
    }
    toggleNav(e){
        this.setState({
            ...this.state,
            navVisibility: !this.state.navVisibility
        });
    }
    render(){
        return(
            <React.Fragment>
                <CSSTransition in={this.state.navVisibility} timeout={750} classNames='nav-slide' unmountOnExit>
                    <nav>
                        <ul>
                            <li><Link className='nav-link' to='/' onClick={this.toggleNav.bind(this)}>About</Link></li>
                            <li><Link className='nav-link' to='/education' onClick={this.toggleNav.bind(this)}>Education</Link></li>
                            <li><Link className='nav-link' to='/projects' onClick={this.toggleNav.bind(this)}>Projects</Link></li>
                            <li><Link className='nav-link' to='/work' onClick={this.toggleNav.bind(this)}>Work</Link></li>
                        </ul>
                    </nav>
                </CSSTransition>
                <button className='nav-btn ripple-nav-btn' onClick={this.toggleNav.bind(this)}><i className='fas fa-bars'></i></button>
            </React.Fragment>
        );
    }
}
export default Navbar;