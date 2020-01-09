import React from 'react';


import './weatherAdditional.css';
import icons from '../weatherToday/icons.png';

const WeatherAdditional = (props) => {
    let TodoComponent= [];
    for (let i =1 ; i<4; i++){
    let w;
    let h;
    if ((props.state.watherData.list[0].image.wDay == undefined) || (props.state.watherData.list[0].image.hDay == undefined)) {
        h = -240;
        w = -730;
    } else {
    let w = props.state.watherData.list[i].image.wDay * -70;
    let h = props.state.watherData.list[i].image.hDay * -73;

        TodoComponent.push({
        width: `60px`,
        height: `60px`,
        display: 'flex',
        background: `url(${icons})`,
        backgroundPosition: `${h}px ${w}px`,
        backgroundSize: `700% 800%`,
        marginLeft:`20px`
        })
    };
}   
    return (
        <div className = "WeatherAdditional">
           <div>
               <div>
                    {props.state.watherData.list[1].day}
               </div>
               <div className = "WeatherAdditionalTemp">
                    <div>
                        {props.state.watherData.list[1].temp}
                        <span>&ordm;</span>
                    </div>
                    <div  style = {TodoComponent[0]}></div>
                </div>
            </div>
            <div>
               <div>
                    {props.state.watherData.list[2].day}
               </div>
               <div className = "WeatherAdditionalTemp">
                    <div>
                        {props.state.watherData.list[2].temp}
                        <span>&ordm;</span>
                    </div>
                    <div  style = {TodoComponent[1]}></div>
                </div>
            </div>
            <div>
               <div>
                    {props.state.watherData.list[3].day}
               </div>
               <div className = "WeatherAdditionalTemp">
                    <div>
                        {props.state.watherData.list[3].temp}
                        <span>&ordm;</span>
                    </div>
                    <div  style = {TodoComponent[2]}></div>
                </div>
            </div>
        </div>
    )
}

export default WeatherAdditional;
