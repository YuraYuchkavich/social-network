import React from 'react';
import {Route} from "react-router-dom"

import './profile.css';
import Navbar from './components/navbar/navbar';
import UsersContainer from './components/users/usersContainer';
import ProfileViewContainer from './components/profileView/profileViewContainer';

const Profile  = () => {

    debugger
    return (
        <div className = "Profile">
            <Navbar />
            <div>
                <Route path="/profile/users" render={()=><UsersContainer/>}/>
                <Route path="/profile/view/:userId?" render={()=><ProfileViewContainer/>}/>
            </div>
        </div>
    )
}


export default Profile;
