import React from 'react';
import {Route} from "react-router-dom"

import './main.css';
import Wather from './wather/wather';
import Calendar from './calendar/calendar';
import Notebook from './notebook/notebook';





class Main extends React.Component {
 

render(){
  
    return (
        
            <div className = "Main">
               
                <Route path="/calendar" component={Calendar}/>
                <Route path="/notebook" component={Notebook}/>
                <Route path="/wather" render={()=><Wather state = {this.props.state} dispatch = {this.props.dispatch}/>}/>
                
            </div>
    
    )
}

}

export default Main;
