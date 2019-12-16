import React from 'react';

import Setting from './components/setting/setting';
import Search from './components/search/search';
import MapY from './components/map/map';
import Temp from './components/temp/temp'
import './wather.css';
import fon from '../wather/photo-1541894736-a7a737ba00cb.jpeg';




class Wather extends React.Component {
constructor(props) {
    super(props);
    /*this.state = {
      weatherData: null,
      ipInfo:{},
      backGround:null
    };*/
}


componentDidMount() {
    
   
    
   /* const URLIP = "https://ipinfo.io/json?token=6bea51d61920f9";
    fetch(URLIP).then(res => res.json()).then(json=>{this.setState({ipInfo: json})})
    
    /*const URL = "https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=town,"+this.state.ipInfo+"&client_id=8b25e7307060d89e77413932ead8b3fd82a21204ccdf7a20c931c1ae31c25e15";
    fetch(URL).then(res => res.json()).then(json=>{this.setState({backGround: json.urls.full})})
    
   this.setState({backGround: {}});
   debugger;
    console.log('hello' +this.state.ipInfo.city);
    /*const URLWather = "https://api.openweathermap.org/data/2.5/forecast?q="+this.state.ipInfo.city+"&lang=ua&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27";
    fetch(URLWather).then(res => res.json()).then(json=>{this.setState({weatherData: json})})*/
  }





render(){
    let TodoComponent;
    let backgroundData;
    if (this.props.state.backgroundData == null) {
        backgroundData = fon;      
    } else {
    backgroundData = this.props.state.backgroundData.urls.full;
    }   
    TodoComponent = {
        backgroundImage: ` linear-gradient(to top, rgba(47, 79, 79,0.3), rgba(47, 79, 79,0.3)),url(${backgroundData})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`
        
    }
    


    return (
        <div className = "Wather"  style = {TodoComponent} >
            
            <Setting dispatch = {this.props.dispatch}/>
            <Search dispatch = {this.props.dispatch}/>
            <Temp state = {this.props.state}/>
            <MapY state = {this.props.state}/>    
           
        </div>
    )
}

}

export default Wather;
