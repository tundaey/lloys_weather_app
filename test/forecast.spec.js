import React from 'react'
import Enzyme,{ mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {spy} from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const chai = require('chai');
const spies = require('chai-spies')
chai.use(spies);

import Forecast,{DayForeCast} from '../app/components/Forecast'
import {getForeCast} from '../app/utils/api'

const location = {
    search: "London"
}
const data = {
    list: [
        {dt: 123, temp: {}, weather: []},
        {dt: 123, temp: {}, weather: []},
        {dt: 123, temp: {}, weather: []},
        {dt: 123, temp: {}, weather: []},
        {dt: 123, temp: {}, weather: []},
    ]
}

describe('<Forecast/>', ()=> {
    
    it('should show the <Loading /> component by default', function(){
        const wrapper = shallow(<Forecast location="London"/>)
        const container = wrapper.first('div');
        const loadingComponent = wrapper.find('Loading')
        expect(container).to.have.length(1);
        expect(loadingComponent).to.have.length(1);
    })


    it('should show the main container when the component loads', function(){
        const wrapper = shallow(<Forecast location={location}/>)
        wrapper.setState({loading: false, data: data})
        const forecastContainer = wrapper.find('div.forecast-container')
        expect(forecastContainer).to.have.length(1)
    })

    it('should show the temperature for the next five days when the component loads', function(){
        const wrapper = shallow(<Forecast location={location}/>)
        wrapper.setState({loading: false, data: data})
        const dayforecastComponent = wrapper.find('DayForeCast')
        expect(dayforecastComponent).to.have.length(5)
    })

    it('should initialize each <DayForeCast/> with the right props', function(){
        const day = {
            dt: 1511888400,
            temp: {}, 
            weather: [{description:"sky is clear", icon:"01d",id:800,main:"Clear"}]
        }
        const goToDayWeather = spy();
        const wrapper = mount(<DayForeCast day={day} onClick={goToDayWeather}/>)
        expect(wrapper.find('div.day-container')).to.have.length(1)
        expect(wrapper.find('h2.subheader')).to.have.length(1)
    })

    it('should call the goToDayWeather function when the day forecast is clicked', function(){
        const day = {
            dt: 1511888400,
            temp: {}, 
            weather: [{description:"sky is clear", icon:"01d",id:800,main:"Clear"}]
        }
        const goToDayWeather = spy();
        const wrapper = shallow(<DayForeCast day={day} onClick={goToDayWeather}/>)
        const dayForecastButton = wrapper.find('div.day-container')
        dayForecastButton.simulate('click')
        expect(goToDayWeather).to.have.property('callCount', 1);
        
    })
    
        
})