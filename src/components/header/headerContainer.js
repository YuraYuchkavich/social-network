import React from 'react';
import axios from 'axios'
import {connect} from 'react-redux';

import Header from './header'
import {setUserData} from '../../redux/auth-reducer'
import './header.css';

class HeaderContainer extends React.Component {
    
    render(){
        return (
        <Header {...this.props}/>
        )
    }

}
const mapStateToProps = (state) =>({
    isAuth:state.authReducer.isAuth,
    login:state.authReducer.login
});
export default connect(mapStateToProps,{setUserData})(HeaderContainer);