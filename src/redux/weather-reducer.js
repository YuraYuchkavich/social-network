import {getWeathern} from '../api/weatherAPI';



 let stateIni = {
    watherData:{city:{name:null,country:null},list:[
        {temp:null,feels_like:null,wind_speed:null,humidity:null,icon:null,image:{name:null,wDay:null,hDay:null,wNight:null,hNight:null},day:null,posTranslate:[]},
        {temp:null,feels_like:null,wind_speed:null,humidity:null,icon:null,image:{name:null,wDay:null,hDay:null,wNight:null,hNight:null},day:null,posTranslate:null},
        {temp:null,feels_like:null,wind_speed:null,humidity:null,icon:null,image:{name:null,wDay:null,hDay:null,wNight:null,hNight:null},day:null,posTranslate:null},
        {temp:null,feels_like:null,wind_speed:null,humidity:null,icon:null,image:{name:null,wDay:null,hDay:null,wNight:null,hNight:null},day:null,posTranslate:null}
    ]},
    locationData:{city:null, place:null, country:null, lat:null, long:null},
    backgroundData:null,
    language:'ru',
    typeTemp:'C',
    timezone:null,
    newSearch:'1',
    isFetching:true
};

const SEARCH = 'SEARCH';
const UPDATE_BACKGROUND = 'UPDATE_BACKGROUND';
const UPDATE = 'UPDATE';
const CHANGE_TEMP_F = 'CHANGE_TEMP_F';
const CHANGE_TEMP_C = 'CHANGE_TEMP_C';
const SEARCHUPDATE = 'SEARCHUPDATE';
const RU = 'RU';
const EN = 'EN';
const BE = 'BE';
const SET_WEATHER = 'SET_WEATHER';

const  weatherReducer = (state  = stateIni, action) => {


    switch(action.type){
        case SEARCH:
            {
                let stateCopy  = {...state};
                    stateCopy.locationData = {...state.locationData};
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
                let stateCopy  = {...state};
                stateCopy.locationData = {...state.locationData};
                stateCopy.locationData.city=action.weather.locationData.city;
               
                debugger;
                return stateCopy;
               
            }
        case CHANGE_TEMP_F:
                {
                let stateCopy  = {...state};
                    if (stateCopy.typeTemp == 'C'){
                stateCopy.watherData = {...state.watherData};
                    for (let i =0 ; i<4; i++){
                    stateCopy.watherData.list[i].temp = Math.round((stateCopy.watherData.list[i].temp *9/5) +32);
                    stateCopy.watherData.list[i].feels_like[1] = Math.round((stateCopy.watherData.list[i].feels_like[1] *9/5) +32);                 
                    }
                    stateCopy.typeTemp = 'F';
                    return stateCopy;
                    }
                else{
                    return stateCopy;
                    }
                   
                }
        case CHANGE_TEMP_C:
                {
                    let stateCopy  = {...state};
                    if (stateCopy.typeTemp == 'F'){
                    stateCopy.watherData = {...state.watherData};
                        for (let i =0 ; i<4; i++){
                            stateCopy.watherData.list[i].temp = Math.round((stateCopy.watherData.list[i].temp -32)*5/9);
                            stateCopy.watherData.list[i].feels_like[1] =  Math.round((stateCopy.watherData.list[i].feels_like[1] -32)*5/9);                  
                        }                  
                        
                    stateCopy.typeTemp = 'C';
                    return stateCopy;
                        }
                    else {
                        return stateCopy;
                        }
                           
                       
                }
        case UPDATE_BACKGROUND:
            {
                let stateCopy  = {...state};
                stateCopy.backgroundData = {...state.backgroundData};
                stateCopy.backgroundData=action.background;
               debugger;
                return stateCopy;
               
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
export const createObjectChangeF = () =>{
    return{
        type:CHANGE_TEMP_F
    }
}

export const ceateObjectChangeC = () =>{
    return{
        type:CHANGE_TEMP_C
    }
}

export const createObjectBackground = (value) =>{
    return{
        type:UPDATE_BACKGROUND,
        background:value
    }
}