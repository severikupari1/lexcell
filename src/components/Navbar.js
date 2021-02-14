import React from 'react'
import { graphql, Link } from 'gatsby'
import logo from '../img/logo.svg'
import nav from '../data/navbar'
import LanguageSwitcher from "./LanguageSwitcher";
import useSiteMetadata from "./SiteMetadata";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      active: false,
      activeLanguage: localStorage.getItem("activeLanguage") || 'fi',
      navBarActiveClass: '',
    }
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    localStorage.setItem(name, value)
    this.setState({ [name]: value });
    // Reload page when changing language
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const { siteURL } = useSiteMetadata()

    window.location.reload(siteURL);
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

export const pageQuery = graphql`
  query NavBarLogo {
    file(relativePath: { eq: "src/img/logo.svg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 88, height: 88) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
