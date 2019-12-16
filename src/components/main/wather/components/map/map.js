import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { YMaps, Map } from 'react-yandex-maps';

import './map.css';

class MapY extends React.Component {

render(){

    let TodoComponent ;
    let cord =[this.props.state.watherData.city.coord.lat,this.props.state.watherData.city.coord.lon]
    TodoComponent = {
        center:cord,
        zoom:`12`
    }

    return (
        <div className = "Map">
            <YMaps>
             
             <Map state={TodoComponent} />
           </YMaps>
           <div>{cord[0]}</div>
           <div>{cord[1]}</div>
        </div>
    )
}

}

export default MapY;
