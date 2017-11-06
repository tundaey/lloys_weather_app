import React from 'react' 
import PropTypes from 'prop-types' 
import WeatherForm from './WeatherForm'


export default class App extends React.Component {
    constructor(props){
        super(props);

        this.pushPlaceToNextRoute = this.pushPlaceToNextRoute.bind(this)
    }

    render () {
        return (                
            <div className="home-container container is-fullhd" style={{backgroundImage: "url('app/images/download.svg')"}}>
                <h1 className="title home-title">Enter City or a Place</h1>
                <WeatherForm
                    direction="column"
                    onSubmitWeatherForm = {this.pushPlaceToNextRoute} />
            </div>
        )
    }

    pushPlaceToNextRoute(place){
        this.props.history.push({
            pathname: 'forecast',
            search: '?place=' + place
        })
    }

}