import weatherReducer from './weather-reducer'
const SEARCH = 'SEARCH';
const SEARCHUPDATE = 'SEARCHUPDATE';
const UPDATE_BACKGROUN = 'UPDATE_BACKGROUN';
const UPDATE = 'UPDATE';
const CHANGE_TEMP_F = 'CHANGE_TEMP_F';
const CHANGE_TEMP_C = 'CHANGE_TEMP_C';
let language = 'ru';
const RU = 'RU';
const EN = 'EN';
const BE = 'BE';
var langGlobal = 'eng';

const infoWeather = {
      ru:[['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'],['ВЛАЖНОСТЬ','СКОРОСТЬ ВЕТРА','КАК ЧУВСТВУЕТСЯ'],['широта','долгота']],
      eng:[['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],['HUMIDYTI','WIND','FEELS LIKE'],['lat','long']],
      be:[['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],['Humidyti','Wild','Speed'],['lat','long']]
    
}
let image = [
    {name:'Clear',wDay:0,hDay:0,wNight:4,hNight:5},
    {name:'few clouds',wDay:0,hDay:2,wNight:5,hNight:5},
    {name:'scattered clouds',wDay:0,hDay:4,wNight:5,hNight:1},
    {name:'Clouds',wDay:1,hDay:2,wNight:1,hNight:3},
    {name:'shower rain',wDay:4,hDay:0,wNight:4,hNight:0},
    {name:'Rain',wDay:4,hDay:2,wNight:2,hNight:2},
    {name:'thunderstorm',wDay:2,hDay:0,wNight:2,hNight:0},
    {name:'Snow',wDay:4,hDay:4,wNight:2,hNight:1},
    {name:'mist',wDay:3,hDay:1,wNight:3,hNight:1}
]
   



let store ={
    _state:{
        waetherData:null,
        profileData:null,     
        calendarData:null       

    },
    getState(){
       
        return this._state;
    },
    rerenderEntireTree(){
        console.log('stateChanged')
    },
    

    subcribe(observer){
        this.rerenderEntireTree = observer;
    },
    dispatch(action){ //{type: 'SEARCH' value }

    this._state.weatherData = weatherReducer(this._state.weatherData,action);
    /*this._state.weatherData = weatherReducer(this._state.weatherData,action);
    this.rerenderEntireTree(this._state);*/
      /*  if(action.type == SEARCH ) {
            this._state.locationData.city=action.value; 
            this.getLocation(langGlobal);
        } else if (action.type == UPDATE_BACKGROUN ) {
            this.getBackground(UPDATE_BACKGROUN);
        } else if (action.type == CHANGE_TEMP_F ) {
            this.changeTempF();
        } else if (action.type == CHANGE_TEMP_C ) {
            this.changeTempC();
        } else if (action.type == RU ) {
            langGlobal = 'ru';
            this.getLocation(langGlobal);
        } else if (action.type == EN ) {
            langGlobal = 'eng';
            this.getLocation(langGlobal);
        } else if (action.type == BE ) {
            langGlobal = 'be';
            this.getLocation(langGlobal);
        } else{ 
            this.rerenderEntireTree(this._state);
        }
*/
    },
    

}

export default store;

export const createobjectsearch = (value) =>{
    return{
        type:SEARCH ,
        value:value
    }
}

export const createobjectsearchUpdate = (value) =>{
    return{
        type:SEARCHUPDATE,
        value:value
    }
}

export const createobjectbackground = () =>{
    return{
        type:UPDATE_BACKGROUN 
    }
}
export const createobjectchangeF = () =>{
    return{
        type:CHANGE_TEMP_F
    }
}

export const createobjectChangeC = () =>{
    return{
        type:CHANGE_TEMP_C
    }
}


export const createobjectlangEN = () =>{
    return{
        type:EN
    }
}

export const createobjectlangRU = () =>{
    return{
        type:RU
    }
}

export const createobjectlangBE = () =>{
    return{
        type:BE
    }
}