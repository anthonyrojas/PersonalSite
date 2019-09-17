import React from "react"
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navbar from './navbar'
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className='row'>
        <div className='container'>
          {children}
        </div>
      </main>
      <footer>
        <div className='row'>
          <div className='footer-col'>
            <a href='https://www.linkedin.com/in/anthony-rojas-09/' target='_blank' className='footer-link'>
              <i className="fab fa-5x fa-linkedin"></i>
            </a>
          </div>
          <div className='footer-col'>
            <a href='mailto:contact@arojas.dev' target='_blank' className='footer-link'>
              <i className="fas fa-5x fa-envelope"></i>
            </a>
          </div>
          <div className='footer-col'>
            <a href='https://github.com/anthonyrojas' target='_blank' className='footer-link'>
              <i className="fab fa-5x fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
