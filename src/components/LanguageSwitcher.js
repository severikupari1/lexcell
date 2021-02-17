import React from 'react'
import { Link } from 'gatsby'
import nav from '../data/navbar'

import './LanguageSwitcher.sass'

const LanguageSwitcher = ({handleInputChange,activeLanguage = 'fi'}) => {
    const componentStyle = 'LanguageSwitcher'
    let url = ''
    const activeData = nav.filter(data => data.lang === activeLanguage)
    const notActive = nav.filter(data => data.lang !== activeLanguage)

    return (
        <div className={ 'navbar-item' }>
            <div className="select">
                <select onChange={ handleInputChange } name="activeLanguage">
                    { activeData.map(item => (
                        <option className={ 'selected' } key={ item.lang }>
                            { item.lang }
                        </option>
                    )) }
                    { notActive.map(item => (
                        <option key={ item.lang }>
                            { item.lang }
                        </option>
                    )) }
                </select>
            </div>
        </div>
    )
}

export default LanguageSwitcher
