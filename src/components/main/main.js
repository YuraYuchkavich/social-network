import React from 'react';
import {Route} from "react-router-dom"
import {Redirect} from 'react-router-dom';

import './main.css';
import WeatherContainer from './wather/weatherContainer'
import Calendar from './calendar/calendar';
import Notebook from './notebook/notebook';
import ProfileContainer from './profile/profileContainer';
import Login from './login/login';



const Main = (props) => {
    

    return (
        
            <div className = "Main">
               
                <Route path="/login" render={()=><Login/>}/>
                <Route path="/profile" component={ProfileContainer}/>
                <Route path="/calendar" component={Calendar}/>
                <Route path="/notebook" component={Notebook}/>
                <Route path="/wather" render={()=><WeatherContainer/>}/>
              
            </div>
    
    )
}

export default Main;



