import React from 'react';

import './temp.css';
import WatherToday from './components/weatherToday/weatherToday';
import WeatherAdditional from './components/weatherAdditional/weatherAdditional';

const Temp = (props) => {
    return (
        <div className = "Temp">
           <WatherToday state = {props.state}/>
           <WeatherAdditional state = {props.state}/>
        </div>
    )
}
export default Temp;
