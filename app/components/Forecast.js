import React from 'react' 
import PropTypes from 'prop-types' 
import {getForeCast, getCurrentWeather} from '../utils/api'
import {convertTemperature, getDate} from '../config/utils'
import * as queryString from 'query-string';

function DayForeCast(props){
    const date = getDate(props.day.dt);
    const icon = props.day.weather[0].icon
    return (
        <div className='day-container'>
            <img className='weather' src={'./app/images/icons/' + icon + '.svg'} alt='Weather' />
            <h2 className='subheader'>{date}</h2>
        </div>
    )
}

export default class Forecast extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            data: []
        }

        this.fetchForecast = this.fetchForecast.bind(this)
    }

    componentDidMount(){
        this.place = queryString.parse(this.props.location.search).place
        this.fetchForecast(this.place)
    }

    componentWillReceiveProps(nextProps) {
        this.place = queryString.parse(nextProps.location.search).place;
        this.fetchForecast(this.place);
    }

    render () {
        return this.state.loading === true
        ? <div>Loading</div>
        : <div>
            <h1 className='forecast-header'>{this.place}</h1>
            <div className="forecast-container">
                {this.state.data.list.map((day)=> <DayForeCast key={day.dt} day={day}/>)}
            </div>
        </div>
    }

    goToDayWeather(){
        
    }

    fetchForecast(place){
        this.setState(function(){
            return {
                loading: true
            }
        })

        getForeCast(place).then((data)=> {
            console.log('data', data);
            this.setState(function(){
                return {
                    loading: false,
                    data: data
                }
            })
        })
    }
}