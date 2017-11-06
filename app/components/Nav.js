import React from 'react' 
import PropTypes from 'prop-types' 
import WeatherForm from './WeatherForm'

import {Link} from 'react-router-dom'

import img from '../images/d13.svg'

export function Nav (props) {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <img src={img} alt="Bulma" />
                </Link>
            </div>
      </nav>
    )
}