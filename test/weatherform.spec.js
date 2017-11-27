import React from 'react';
import Enzyme,{ mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {spy} from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const chai = require('chai');
const spies = require('chai-spies')
chai.use(spies);

import WeatherForm from '../app/components/WeatherForm';

describe('<WeatherForm/>', ()=> {

    it('should have correct state and elements initialized', function(){
        const wrapper = shallow(<WeatherForm/>)
        expect(wrapper.state('place')).to.be.equal('Birmingham');
        expect(wrapper.find('input')).to.have.length(1);
        expect(wrapper.find('button')).to.have.length(1);
    })

    it('should update the state with new place when you enter a value in the input', function(){
        const wrapper = mount(<WeatherForm/>);
        expect(wrapper.state('place')).to.be.equal('Birmingham');

        const weatherInput = wrapper.find('input')
        weatherInput.simulate('change', { target: { value: 'London'}})
        expect(wrapper.state('place')).to.be.equal('London')
        
    })

    it('should submit form when the get weather button is clicked', function(){
        const submitWeatherForm = spy();
        const wrapper = shallow(<WeatherForm onSubmitWeatherForm={submitWeatherForm} />);
        wrapper.find('button').simulate('click');
        expect(submitWeatherForm).to.have.property('callCount', 1);
    })

    
})