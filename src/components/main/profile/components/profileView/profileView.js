import React from 'react';

import styles from './profileView.module.css';
import { Redirect } from 'react-router-dom';
import ProfileStatus from './profileStatus/profileStatus'
let ProfileView = (props) =>{
  
    if (!props.profile) {
        return (
            <div className = {styles.ProfileView}>
               test
           </div>
           )
    }

    return (
              
            <div className = {styles.ProfileView}>
            <ProfileStatus status = "hello"/>
             Image my profile
            </div>
       
           )
}

export default ProfileView;