import React from 'react';
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './setting.css';
import {createobjectbackground} from '../../../../../redux/store';
import {createobjectchangeF} from '../../../../../redux/store';
import {createobjectChangeC} from '../../../../../redux/store';
import {createobjectlangRU} from '../../../../../redux/store';
import {createobjectlangEN} from '../../../../../redux/store';
import {createobjectlangBE} from '../../../../../redux/store';




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
    changeLang = (event)=>{
        let action ;
        debugger;
        if (event.target.value =='ru') {
            action = createobjectlangRU();
        }
        if (event.target.value =='eng') {
            action = createobjectlangEN();
        }
        if (event.target.value =='be') {
            action = createobjectlangBE();
        }
        
        this.props.dispatch(action);
    }
render(){
    return (
        <div className = "Setting">
           <button onClick={ this.changeBackground}><FontAwesomeIcon icon={faHistory} /></button>
           <select  onChange = {this.changeLang}>
                <option value ='eng'>ENG</option>
                <option value = 'ru'>RU</option>
                <option value = 'be'>BE</option>
           </select>
           <button onClick={ this.changeTempC}>C</button>
           <button onClick={ this.changeTempF}>F</button>
           
        </div>
    )
}

}

export default Setting;
