import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import Setting from './components/setting/setting';
import Search from './components/search/search';
import MapY from './components/map/map';
import Temp from './components/temp/temp'
import './weather.css';
import fon from '../wather/photo-1541894736-a7a737ba00cb.jpeg';
import loading from '../wather/Spinner-1s-200px.svg';

import {getWeathern,getBackground} from '../../../api/weatherAPI';

class Wather extends React.Component {

    constructor(props){
        super(props);
      
    }
   
    componentDidMount(){
        let func = async () =>{
        
            let  state =  await getWeathern(this.props.weatherReducer,null,this.props.weatherReducer.language);
    
            this.props.setWeather(state);
        }
       func();
       
        /*const URLIP = "https://ipinfo.io/json?token=6bea51d61920f9";
        axios.get(URLIP).then(response =>{
            this.props.setWeather(response);
        });*/
    }


    search = (value) => {
        let func = async () =>{
            let  state =  await getWeathern(this.props.weatherReducer,value,'ru');
            this.props.setWeather(state);
        }
       func();

    }

    changeLang = (value) => {
        let func = async () =>{
            let  state =  await getWeathern(this.props.weatherReducer,null,value);
            this.props.setWeather(state);
        }
       func();

    }

    updateBackground =() =>{
        let func = async () =>{
            let  state =  await getBackground(this.props.weatherReducer)
            this.props.updateBackground(state.urls.full);
        }
       func();
    }


    render(){
        
        let Background = {
            backgroundImage: ` linear-gradient(to top, rgba(47, 79, 79,0.3), rgba(47, 79, 79,0.3)),url(${this.props.weatherReducer.backgroundData})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`
    
        }
        return (
            <>
                    <div className ="Weather" style = {Background} >
                        <Setting changeTempF = {this.props.changeTempF} changeTempC = {this.props.changeTempC} changeLang = {this.changeLang} updateBackground = {this.updateBackground}/>
                        <Search search = {this.search} searchChange = {this.props.searchChange} newSearch = {this.props.newSearch}/>
                        <Temp state = {this.props.weatherReducer}/>
                        <MapY state = {this.props.weatherReducer}/>    
                    </div>
        </>
        )

    }
}




export default Wather;
