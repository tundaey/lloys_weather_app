import React from 'react' 
import PropTypes from 'prop-types' 

import {DayForeCast} from './Forecast'
import {getCurrentWeather} from '../utils/api'
import {convertTemperature, getDate} from '../config/utils'

function Loading(){
    return (
        <div>Loading</div>
    )
}

export default class Day extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            data: {}
        }

        this.fetchWeather = this.fetchWeather.bind(this)
    }

    componentDidMount(){
        this.place = this.props.location.state.place
        this.day = this.props.location.state.day
        this.setState(()=> {
            return {
                loading: false,
                data: this.day
            }
        })
    }

    render () {
        let img
        return this.state.loading === true
        ? <Loading/>
        :<div>
            <div className='day-container'>
                <img className='weather' src={img = require(`../images/icons/${this.state.data.weather[0].icon}.svg`)} alt='Weather' />
                <h2 className='subheader'>{getDate(this.state.data.dt)}</h2>
            </div>
            <div className='description-container'>
                <p>{this.place}</p>
                <p>{this.state.data.weather[0].description}</p>
                <p>Min Temperature: {convertTemperature(this.state.data.temp.min)} &#8451;</p>
                <p>Max Temperature: {convertTemperature(this.state.data.temp.max)} &#8451;</p>
            </div>
        </div>
    }

    fetchWeather(place){
        getCurrentWeather(place).then((data)=> {
            this.setState(function(){
                return {
                    loading: false,
                    data: data
                }
            })
        })
    }
}