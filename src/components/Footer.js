import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import linkedIn from '../img/social/linked-in.png'
import nav from "../data/navbar";

const Footer = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeLanguage: this.props.lang,
    }
  }

  render() {
    const filteredData = nav.filter(data => data.lang === this.state.activeLanguage)[0] || [];
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Lexcell Oy"
            style={{ width: '14em', height: '5em' }}
          />
          <h4 class="has-text-white-ter">
            { this.props.lang === 'fi' ? 'Y-tunnus: ' : 'Business ID: '} 3147819-7
          </h4>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">

              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    { filteredData.nav.map(item => (
                        <li key={ item.href }>
                          <Link className="navbar-item" to={ item.href } key={item.href}>
                            { item.title }
                          </Link>
                        </li>
                    )) }
                  </ul>
                </section>
              </div>

              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/Lexcell-Oy-100671765177387">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="linkedIn" href="https://www.linkedin.com/company/lexcell/">
                  <img
                    className="fas fa-lg"
                    src={linkedIn}
                    alt="LinkedIn"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/lexcell.fi/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
