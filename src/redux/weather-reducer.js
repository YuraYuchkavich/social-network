import {stateInit} from '../api/weatherAPI';




const SEARCH = 'SEARCH';
const UPDATE_BACKGROUN = 'UPDATE_BACKGROUN';
const UPDATE = 'UPDATE';
const CHANGE_TEMP_F = 'CHANGE_TEMP_F';
const CHANGE_TEMP_C = 'CHANGE_TEMP_C';
const SEARCHUPDATE = 'SEARCHUPDATE';
const RU = 'RU';
const EN = 'EN';
const BE = 'BE';
const SET_WEATHER = 'SET_WEATHER';

const  weatherReducer = (state  = stateInit, action) => {


    switch(action.type){
        case SEARCH:
            {
                let stateCopy  = {...state};
                stateCopy.locationData = {...state.locationData};
                stateCopy.locationData.place=action.value;
                stateCopy.locationData.city=action.value;
                return stateCopy; 
            }
        case SEARCHUPDATE:
            {
                let stateCopy  = {...state};
                    stateCopy.locationData = {...state.locationData};
                    stateCopy.locationData.city=action.value;
                    return stateCopy; 
            }
        case SET_WEATHER:
            {
                debugger;
                return {...state,timezone:action.weather.ip}
                debugger;
            }
        default:
            return state;
    }
    
}
      
export default weatherReducer;

export const setWeatherAC= (value) =>{
    return{
        type:SET_WEATHER,
        weather:value
    }
}