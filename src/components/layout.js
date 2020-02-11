/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

import Header from "./header"
import "./layout.css"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f9c6a2;
    margin: 0;
    padding:0;
  }
  header {
    width: 100%;
    margin: 0 0 96px 0;
    padding: 32px 32px;
  }
  h1 > a {
    color:#1e1e1e;
  }
  a {
    text-decoration: none;
  }
  .content {
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    padding: 30px;
  }
  footer {bottom:8px}
  main {
    height:100%;
    width:100%;
  }
  @media (min-width: 576px) { 
    .content {
    padding: 64px;
  }
 }
`

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
      <GlobalStyle />
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div className="content">
        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> by rosc
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
