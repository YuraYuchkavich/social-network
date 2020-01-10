import {infoWeather,image} from '../localization/localization';
import axios from 'axios';
/*
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
}*/


export let getWeathern = async (stateInit,city,lang) => {
  
    stateInit.language = lang;
    if (city == undefined || city == ''){
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

    let text = null;

    if(stateInit.language == 'ru') {
            text = infoWeather.ru;
        } else if (stateInit.language== 'eng') {
            text = infoWeather.eng;
        } else if (stateInit.language == 'be')   {
            text = infoWeather.be;
        } else {
            text = infoWeather.eng;
        }
    
    let count = 8;
    let checkday = new Date();
    checkday = checkday.getDay();

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
        stateInit.watherData.list[i].temp = Math.round(json.list[i*count].main.temp);
        stateInit.watherData.list[i].feels_like = [text[1][2],Math.round(json.list[i*count].main.feels_like)];
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
    let background = await getBackground(stateInit);

    stateInit.backgroundData = background.urls.full;
    return stateInit;
}

export  function getDataw(){
    const URLIP = "https://ipinfo.io/json?token=6bea51d61920f9";
          return fetch(URLIP).then(response =>{
               return response.json();});
    }

export  function getLocation1(state){
     
        
          let Token = "7f13e315-a4b6-4c40-89cf-22b5b18ba472";
          let lang ;
          if (state.language == 'ru') { lang = 'ru_Ru';}
          if (state.language == 'eng') { lang = 'en_US';}
          if (state.language == 'be') { lang = 'be_BY';}
        
          const URLIP = "https://geocode-maps.yandex.ru/1.x/?lang="+lang+"&apikey="+Token+"&format=json&geocode="+state.locationData.city;
      
          return fetch(URLIP).then(response =>{
           return response.json();});
       
        
      }
 function getWeatherLoc(state){
        let Token = "1f81eda1f04c17dc6ea05d4d9cfaaa9d";
        let URLW =  "https://api.openweathermap.org/data/2.5/forecast?lat="+state.locationData.lat +"&lon="+state.locationData.long+"&lang="+state.language+"&units=metric&APPID="+Token;
        return fetch(URLW).then(response =>{
           return response.json();});
}


export function getBackground(state){
    let Token = "88debe502ef3d70a3df14974c45647067f796c309bead8409376aa75355a60f6";
    debugger;
    let URLB =  "https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=town,"+state.locationData.city+"&client_id="+Token;
    return fetch(URLB).then(response =>{
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








