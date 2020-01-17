import React from 'react';
import axios from 'axios'
import {connect} from 'react-redux';

import Header from './header'
import {setUserData} from '../../redux/auth-reducer'
import './header.css';

class HeaderContainer extends React.Component {
    componentDidMount(){
        debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials: true}).then(response =>{
        if (response.data.resultCode === 0){
            debugger;
            this.props.setUserData(response.data);
        }
    });
    }
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