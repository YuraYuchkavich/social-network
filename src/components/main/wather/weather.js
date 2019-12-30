import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import Setting from './components/setting/setting';
import Search from './components/search/search';
import MapY from './components/map/map';
import Temp from './components/temp/temp'
import './weather.css';
import fon from '../wather/photo-1541894736-a7a737ba00cb.jpeg';

import {createobjectsearch} from '../../../redux/store';
import {createobjectsearchUpdate} from '../../../redux/store';
import {getWeathern} from '../../../api/weatherAPI';

class Wather extends React.Component {

    constructor(props){
        super(props);
      
    }
   
    componentDidMount(){
        let func = async () =>{
            let  state =  await getWeathern();
            debugger;
            this.props.setWeather(state);
        }
       func();
       
        /*const URLIP = "https://ipinfo.io/json?token=6bea51d61920f9";
        axios.get(URLIP).then(response =>{
            this.props.setWeather(response);
        });*/
    }

    componentDidUpdate(){

    }


    render(){
        debugger;
        return (
           
                    <div className ="Weather" >
                        <Setting />
                        <Search search = {this.props.search} searchChange = {this.props.searchChange} newSearch = {this.props.newSearch}/>
                        <Temp state = {this.props.weatherReducer}/>
                        <MapY state = {this.props.weatherReducer}/>    
                    </div>
            
        )

    }
}




export default Wather;
