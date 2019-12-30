import React from 'react';


import './weatherToday.css';
import icons from './icons.png';
import Clock from './Clock/clock';

const  WeatherToday =(props) => {
 

    let TodoComponent;
    let w;
    let h;
    if ((props.state.watherData.list[0].image.wDay == undefined) || (props.state.watherData.list[0].image.hDay == undefined)) {
        h = -240;
        w = -730;
    } else {
     
         w = props.state.watherData.list[0].image.wDay * -120;
         h = props.state.watherData.list[0].image.hDay * -120;
    }
        TodoComponent = {
        width: `120px`,
        height: `120px`,
        display: 'flex',
        background: `url(${icons})`,
        backgroundPosition: `${h}px ${w}px`
        };
       
    return (
        <div className = "WeatherToday">
           <div className = "NameToday">
               <div>{props.state.locationData.city} {props.state.locationData.country} </div>
               
               <Clock state = {props.state}/>
              
           </div>
           <div className = "TempToday">{props.state.watherData.list[0].temp}</div>
           <div className = "IconToday">
                <div style ={TodoComponent}>

                </div>
           </div>
           <div className = "AdditionalToday">
                <div>{props.state.watherData.list[0].icon}</div>
                <div>{props.state.watherData.list[0].feels_like}</div>
                <div>{props.state.watherData.list[0].wind_speed} </div>
                <div>{props.state.watherData.list[0].humidity}</div>
                
           </div>
        </div>
    )

}



export default WeatherToday;
