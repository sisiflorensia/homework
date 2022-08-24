import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from '../images/magloft-circle small-01.png';
import './header.css'


class Header extends React.Component {
  render() {
    return (
      // Move all content between parentheses to here.
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
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
