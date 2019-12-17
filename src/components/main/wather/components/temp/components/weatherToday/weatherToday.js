import React from 'react';


import './weatherToday.css';
import icons from './icons.png';
import Clock from './Clock/clock';

class WeatherToday extends React.Component {


render(){
    let TodoComponent;

    let w = this.props.state.watherData.list[0].image.wDay * -120;
    let h = this.props.state.watherData.list[0].image.hDay * -120;
        TodoComponent = {
        width: `120px`,
        height: `120px`,
        display: 'flex',
        background: `url(${icons})`,
        backgroundPosition: `${h}px ${w}px`
        
    }


    return (
        <div className = "WeatherToday">
           <div className = "NameToday">
               <div>{this.props.state.locationData.place}, {this.props.state.locationData.country} </div>
               
               <Clock state = {this.props.state}/>
              
           </div>
           <div className = "TempToday">{this.props.state.watherData.list[0].temp}</div>
           <div className = "IconToday">
                <div style ={TodoComponent}>

                </div>
           </div>
           <div className = "AdditionalToday">
                <div>{this.props.state.watherData.list[0].icon}</div>
                <div>{this.props.state.watherData.list[0].feels_like}</div>
                <div>{this.props.state.watherData.list[0].wind_speed} m/s</div>
                <div>{this.props.state.watherData.list[0].humidity}%</div>
                
           </div>
        </div>
    )
}

}

export default WeatherToday;
