import React from 'react';


import './weatherAdditional.css';
import icons from '../weatherToday/icons.png';
class WeatherAdditional extends React.Component {

render(){
    
    let TodoComponent= [];
    for (let i =1 ; i<4; i++){
    let w = this.props.state.watherData.list[i].image.wDay * -120;
    let h = this.props.state.watherData.list[i].image.hDay * -120;
        TodoComponent.push( {
        width: `120px`,
        height: `120px`,
        display: 'flex',
        background: `url(${icons})`,
        backgroundPosition: `${h}px ${w}px`
        
        })
    }


    return (
        <div className = "WeatherAdditional">
           <div>{this.props.state.watherData.list[1].day}
                {this.props.state.watherData.list[1].temp}
                <div style = {TodoComponent[0]}></div>
            </div>
            <div>{this.props.state.watherData.list[2].day}
                 {this.props.state.watherData.list[2].temp}
                 <div style = {TodoComponent[1]}></div>
            </div>
            <div>{this.props.state.watherData.list[3].day}
                 {this.props.state.watherData.list[3].temp}
                 <div style = {TodoComponent[2]}></div>
            </div>
        </div>
    )
}

}

export default WeatherAdditional;
