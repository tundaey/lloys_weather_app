import React from 'react' 
import PropTypes from 'prop-types' 
import WeatherForm from './WeatherForm'

function Nav (props) {
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

export default class App extends React.Component {
    render () {
        return (
           <div style={{width: "100%", height: "100%"}}>
                <Nav/>
                <div className="home-container container is-fullhd" style={{backgroundImage: "url('app/images/download.svg')"}}>
                    <h1 className="title home-title">Enter City or a Place</h1>
                    <WeatherForm
                     direction="column"
                     onSubmitWeatherForm = {function(){}}
                     onUpdateWeatherForm= {function(){}} />
                </div>
           </div>
        )
    }
}