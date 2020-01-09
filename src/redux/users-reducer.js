
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRETN_PAGE = 'SET_CURRETN_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

export let stateInit ={
    users: [],
    pageSize:100,
    totalUsersCount: null ,
    currentPage: null

};

const  usersReduserce = (state  = stateInit, action) => {
    switch(action.type){
        case FOLLOW:
            {
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
        default:
            return state;
    }
}
      
export default usersReduserce;

export const follow = (value) =>{
    return{
        type:FOLLOW,
        userId:value
     
    }
}

export const unfollow = (value) =>{
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