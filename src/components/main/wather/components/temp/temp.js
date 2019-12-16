import React from 'react';


import './temp.css';
import WatherToday from './components/weatherToday/weatherToday';
import WeatherAdditional from './components/weatherAdditional/weatherAdditional';

class Temp extends React.Component {

render(){
    
    return (
        <div className = "Temp">
           <WatherToday state = {this.props.state}/>
           <WeatherAdditional state = {this.props.state}/>
        </div>
    )
}

}

export default Temp;
