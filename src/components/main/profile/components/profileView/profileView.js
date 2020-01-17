import React from 'react';

import styles from './profileView.module.css';
import { NavLink } from 'react-router-dom';

let ProfileView = (props) =>{
debugger;
    if (!props.profile) {
        debugger
        return (
            <div className = {styles.ProfileView}>
               test
           </div>
           )
    }

    return (
            <div className = {styles.ProfileView}>
               <img src ={props.profile.photos.large}/>
           </div>
           )
}

export default ProfileView;