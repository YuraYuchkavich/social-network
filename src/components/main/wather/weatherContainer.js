import React from 'react';
import {connect} from 'react-redux';

import Weather from './weather';
import './weather.css';
import fon from '../wather/photo-1541894736-a7a737ba00cb.jpeg';
import {createobjectsearch} from '../../../redux/store';
import {createobjectsearchUpdate} from '../../../redux/store';
import {setWeatherAC,createObjectChangeF,ceateObjectChangeC,createObjectBackground} from '../../../redux/weather-reducer';


/*const WeatherContainer = (props) => {
    
    return <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let TodoComponent;
                    let backgroundData;
                    if (state.weatherReducer.backgroundData == null) {
                        backgroundData = fon;      
                    } else {
                    backgroundData = state.weatherReducer.backgroundData.urls.full;
                    };  
                    TodoComponent = {
                        backgroundImage: ` linear-gradient(to top, rgba(47, 79, 79,0.3), rgba(47, 79, 79,0.3)),url(${backgroundData})`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`
                    
                    };
                    let search = (value)=>{  
                        let action = createobjectsearch(value);
                        store.dispatch(action);
                    }
                    let searchChange = (value)=>{  
                        let action = createobjectsearchUpdate(value);
                        store.dispatch(action);
                    }                  

                    return (<div style = {TodoComponent}>
                                <Weather search = {search} searchChange = {searchChange} newSearch = {state.weatherReducer.newSearch} state = {state}/>
                            </div>)
                    
                   
                   
            
                }
            }
        </StoreContext.Consumer>
    
}*/

let mapStateToProps = (state) => {
    return {
        weatherReducer:state.weatherReducer
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        search: (value) =>{
            dispatch(createobjectsearch(value))},
        searchChange: (value) => {
            dispatch(createobjectsearchUpdate(value))},
        setWeather: (value) => {
            dispatch(setWeatherAC(value))},
        changeTempF: () => {
            dispatch(createObjectChangeF())},
        changeTempC: () => {
            dispatch(ceateObjectChangeC())},
        updateBackground: (value) => {
            dispatch(createObjectBackground(value))},
    }
}

const WeatherContainer = connect(mapStateToProps,mapDispatchToProps)(Weather)
 

export default WeatherContainer;
