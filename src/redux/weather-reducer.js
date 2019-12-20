import {getData} from '../api/weatherAPI';
import {getLocation} from '../api/weatherAPI';



const SEARCH = 'SEARCH';
const UPDATE_BACKGROUN = 'UPDATE_BACKGROUN';
const UPDATE = 'UPDATE';
const CHANGE_TEMP_F = 'CHANGE_TEMP_F';
const CHANGE_TEMP_C = 'CHANGE_TEMP_C';
const SEARCHUPDATE = 'SEARCHUPDATE';
const RU = 'RU';
const EN = 'EN';
const BE = 'BE';
export let stateInit = {
    watherDataT:null,
    watherData:{city:{name:null,country:null},list:[]},
    locationData:{city:null, place:null, country:null, lat:null, long:null},
    backgroundData:null,
    language:'ru',
    timezone:null,
    newSearch:''
}
export let setData = ()=>{
    return getData (stateInit)
}


const  weatherReducer = (state  = stateInit, action) => {

    let setLoc = ()=>{
        return getLocation(state);
    }
    if(action.type == SEARCH ) {    
        state.locationData.city=action.value; 
        state.locationData.place=action.value; 
        return state 
    } else if(action.type == SEARCHUPDATE ) {    
        state.newSearch=action.value;
        return state 
    } else {
        return state;
    }
        return state;
}
export default weatherReducer;