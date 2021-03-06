import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { YMaps, Map } from 'react-yandex-maps';

import './map.css';

class MapY extends React.Component {

render(){
   
    let TodoComponent ;
    let cord =[this.props.state.locationData.lat,this.props.state.locationData.long]
    TodoComponent = {
        center:cord,
        zoom:`12`
     
    }

    return (
        <div className = "Map">
            <div className = 'YMaps'>
                <YMaps>
                    <Map state={TodoComponent} className = 'YMap'/>
                </YMaps>
            </div>
           <div>
               <div>{this.props.state.watherData.list[0].posTranslate[0]}: {cord[0]}</div>
               <div>{this.props.state.watherData.list[0].posTranslate[1]}: {cord[1]}</div>
           </div>
        </div>
    )
}

}

export default MapY;
