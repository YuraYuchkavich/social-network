import React from 'react';

import styles from './profileView.module.css';
import { Redirect } from 'react-router-dom';

let ProfileView = (props) =>{
    if (props.isAuth == false) return <Redirect to = {"/login"}/>
    if (!props.profile) {
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