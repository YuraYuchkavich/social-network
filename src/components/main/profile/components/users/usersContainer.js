import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import Users from './users';
import './users.module.css';
import {follow,unfollow,setCurrentPage,setToggleIsFollowing,getUsers} from '../../../../../redux/users-reducer';


class UsersContainer extends React.Component {
    constructor(props){
        super(props);
    }
   
    componentDidMount(){
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    onPageChanged = (pageNumber) =>{

        this.props.getUsersThunkCreator(pageNumber,this.props.pageSize);
     
    }

    render(){

        
        return <Users currentPage = {this.props.currentPage}
                      totalUsersCount = {this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      onPageChanged = {this.onPageChanged}
                      users = {this.props.users}
                      follow = {this.props.follow}
                      unfollow = {this.props.unfollow}
                      followingInProgress = {this.props.followingInProgress}
                      setToggleIsFollowing = {this.props.setToggleIsFollowing}
               /> 
        
    }
}


let mapStateToProps = (state) => {
    return {
       users:state.usersReducer.users,
       pageSize: state.usersReducer.pageSize,
       totalUsersCount: state.usersReducer.totalUsersCount,
       currentPage:state.usersReducer.currentPage,
       followingInProgress:state.usersReducer.followingInProgress

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

export default connect(mapStateToProps,{follow,unfollow,setCurrentPage,setToggleIsFollowing,getUsers})(UsersContainer);