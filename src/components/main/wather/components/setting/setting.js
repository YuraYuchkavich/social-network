import React from 'react';
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './setting.css';
import {createobjectbackground} from '../../../../../redux/state';
import {createobjectchangeF} from '../../../../../redux/state';
import {createobjectChangeC} from '../../../../../redux/state';


class Setting extends React.Component {
    constructor(props) {
        super(props);
        
    }
    changeBackground = ()=> {  
        let action = createobjectbackground();
        
        this.props.dispatch(action);
    }
    changeTempF = ()=>{
        let action = createobjectchangeF();
        
        this.props.dispatch(action);
    }
    changeTempC = ()=>{
        let action = createobjectChangeC();
        
        this.props.dispatch(action);
    }
render(){
    return (
        <div className = "Setting">
           <button onClick={ this.changeBackground}><FontAwesomeIcon icon={faHistory} /></button>
           <select>
                <option>RU</option>
                <option>EN</option>
           </select>
           <button onClick={ this.changeTempC}>C</button>
           <button onClick={ this.changeTempF}>F</button>
           
        </div>
    )
}

}

export default Setting;
