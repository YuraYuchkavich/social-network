import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { withRouter,Redirect } from 'react-router-dom';

import ProfileView from './profileView';
import './profileView.module.css';
import {getM} from '../../../../../redux/profile-reducer';
import {withAuthRedirect} from '../../../hoc/authRedirect';
import { compose } from 'redux';


class ProfileViewContainer extends React.Component {
    constructor(props){
        super(props);
    }
   
    componentDidMount(){
        let userId = this.props.match.params.userId;
        debugger;
        if (!userId) {
            userId = 2;
        }
        debugger;
        this.props.getM();

 
    }
  
    render(){
        return  <ProfileView profile = {this.props.profile}
                             isAuth = {this.props.isAuth} /> 
    }
}


let mapStateToProps = (state) => {
    return {
       profile:state.profileReducer.profile,
       isAuth:state.authReducer.isAuth
     
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        fetchData: url => dispatch(personsFetchData(url))
   
} }*/
export default compose(
    connect(mapStateToProps,{getM}),
    withRouter,
    withAuthRedirect
)(ProfileViewContainer);
