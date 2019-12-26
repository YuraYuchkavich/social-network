import React from 'react';
import {NavLink} from "react-router-dom";

import './navbar.css';

const  Navbar  = () => {


    return (
        <div className = "Navbar">
            <nav className="PMenu">
                <NavLink to="/profile/message">Message</NavLink>
                <NavLink to="/profile/users">User</NavLink>  
            </nav>
        </div>
    )

}

export default Navbar;
