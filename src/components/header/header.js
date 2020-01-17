import React from 'react';
import {NavLink} from "react-router-dom";

import './header.css';

class Header extends React.Component {

render(){
    return (
        <div className = "Header">
            <div className="Logo">
                <div>(YY)</div>
                <div className="Second">SOCIAL</div>
            </div>
            <nav className="NavMenu">
                <NavLink to="/profile">My Profile</NavLink>
                <NavLink to="/calendar">Calender</NavLink>
                <NavLink to="/notebook">Notebook</NavLink>
                <a href="4.html">News</a>  
                <NavLink to="/wather">Wather</NavLink> 
            </nav>
            <div className = "LoginBlock">
                 {this.props.isAuth ? <NavLink to="/login">{this.props.login}</NavLink> : <NavLink to="/login">Login</NavLink>   }
            </div>
        </div>
    )
}

}

export default Header;
