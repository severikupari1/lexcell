import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import './custom.sass'
import useSiteMetadata from './SiteMetadata'
import useLocalStorage from '../hooks/useLocalStorage'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  const [lang, setLang] = useLocalStorage('activeLanguage', 'fi');
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />

        <meta property="og:url" content="https://lexcell.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://lexcell.netlify.app/img/og-image.jpg" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta property="linkedIn:domain" content="lexcell.netlify.app" />
        <meta property="linkedIn:url" content="https://lexcell.netlify.app/" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://lexcell.netlify.app/img/og-image.jpg" />

        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar langChange={setLang} lang={lang}/>
      <div>{children}</div>
      <Footer lang={lang}/>

    </div>
  )
}

export default TemplateWrapper
