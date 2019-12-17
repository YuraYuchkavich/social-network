import { backgroundReducer } from "./background-reducer";

const SEARCH = 'SEARCH';
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
        watherDataT:null,
        watherData:{city:{name:null,country:null},list:[]},
        locationData:{city:null, place:null, country:null, lat:null, long:null},
        backgroundData:null,
        lang:language,
        timezone:null
    },
    getState(){
        this._state.lang = langGlobal;
        return this._state;
    },
    rerenderEntireTree(){
        console.log('stateChanged')
    },
    async getData(){
        const URLIP = "https://ipinfo.io/json?token=6bea51d61920f9";
       
        let response = await fetch(URLIP);
        if (response.ok)
        {
        let json = await response.json();
        this._state.locationData.city = json.city;
        this.getLocation(langGlobal);
      
        } else {
        this.rerenderEntireTree(this._state);
        }
       /* fetch(URLIP).then(res => res.json()).then(json=>{this._state.locationData = json;});*/
    },
    async getLocation(lang){
        let Token = "7f13e315-a4b6-4c40-89cf-22b5b18ba472";

        if (lang == 'ru') { lang = 'ru_Ru';}
        if (lang == 'eng') { lang = 'en_US';}
        if (lang == 'be') { lang = 'be_BY';}
        const URLIP = "https://geocode-maps.yandex.ru/1.x/?lang="+lang+"&apikey="+Token+"&format=json&geocode="+
                      this._state.locationData.city;
       
        let response = await fetch(URLIP);
        if (response.ok)
        {
           
        let json = await response.json();
        this._state.locationData.country = json.response.GeoObjectCollection.featureMember[0].GeoObject.description;
        this._state.locationData.place = json.response.GeoObjectCollection.featureMember[0].GeoObject.name;
        this._state.locationData.long = json.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')[0];
        this._state.locationData.lat = json.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')[1];
        this.getWatherDate(langGlobal);
     
        } else {
        this.rerenderEntireTree(this._state);
        }
       /* fetch(URLIP).then(res => res.json()).then(json=>{this._state.locationData = json;});*/
    },
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
        fetch(URL).then(res => res.json()).then(json=>{this._state.backgroundData = json; this.getWatherDate();});*/
       
    },
    async getWatherDate(lang){
        let Token = "1f81eda1f04c17dc6ea05d4d9cfaaa9d";
        let URLW =  "https://api.openweathermap.org/data/2.5/forecast?lat="+this._state.locationData.lat +"&lon="+this._state.locationData.long+"&lang="+lang+"&units=metric&APPID="+Token;
  debugger;
        let response = await fetch(URLW);
        if (response.ok)
        {
        let json = await response.json();
        this._state.watherDataT = json;
        let nowDate = new Date();
        let text = null;
        if(lang == 'ru') {
                text = infoWeather.ru;
            } else if (lang == 'eng') {
                text = infoWeather.eng;
            } else if (lang == 'be')   {
                text = infoWeather.be;
            } else {
                text = infoWeather.eng;
            }
       
        let count = 8 ;
        let checkday = new Date();
  
        this._state.watherData.city.name = json.city.name;
        this._state.watherData.city.country = json.city.country;
       
        
        if (json.city.timezone > 0){
            this._state.timezone = json.city.timezone/-3600 } else {
                this._state.timezone = json.city.timezone/3600;
            }
        this._state.watherData.list= [];          
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
            this._state.watherData.list.push(info);
        }

        this.getBackground(UPDATE);
        } else {
        
        this.rerenderEntireTree(this._state);
        }
       
    },

    subcribe(observer){
        this.rerenderEntireTree = observer;
    },
    dispatch(action){ //{type: 'SEARCH' value }


    this._state.backgroundData =  backgroundReducer(this._state.backgroundData,action);
    this.rerenderEntireTree(this._state);
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




export default store;
window.store = store ;