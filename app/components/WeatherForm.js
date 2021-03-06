import React from 'react' 
import PropTypes from 'prop-types' 
import {Link} from 'react-router-dom' 

import {getCurrentWeather, getForeCast} from '../utils/api'

export default class WeatherForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            place: 'Birmingham'
        }

        this.updateWeatherForm = this.updateWeatherForm.bind(this);
        this.submitWeatherForm = this.submitWeatherForm.bind(this)
    }

    render () {
        return (
            <div className="weather-form-container" style={{flexDirection: this.props.direction}}>
                <div className="field is-grouped">
                    <p className="control is-expanded">
                        <input 
                         className="input" 
                         type="text" 
                         onChange={this.updateWeatherForm}
                         placeholder="Birmingham, West Midlands"/>
                    </p>
                    <p className="control">
                        <button onClick={this.submitWeatherForm} className="button is-info">Get Weather</button>                        
                    </p>
                </div>
            </div>
        )
    }

    submitWeatherForm(){
        this.props.onSubmitWeatherForm(this.state.place)
    }

    updateWeatherForm(e){
        let place = e.target.value
        this.setState(function(){
            return {
                place: place
            }
        })
    }
}

WeatherForm.defaultProps = {
    direction: 'column'
}