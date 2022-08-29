import * as React from "react"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from '../images/magloft-circle small-01.png';
import './header.css'


class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hasScrolled : false,
      mivisionJoinDate: '2017-08-09'
    }
  }
    
  componentDidMount() {
    window.addEventListener(`scroll`, this.handleScroll)
  }
  
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({hasScrolled: true})
    } else {
      this.setState({hasScrolled: false})
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'header headerScrolled' : 'header' }>
        <div className="headerGroup">
          <Link to='/'><img className="logo" src={logo} alt="Design and Code logo"/></Link>
          <Link to='/'><a className={this.props.type === 'home' ? 'menuActive' : '' }>Home</a></Link>
          <Link to='/articles'>Articles</Link>
          {/* {this.state.mivisionJoinDate > '2016-08-07' ? <Link to='/articles'>Articles</Link> : ''} */}
          <Link to='/collections'>Collections</Link>
          <Link to='/account'>Account</Link>
          <Link to='/install'><button>INSTALL APP</button></Link>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  id: PropTypes.number,
  type: PropTypes.string // 'home', 'articles'
}

Header.defaultProps = {
  siteTitle: ``,
  id: 1,
}

export default Header
