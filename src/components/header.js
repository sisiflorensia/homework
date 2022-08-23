import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from '../images/DesignCode-Logo-White.png';
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="headerGroup">
      <Link to="/"><img className="logo" src={logo} alt="Design and Code logo"/></Link>
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/collections">Collections</Link>
      <Link to="/account">Account</Link>
      <Link to="/install"><button>INSTALL APP</button></Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
