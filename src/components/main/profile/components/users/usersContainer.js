import React from 'react';
import {connect} from 'react-redux';

import './users.css';
import Users from './users';
import {setUsersAC} from '../../../../../redux/users-reducer';
import {followAC} from '../../../../../redux/users-reducer';
import {unfollowAC} from '../../../../../redux/users-reducer';

let mapStateToProps = (state) => {
    return {
       users:state.usersReducer.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (value) =>{
            dispatch(followAC(value))},
        unfollow: (value) => {
            dispatch(unfollowAC(value))},
        setUsers: (value) => {
            dispatch(setUsersAC(value))},
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UsersContainer;
