import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './layout.css';

const Header = ({ siteTitle }) => (
  <header>
    <div
     className='header-overlay'
    >
      <h1 className='header-title'>
        {siteTitle}
      </h1>
      <h2 className='header-subtitle'>
        Software developer, Web developer, Javascript programmer.
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
