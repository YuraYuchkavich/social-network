const SET_USER_DATA = 'SET_USER_DATA';
export let stateInit ={
       userId:null,
       email:null,
       login: null,
       isAuth:false,
       isFetching:false,

};

const  authReducer = (state  = stateInit, action) => {
    switch(action.type){
        case SET_USER_DATA:
            {   
                let stateCopy  = {...state};
                    stateCopy.userId = action.data.data.id;
                    stateCopy.email = action.data.data.email;
                    stateCopy.login = action.data.data.login;
                    stateCopy.isAuth = true;
                return stateCopy;
            }   
        default:
            return state;
    }
}
      
export default authReducer;


export const setUserData = (value) =>{
    return{
        type:SET_USER_DATA,
        data:value
    }
}