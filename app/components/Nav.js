import React from 'react' 
import PropTypes from 'prop-types' 
import WeatherForm from './WeatherForm'

export function Nav (props) {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma" width="112" height="28" />
                </a>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <WeatherForm
                        direction="row"
                        onSubmitWeatherForm = {function(){}}
                        onUpdateWeatherForm= {function(){}} />
                </div>
           </div>
      </nav>
    )
}