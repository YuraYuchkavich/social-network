import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const SEARCH = 'SEARCH';
const UPDATE_BACKGROUN = 'UPDATE_BACKGROUN';
const UPDATE = 'UPDATE';
const CHANGE_TEMP_F = 'CHANGE_TEMP_F';
const CHANGE_TEMP_C = 'CHANGE_TEMP_C';
let language = 'ru'
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
        watherData:null,
        watherData1:{city:{name:null,country:null},list:[]},
        locationData:{city:null, place:null, country:null, lat:null, long:null},
        backgroundData:null,
        lang:language
    },
    getState(){
        
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
        this.getLocation();
        
        } else {
        this.rerenderEntireTree(this._state);
        }
       /* fetch(URLIP).then(res => res.json()).then(json=>{this._state.locationData = json;});*/
    },
    async getLocation(){
        let Token = "7f13e315-a4b6-4c40-89cf-22b5b18ba472";
        const URLIP = "https://geocode-maps.yandex.ru/1.x/?lang=ru_RU&apikey="+Token+"&format=json&geocode="+
                      this._state.locationData.city;
       
        let response = await fetch(URLIP);
        if (response.ok)
        {
        let json = await response.json();
        this._state.locationData.country = json.response.GeoObjectCollection.featureMember[0].GeoObject.description;
        this._state.locationData.place = json.response.GeoObjectCollection.featureMember[0].GeoObject.name;
        this._state.locationData.lat = json.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')[0];
        this._state.locationData.long = json.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')[1];
        this.getBackground(UPDATE);
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
            this.getWatherDate();
            
            }
           
        } else {
         
            this.rerenderEntireTree(this._state);
        }
       /* const URL = "https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=town,"+this._state.locationData.city+"&client_id=97e9d1e6fc355611883753db976f78ecbbc2e00286af57fe80d6cc56cccf4b7c";
        fetch(URL).then(res => res.json()).then(json=>{this._state.backgroundData = json; this.getWatherDate();});*/
       
    },
    async getWatherDate(){
        let Token = "1f81eda1f04c17dc6ea05d4d9cfaaa9d";
        let URLW =  "https://api.openweathermap.org/data/2.5/forecast?q="+this._state.locationData.city+"&lang=eng&units=metric&APPID="+Token;
       
        let response = await fetch(URLW);
        if (response.ok)
        {
        let json = await response.json();
        this._state.watherData = json;
        let nowDate = new Date();
        let count = 8 ;
        let day = new Date();
        day = day.getDate();
        this._state.watherData1.city.name = json.city.name;
        this._state.watherData1.city.country = json.city.country;
                    this._state.watherData1.list= [];          
        for (let i =0 ; i<4; i++){
            let info = {temp:null,
                feels_like:null,
                wind_speed:null,
                humidity:null,
                icon:null,
                image:null
                };
            info.temp = json.list[i*count].main.temp;
            info.feels_like = json.list[i*count].main.feels_like;
            info.wind_speed = json.list[i*count].wind.speed;
            info.humidity = json.list[i*count].main.humidity;
            info.icon = json.list[i*count].weather[0].description;
            for (let j =0 ; j<image.length; j++){
            if(json.list[i*count].weather[0].main ==image[j].name){
                info.image = image[j];
            } 
            }
            this._state.watherData1.list.push(info);
        }

        this.rerenderEntireTree(this._state);
        } else {
            debugger;
        this.rerenderEntireTree(this._state);
        }
       
    },

    subcribe(observer){
        this.rerenderEntireTree = observer;
    },
    dispatch(action){ //{type: 'SEARCH' value }
        if(action.type == SEARCH ) {
            this._state.locationData.city=action.value; 
            this.getLocation();
        } else if (action.type == UPDATE_BACKGROUN ) {
            this.getBackground(UPDATE_BACKGROUN);
        } else if (action.type == CHANGE_TEMP_F ) {
            this.changeTempF();
        } else if (action.type == CHANGE_TEMP_C ) {
            this.changeTempC();
        } else{ 
            this.rerenderEntireTree(this._state);
        }

    },
    changeTempF(){
        for (let i =0 ; i<4; i++){
            this._state.watherData1.list[i].temp = (this._state.watherData1.list[i].temp *9/5) +32;
            this._state.watherData1.list[i].feels_like =  (this._state.watherData1.list[i].feels_like *9/5) +32                  
        }
        this.rerenderEntireTree(this._state);
    },
     changeTempC(){
        for (let i =0 ; i<4; i++){
            this._state.watherData1.list[i].temp = (Math.ceil((this._state.watherData1.list[i].temp -32)*5/9*10)/10);
            this._state.watherData1.list[i].feels_like =  Math.ceil((this._state.watherData1.list[i].feels_like -32)*5/9);                  
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




export default store;
window.store = store ;