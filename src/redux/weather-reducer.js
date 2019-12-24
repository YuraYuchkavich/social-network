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
    newSearch:'1'
}
export let setData = ()=>{
    return getData (stateInit)
}


const  weatherReducer = (state  = stateInit, action) => {
debugger;
    if(action.type == SEARCH ) {    
        let stateCopy  = {...state};
        stateCopy.locationData = {...state.locationData};
     
        stateCopy.locationData.place=state.locationData.city;
        let a = async ()=> {
            await setData(stateCopy);
           debugger;
            }
        a();
        return stateCopy; 
    } else if(action.type == SEARCHUPDATE ) { 
        let stateCopy  = {...state};
        stateCopy.locationData = {...state.locationData};
     
        stateCopy.locationData.city=action.value;
      
        return stateCopy; 
    } else {
        return state;
    }
}
      
export default weatherReducer;