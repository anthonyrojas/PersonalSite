import React, {Component} from 'react';
import './MainBanner.css';
const mainBanner = () =>(
  <div className="main-banner">
  <div className="overlay-blue fadeInDown">
    <div className="main-banner-content">
      <h1 className="main-banner-title">Anthony Rojas</h1>
      <p className="main-banner-caption">JavaScript programmer, RESTful API enthusiast, cat lover.</p>
    </div>
  </div>
  </div>
);

export default mainBanner;
