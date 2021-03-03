import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import nav from '../data/navbar'
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      active: false,
      activeLanguage: this.props.lang,
      navBarActiveClass: '',
    }
  }

    langChange = (value) => {
        this.props.langChange(value)
    }

    handleInputChange(e) {
        const {value} = e.target;
        const oldLang = this.state.activeLanguage;
        this.langChange(value)
        const pathName = window.location.pathname || ''

        // Reload page when changing language
        if (value === "fi") {
            setTimeout(() => {
                window.location.replace(`${pathName}`.replace(`/${oldLang}/`,'/'));
            }, 10)
        }

        if (value === "en" && !pathName.endsWith('blog')) {
            setTimeout(() => {
                window.location.replace(`/en${pathName}`);
            }, 10)
        }else if (value === "en" && pathName.endsWith('blog')){
            setTimeout(() => {
                window.location.replace(`${pathName}`.replace(`/${oldLang}/`,'/'));
            }, 10)
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
    const filteredData = nav.filter(data => data.lang === this.state.activeLanguage)[0] || [];
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">

            <Link className="navbar-item" to={ filteredData.logo.href }>
              <img src={ logo } alt={ filteredData.logo.title } style={ {width: '88px'} } />
            </Link>

            {/* Hamburger menu */}
            <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
                onKeyPress={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
              id="navMenu"
              className={ `navbar-menu ${ this.state.navBarActiveClass }` }
          >
            <div className="navbar-start has-text-centered">
              { filteredData.nav.map(linkItem => (
                  <Link className="navbar-item" to={ linkItem.href } key={linkItem.href}>
                    { linkItem.title }
                  </Link>
              )) }
              <LanguageSwitcher handleInputChange={this.handleInputChange} activeLanguage={this.state.activeLanguage}/>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar