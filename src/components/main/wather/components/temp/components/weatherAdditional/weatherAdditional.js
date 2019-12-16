import React from 'react';


import './weatherAdditional.css';

class WeatherAdditional extends React.Component {

render(){
    return (
        <div className = "WeatherAdditional">
           <div>{this.props.state.watherData1.list[1].temp}</div>
           <div>{this.props.state.watherData1.list[2].temp}</div>
           <div>{this.props.state.watherData1.list[3].temp}</div>
        </div>
    )
}

}

export default WeatherAdditional;
