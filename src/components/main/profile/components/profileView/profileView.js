import React, { Component } from 'react';

import styles from './profileView.module.css';
import { Redirect } from 'react-router-dom';
import ProfileStatus from './profileStatus/profileStatus';
import ProfileStatusWithHooks from './profileStatus/profileStatusWithHooks';

class ProfileView extends Component{
  
    constructor(props) {
        super(props);
        this.state = { imagePreviewUrl: '' };
      }
  
    handleImageChange(e) {
        debugger;
        e.preventDefault();
   
        const reader = new FileReader();
        console.log( e.target.value);
        console.log('test');
    //    console.log(reader);
        reader.onloadend = () => {
     
        console.log(reader.result);
        };
        console.log('test');
        }
    render(){
    /*if (!props.profile) {
        return (
            <div className = {styles.ProfileView}>
                <ProfileStatusWithHooks status = {props.status} updateStatus = {props.updateStatus}/>
               test
               <input type = 'file'></input>
           </div>
           )
    }*/

    return (
              
            <div className = {styles.ProfileView}>
            
             Image my profile
             <input type="file" onChange={e => this.handleImageChange(e)} />
            </div>
          
           )
}
}

export default ProfileView;