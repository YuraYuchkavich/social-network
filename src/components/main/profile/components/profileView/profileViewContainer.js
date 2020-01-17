import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import ProfileView from './profileView';
import './profileView.module.css';

import {setUserProfile} from '../../../../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';


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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response =>{
        this.props.setUserProfile(response.data);
        
    });
    }
  
    render(){
        return <ProfileView profile = {this.props.profile} />   
    }
}


let mapStateToProps = (state) => {
    return {
       profile:state.profileReducer.profile
     
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (value) =>{
            dispatch(follow(value))},
        unfollow: (value) => {
            dispatch(unfollow(value))},
        setUsers: (value) => {
            dispatch(setUsers(value))},
        setCurrentPage: (value) => {
            dispatch(setCurrentPage(value))},
        setTotalUsersCount: (value) => {
            dispatch(setTotalUsersCount(value))},
    }
}*/
let WithUrlDataContainerComponent = withRouter(ProfileViewContainer);
export default connect(mapStateToProps,{setUserProfile})(WithUrlDataContainerComponent);