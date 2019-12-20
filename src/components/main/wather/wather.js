import React from 'react';

import Setting from './components/setting/setting';
import Search from './components/search/search';
import MapY from './components/map/map';
import Temp from './components/temp/temp'
import './wather.css';
import fon from '../wather/photo-1541894736-a7a737ba00cb.jpeg';




const Wather = (props) => {
    let TodoComponent;
    let backgroundData;
    if (props.state.backgroundData == null) {
        backgroundData = fon;      
    } else {
    backgroundData = props.state.backgroundData.urls.full;
    }   
    TodoComponent = {
        backgroundImage: ` linear-gradient(to top, rgba(47, 79, 79,0.3), rgba(47, 79, 79,0.3)),url(${backgroundData})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`
       
    }
    return (
        <div className = "Wather"  style = {TodoComponent}  >
            
          <Setting dispatch = {props.dispatch}/>
              <Search dispatch = {props.dispatch} state = {props.state}/>
              <Temp state = {props.state}/>
              <MapY state = {props.state}/>    
           
        </div>
    )
}



export default Wather;
