import  {UsersAPI} from '../api/profileAPI';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const UPDATE_STATUS = 'UPDATE_STATUS';

export let stateInit ={
    profile:null,
    status:'test'
};

const  profileReducer = (state  = stateInit, action) => {
    switch(action.type){
        case SET_USER_PROFILE:
            {
                debugger;
                return {...state,profile: action.profile};
            } 
            case UPDATE_STATUS:
            {
                debugger;
                return {...state,status: action.status};
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


export const updateStatus = (value) =>{
    return{
        type:UPDATE_STATUS,
        status:value
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