import  {UsersAPI} from '../api/profileAPI';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
export let stateInit ={
    profile:null

};

const  profileReducer = (state  = stateInit, action) => {
    switch(action.type){
        case SET_USER_PROFILE:
            {
                debugger;
                return {...state,profile: action.profile};
            }   
        default:
            return state;
    }
}
      
export default profileReducer;


export const setUserProfile = (value) =>{
    return{
        type:SET_USER_PROFILE,
        profile:value
    }
}

export const getM =(userId) =>{ 
    return (dispatch) =>{
        debugger;
        UsersAPI.sendMessage().then(response =>{
                dispatch(setUserProfile(response)); 
        });
}
}

export const SendM =(message) =>{ 
    return (dispatch) =>{
        debugger;
        UsersAPI.SendMessage(message).then(response =>{
                dispatch(setUserProfile(response)); 
        });
}
}