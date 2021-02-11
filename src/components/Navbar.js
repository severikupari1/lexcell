import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import nav from '../data/navbar'
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      activeLanguage: 'fi',
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {

    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            { nav.map(item => (
                item.lang === this.state.activeLanguage ? item.logo.map(linkItem => (
                    <Link className="navbar-item" to={ linkItem.href }>
                      <img src={logo} alt={linkItem.title} style={{ width: '88px' }} />
                    </Link>
                )) : <div></div>
            )) }
            {/* Hamburger menu */}
            <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          { nav.map(item => (
              item.lang === this.state.activeLanguage ?
              <div
                  id="navMenu"
                  className={ `navbar-menu ${ this.state.navBarActiveClass }` }
              >
                <div className="navbar-start has-text-centered">
                  {
                     item.nav.map(linkItem => (
                            <Link className="navbar-item" to={linkItem.href}>
                              { linkItem.title }
                            </Link>
                    ))
                  }
                </div>
              </div> : <div> </div>
          )) }
          <LanguageSwitcher></LanguageSwitcher>
        </div>
      </nav>
    )
  }
}

export default Navbar
