import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import Users from './users';
import './users.module.css';

import {setUsers} from '../../../../../redux/users-reducer';
import {follow} from '../../../../../redux/users-reducer';
import {unfollow} from '../../../../../redux/users-reducer';
import {setCurrentPage} from '../../../../../redux/users-reducer';
import {setTotalUsersCount} from '../../../../../redux/users-reducer';

class UsersContainer extends React.Component {
    constructor(props){
        super(props);
    }
   
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
    });
    }

    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>{
        this.props.setUsers(response.data.items);
    });
    }

    render(){

        
        return <Users currentPage = {this.props.currentPage}
                      totalUsersCount = {this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      onPageChanged = {this.onPageChanged}
                      users = {this.props.users}

               /> 
        
    }
}


let mapStateToProps = (state) => {
    return {
       users:state.usersReducer.users,
       pageSize: state.usersReducer.pageSize,
       totalUsersCount: state.usersReducer.totalUsersCount,
       currentPage:state.usersReducer.currentPage
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

export default connect(mapStateToProps,{follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount})(UsersContainer);