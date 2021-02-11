import React from 'react'
import { Link } from 'gatsby'

import nav from '../data/navbar'

import './LanguageSwitcher.sass'

const LanguageSwitcher = ({ slug }) => {
  const componentStyle = 'LanguageSwitcher'
  let activeLanguage =  'en'
  let url = ''
  return (
    <div className={componentStyle}>
      {nav.map(item => (
        <Link
          className={`${componentStyle}-item${
            activeLanguage === item.lang ? '-active' : ''
          }`}
          to={url}
        >
          {item.lang}
        </Link>
      ))}

    </div>
  )
}

export default LanguageSwitcher
