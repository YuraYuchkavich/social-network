import React from 'react';
import {Route} from "react-router-dom"

import './profile.css';
import Navbar from './components/navbar/navbar';
import UsersContainer from './components/users/usersContainer'

const Profile  = () => {


    return (
        <div className = "Profile">
            <Navbar />
            <div>
                <Route path="/profile/users" render={()=><UsersContainer/>}/>
            </div>
        </div>
    )
}


export default Profile;
