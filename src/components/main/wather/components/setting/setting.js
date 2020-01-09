import React from 'react';
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.css';
import './setting.css';





class Setting extends React.Component {
   
   
   
    changeLang = (event)=>{
        this.props.changeLang(event.target.value);
    }

    render(){
        return (
            <div className = "Setting">
                    <div className="btn-group mb-3" role="group" >
                        <button className = 'btn btn-secondary' onClick={this.props.updateBackground}><FontAwesomeIcon icon={faHistory} /></button>
                    </div>
                    <div className="btn-group mb-3" role="group" >
                        <select class="btn btn-secondary dropdown-toggle"  onChange = {this.changeLang}>
                                <option value ='eng'>ENG</option>
                                <option value = 'ru'>RU</option>
                                <option value = 'be'>BE</option>
                        </select>
                    </div>
                    <div className="btn-group mb-3" role="group" >
                        <button className = 'btn btn-secondary' onClick={this.props.changeTempC}>C</button>
                        <button className = 'btn btn-secondary' onClick={this.props.changeTempF}>F</button>
                    </div>
            
            </div>
        )
    }

}

export default Setting;
