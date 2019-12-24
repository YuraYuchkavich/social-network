import React from 'react';
import {connect} from 'react-redux';

import Setting from './components/setting/setting';
import Search from './components/search/search';
import MapY from './components/map/map';
import Temp from './components/temp/temp'
import './weather.css';
import fon from '../wather/photo-1541894736-a7a737ba00cb.jpeg';

import {createobjectsearch} from '../../../redux/store';
import {createobjectsearchUpdate} from '../../../redux/store';


const Wather = (props) => {
    
    return (
                <div className ="Weather" >
                    <Setting />
                    <Search search = {props.search} searchChange = {props.searchChange} newSearch = {props.newSearch}/>
                    <Temp state = {props.weatherReducer}/>
                    <MapY state = {props.weatherReducer}/>    
                </div>
        
    )
}




export default Wather;
