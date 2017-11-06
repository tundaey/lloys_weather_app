import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import App from '../components/App'
import {Nav} from '../components/Nav'
import Forecast from '../components/Forecast'

export const routes = (
    <Router>
        <div style={{width: "100%", height: "100%"}}>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/forecast" component={Forecast}/>    
            </Switch> 
        </div>       
    </Router>
)