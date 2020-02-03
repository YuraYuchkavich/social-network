import  {UsersAPI} from '../api/profileAPI';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRETN_PAGE = 'SET_CURRETN_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';
export let stateInit ={
    users: [],
    pageSize:100,
    totalUsersCount: null ,
    currentPage: null,
    isFetching: true,
    followingInProgress: false
};

const  usersReduserce = (state  = stateInit, action) => {
    switch(action.type){
        case FOLLOW:
            {
                debugger;
                let stateCopy  = {...state};
                stateCopy.users =state.users.map( user =>
                    {
                        if (user.id == action.userId) {
                            return {...user,followed:true}
                        }
                        return user;
                    }
                );
                return stateCopy;

                
            }
        case UNFOLLOW:
            {
                let stateCopy  = {...state};
                stateCopy.users =state.users.map( user =>
                    {
                        if (user.id == action.userId) {
                            return {...user,followed:false}
                        }
                        return user;
                    }
                );
                return stateCopy;

                
            }
        case SET_USERS:
            {   
               
                return {...state, users:action.users}
            }
        case SET_CURRETN_PAGE:
            {   
               
                return {...state, currentPage:action.currentPage}
            }
        case SET_TOTAL_USERS_COUNT:
            {   
               
                return {...state, totalUsersCount:action.totalUsersCount}
            }
        case SET_USER_PROFILE:
            {
               
                return state;
            }
        case TOGGLE_IS_FOLLOWING:
            {
                debugger;
                return {...state, followingInProgress:action.followingInProgress}
            }   
        default:
            return state;
    }
}
      
export default usersReduserce;

export const followSuccess = (value) =>{
    return{
        type:FOLLOW,
        userId:value
     
    }
}

export const unfollowSuccess = (value) =>{
    return{
        type:UNFOLLOW,
        userId:value
    }
}

export const setUsers = (value) =>{
    return{
        type:SET_USERS,
        users:value
    }
}


export const setCurrentPage = (value) =>{
    return{
        type:SET_CURRETN_PAGE,
        currentPage:value
    }
}

export const setTotalUsersCount = (value) =>{
    return{
        type:SET_TOTAL_USERS_COUNT,
        totalUsersCount:value
    }
}

export const setUserProfile = (value) =>{
    return{
        type:SET_USER_PROFILE,
        userProfile:value
    }
}

export const setToggleIsFollowing = (value) =>{
    return{
        type:TOGGLE_IS_FOLLOWING,
        followingInProgress:value
    }
}


export const getUsers =(currentPage,pageSize) =>{ 
    return (dispatch) =>{
        UsersAPI.getUsers(currentPage,pageSize).then(response =>{
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
    });
}
}

export const follow =(userId) =>{ 
    return (dispatch) =>{
        dispatch(setToggleIsFollowing(true));
        UsersAPI.follow(userId).then(response =>{
            if (response.data.resultCode == 0){
                dispatch(followSuccess(userId)); 
            }
            dispatch(setToggleIsFollowing(false));
        });
        
}
}

export const unfollow =(userId) =>{ 
    return (dispatch) =>{
        dispatch(setToggleIsFollowing(true));
        UsersAPI.follow(userId).then(response =>{
            if (response.data.resultCode == 0){
                dispatch(unfollowSuccess(userId)); 
            }
            dispatch(setToggleIsFollowing(false));
        });
        
}
}