import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`
const Logo = styled.h1`
  color: red ;
  text-decoration: none;
  margin-bottom: 96px;
`

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Logo>
        <Link to="/">
          {siteTitle}
        </Link>
      </Logo>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
