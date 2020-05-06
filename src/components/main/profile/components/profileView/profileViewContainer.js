import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import { withRouter,Redirect } from 'react-router-dom';

import ProfileView from './profileView';
import './profileView.module.css';
import {getM,updateStatus} from '../../../../../redux/profile-reducer';
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
                             status = {this.props.status}
                             isAuth = {this.props.isAuth}
                             updateStatus = {this.props.updateStatus} /> 
    }
}


let mapStateToProps = (state) => {
    debugger;
    return {
       profile:state.profileReducer.profile,
       status:state.profileReducer.status,
       isAuth:state.authReducer.isAuth
     
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        fetchData: url => dispatch(personsFetchData(url))
   
} }*/
export default compose(
    connect(mapStateToProps,{updateStatus,getM}),
    withRouter,
    withAuthRedirect
)(ProfileViewContainer);
