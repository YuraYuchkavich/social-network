import React from 'react';
import {Route} from "react-router-dom"

import './profile.css';
import Profile from './profile';

class ProfileContainer extends React.Component {

    render(){
        return (
            <Profile />
        )
    }

}


export default ProfileContainer;