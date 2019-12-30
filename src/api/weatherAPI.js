import {infoWeather,image} from '../localization/localization';
import axios from 'axios';

export let stateInit = {
    watherDataT:null,
    watherData:{city:{name:null,country:null},list:[
        {temp:null,feels_like:null,wind_speed:null,humidity:null,icon:null,image:{name:null,wDay:null,hDay:null,wNight:null,hNight:null},day:null,posTranslate:null},
        {temp:null,feels_like:null,wind_speed:null,humidity:null,icon:null,image:{name:null,wDay:null,hDay:null,wNight:null,hNight:null},day:null,posTranslate:null},
        {temp:null,feels_like:null,wind_speed:null,humidity:null,icon:null,image:{name:null,wDay:null,hDay:null,wNight:null,hNight:null},day:null,posTranslate:null},
        {temp:null,feels_like:null,wind_speed:null,humidity:null,icon:null,image:{name:null,wDay:null,hDay:null,wNight:null,hNight:null},day:null,posTranslate:null}
    ]},
    locationData:{city:null, place:null, country:null, lat:null, long:null},
    backgroundData:null,
    language:'ru',
    timezone:null,
    newSearch:'1'
}


export let getWeathern = async (city) => {
    if (city == undefined){
        let myloc = await  getDataw();
        stateInit.locationData.city = myloc.city;
    } else {
        stateInit.locationData.city = city;
    }
    let location = await getLocation1(stateInit);
    stateInit.locationData.country = location.response.GeoObjectCollection.featureMember[0].GeoObject.description;
    stateInit.locationData.place = location.response.GeoObjectCollection.featureMember[0].GeoObject.name;
    stateInit.locationData.long = location.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')[0];
    stateInit.locationData.lat = location.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')[1];
    let json  = await getWeatherLoc(stateInit);
    let nowDate = new Date();
    let text = null;
    if(stateInit.language == 'ru') {
            text = infoWeather.ru;
        } else if (stateInit.language == 'eng') {
            text = infoWeather.eng;
        } else if (stateInit.language == 'be')   {
            text = infoWeather.be;
        } else {
            text = infoWeather.eng;
        }
    
    let count = 8 ;
    let checkday = new Date();

    stateInit.watherData.city.name = json.city.name;
    stateInit.watherData.city.country = json.city.country;
   
    if (json.city.timezone > 0){
        stateInit.timezone = json.city.timezone/-3600 } else {
        stateInit.timezone = json.city.timezone/3600;
        }
       
    for (let i =0 ; i<4; i++){
        let info = {temp:null,
            feels_like:null,
            wind_speed:null,
            humidity:null,
            icon:null,
            image:null,
            day:null,
            posTranslate:null
            };
        stateInit.watherData.list[i].temp = json.list[i*count].main.temp;
        stateInit.watherData.list[i].feels_like = [text[1][2],json.list[i*count].main.feels_like];
        stateInit.watherData.list[i].wind_speed = [text[1][1],json.list[i*count].wind.speed];
        stateInit.watherData.list[i].humidity = [text[1][0],json.list[i*count].main.humidity];
        stateInit.watherData.list[i].icon = json.list[i*count].weather[0].description;
        stateInit.watherData.list[i].posTranslate= text[2];
        for (let j =0 ; j<image.length; j++){
        if(json.list[i*count].weather[0].main ==image[j].name){
            stateInit.watherData.list[i].image = image[j];
        } 
        }
        if (checkday-1+i>6){
            
            if(checkday==5)   checkday=-2;
            if(checkday==6)   checkday=-1;
            if(checkday==7)   checkday=0;
          
        }
        stateInit.watherData.list[i].day = text[0][checkday-1+i];
    }
    return stateInit;
}

export  function getDataw(){
    const URLIP = "https://ipinfo.io/json?token=6bea51d61920f9";
          return fetch(URLIP).then(response =>{
               ;return response.json();});
    }

export  function getLocation1(state){
     
        
          let Token = "7f13e315-a4b6-4c40-89cf-22b5b18ba472";
          let lang ;
          if (state.language == 'ru') { lang = 'ru_Ru';}
          if (state.language == 'eng') { lang = 'en_US';}
          if (state.language == 'be') { lang = 'be_BY';}
        
          const URLIP = "https://geocode-maps.yandex.ru/1.x/?lang="+lang+"&apikey="+Token+"&format=json&geocode="+state.locationData.city;
      
          return fetch(URLIP).then(response =>{
           ;return response.json();});
       
        
      }
 function getWeatherLoc(state){
        let Token = "1f81eda1f04c17dc6ea05d4d9cfaaa9d";
        let URLW =  "https://api.openweathermap.org/data/2.5/forecast?lat="+state.locationData.lat +"&lon="+state.locationData.long+"&lang="+state.language+"&units=metric&APPID="+Token;
        return fetch(URLW).then(response =>{
           return response.json();});
}











/*
 let json  = await getWeathern();
    debugger;
    let nowDate = new Date();
    let text = null;
    if(stateInit.language == 'ru') {
            text = infoWeather.ru;
        } else if (stateInit.language == 'eng') {
            text = infoWeather.eng;
        } else if (stateInit.language == 'be')   {
            text = infoWeather.be;
        } else {
            text = infoWeather.eng;
        }
    
    let count = 8 ;
    let checkday = new Date();

    stateInit.watherData.city.name = json.city.name;
    stateInit.watherData.city.country = json.city.country;
   
    
    if (json.city.timezone > 0){
        stateInit.timezone = json.city.timezone/-3600 } else {
        stateInit.timezone = json.city.timezone/3600;
        }
        stateInit.watherData.list= [];          
    for (let i =0 ; i<4; i++){
        let info = {temp:null,
            feels_like:null,
            wind_speed:null,
            humidity:null,
            icon:null,
            image:null,
            day:null,
            posTranslate:null
            };
        info.temp = json.list[i*count].main.temp;
        info.feels_like = [text[1][2],json.list[i*count].main.feels_like];
        info.wind_speed = [text[1][1],json.list[i*count].wind.speed];
        info.humidity = [text[1][0],json.list[i*count].main.humidity];
        info.icon = json.list[i*count].weather[0].description;
        info.posTranslate= text[2];
        for (let j =0 ; j<image.length; j++){
        if(json.list[i*count].weather[0].main ==image[j].name){
            info.image = image[j];
        } 
        }
        if (checkday-1+i>6){
            
            if(checkday==5)   checkday=-2;
            if(checkday==6)   checkday=-1;
            if(checkday==7)   checkday=0;
          
        }
        info.day = text[0][checkday-1+i];
        stateInit.watherData.list.push(info);
    }


 debugger;
    */











export let setData = (state)=>{
    if (state == undefined) {
        state = stateInit;
    }
    debugger;
    return getData (state)
}

export async function getData(state){

    const URLIP = "https://ipinfo.io/json?token=6bea51d61920f9";
   
    let response = await fetch(URLIP);
    if (response.ok)
    {
      
    let json = await response.json();
    state.locationData.city = json.city;
    return getLocation(state);
  
    } else {
      
    }

}
   /* fetch(URLIP).then(res => res.json()).then(json=>{this._state.locationData = json;});*/




export async function getLocation(state){
  debugger;
  
    let Token = "7f13e315-a4b6-4c40-89cf-22b5b18ba472";
    let lang ;
    if (state.language == 'ru') { lang = 'ru_Ru';}
    if (state.language == 'eng') { lang = 'en_US';}
    if (state.language == 'be') { lang = 'be_BY';}
  
    const URLIP = "https://geocode-maps.yandex.ru/1.x/?lang="+lang+"&apikey="+Token+"&format=json&geocode="+state.locationData.city;

    let response = await fetch(URLIP);
    if (response.ok)
    {
       
    let json = await response.json();
    state.locationData.country = json.response.GeoObjectCollection.featureMember[0].GeoObject.description;
    state.locationData.place = json.response.GeoObjectCollection.featureMember[0].GeoObject.name;
    state.locationData.long = json.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')[0];
    state.locationData.lat = json.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')[1];

    return getWatherDate(state);
 
    } else {
    
    }
  
}

async function getWatherDate(state){
    let Token = "1f81eda1f04c17dc6ea05d4d9cfaaa9d";
    let URLW =  "https://api.openweathermap.org/data/2.5/forecast?lat="+state.locationData.lat +"&lon="+state.locationData.long+"&lang="+state.language+"&units=metric&APPID="+Token;

    let response = await fetch(URLW);
    if (response.ok)
    {
    let json = await response.json();
    state.watherDataT = json;
    let nowDate = new Date();
    let text = null;
    if(state.language == 'ru') {
            text = infoWeather.ru;
        } else if (state.language == 'eng') {
            text = infoWeather.eng;
        } else if (state.language == 'be')   {
            text = infoWeather.be;
        } else {
            text = infoWeather.eng;
        }
   
    let count = 8 ;
    let checkday = new Date();

    state.watherData.city.name = json.city.name;
    state.watherData.city.country = json.city.country;
   
    
    if (json.city.timezone > 0){
        state.timezone = json.city.timezone/-3600 } else {
            state.timezone = json.city.timezone/3600;
        }
    state.watherData.list= [];          
    for (let i =0 ; i<4; i++){
        let info = {temp:null,
            feels_like:null,
            wind_speed:null,
            humidity:null,
            icon:null,
            image:null,
            day:null,
            posTranslate:null
            };
        info.temp = json.list[i*count].main.temp;
        info.feels_like = [text[1][2],json.list[i*count].main.feels_like];
        info.wind_speed = [text[1][1],json.list[i*count].wind.speed];
        info.humidity = [text[1][0],json.list[i*count].main.humidity];
        info.icon = json.list[i*count].weather[0].description;
        info.posTranslate= text[2];
        for (let j =0 ; j<image.length; j++){
        if(json.list[i*count].weather[0].main ==image[j].name){
            info.image = image[j];
        } 
        }
        if (checkday-1+i>6){
            
            if(checkday==5)   checkday=-2;
            if(checkday==6)   checkday=-1;
            if(checkday==7)   checkday=0;
          
        }
        info.day = text[0][checkday-1+i];
        state.watherData.list.push(info);
    }

   return state;
    } else {
    
    
    }
   
}

/*
async getBackground(action){
  
    let Token = "67b9539827f033b697d0303c44f87f13bedb114a486a43edd9a8c85791161bef";
    let URLB =  "https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=town,"+
    this._state.locationData.city+"&client_id="+Token;
   
    let response = await fetch(URLB);
    if (response.ok)
    {
    let json = await response.json();
    this._state.backgroundData = json;
    
        if (action == UPDATE_BACKGROUN) {
            this.rerenderEntireTree(this._state);
        } else {
            this.rerenderEntireTree(this._state);
        }
       
    } else {
     
        this.rerenderEntireTree(this._state);
    }
   /* const URL = "https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=town,"+this._state.locationData.city+"&client_id=97e9d1e6fc355611883753db976f78ecbbc2e00286af57fe80d6cc56cccf4b7c";
    fetch(URL).then(res => res.json()).then(json=>{this._state.backgroundData = json; this.getWatherDate();});
   
},*/
/*
changeTempF(){
    for (let i =0 ; i<4; i++){
        this._state.watherData.list[i].temp = (this._state.watherData.list[i].temp *9/5) +32;
        this._state.watherData.list[i].feels_like =  (this._state.watherData.list[i].feels_like *9/5) +32                  
    }
    this.rerenderEntireTree(this._state);
},
 changeTempC(){
    for (let i =0 ; i<4; i++){
        this._state.watherData.list[i].temp = (Math.ceil((this._state.watherData.list[i].temp -32)*5/9*10)/10);
        this._state.watherData.list[i].feels_like =  Math.ceil((this._state.watherData.list[i].feels_like -32)*5/9);                  
    }
    this.rerenderEntireTree(this._state);
}



export const createobjectsearch = (value) =>{
    return{
        type:SEARCH ,
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
*/