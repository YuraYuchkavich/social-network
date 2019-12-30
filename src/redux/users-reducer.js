
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export let stateInit ={
    users: [
    /*{id:1,fullName: 'Yury', status:'I am a boss', location:{city: 'Minsk',country:'Belarus'},followed:false},
    {id:1,fullName: 'dima', status:'I am a boss', location:{city: 'Kiev',country:'Belarus'},followed:false},
    {id:1,fullName: 'Sasha', status:'I am a boss', location:{city: 'Moscow',country:'Belarus'},followed:true},
    {id:1,fullName: 'Yury', status:'I am a boss', location:{city: 'London',country:'Belarus'},followed:true}*/
]
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
        default:
            return state;
    }
}
      
export default usersReduserce;

export const followAC = (value) =>{
    return{
        type:FOLLOW,
        userId:value
     
    }
}

export const unfollowAC = (value) =>{
    return{
        type:UNFOLLOW,
        userId:value
    }
}

export const setUsersAC= (value) =>{
    return{
        type:SET_USERS,
        users:value
    }
}