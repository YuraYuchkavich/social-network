import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import styles from './users.module.css';
import userPhoto from './defaultUserPhoto.png';
import {UsersAPI} from '../../../../../api/profileAPI'; 


let Users = (props) =>{

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
        for (let i=1; i<=pagesCount; i++){
            pages.push(i);
        }
    
    return <div className = {styles.Users}>
                <div>
                    {pages.map( p => {
                    return <span className = {props.currentPage ===p && styles.selectedPage }
                    onClick = {() =>{props.onPageChanged(p)}}>{p}</span>
                })}
                </div>
                {
                    props.users.map( user => <div key = {user.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/view/'+user.id}>
                                     <img src = {user.photos.small != null ? user.photos.small : userPhoto} />
                                </NavLink>
                            </div>
                            <div>
                                {
                                user.followed ? <button disabled = {props.followingInProgress} onClick = 
                                                    { 
                                                        () => { props.unfollow(user.id); } 
                                                    }
                                                >unfollow</button> : 
                                                <button disabled = {props.followingInProgress} onClick = 
                                                    { 
                                                        () => { props.follow(user.id); } 
                                                    }
                                                >follow</button> 
                                }
                            </div>
                        </span>
                        <span>
                            <div>
                                {user.name}
                            </div>
                        </span>
                    </div>
                    )
                }
            </div>
}

export default Users;