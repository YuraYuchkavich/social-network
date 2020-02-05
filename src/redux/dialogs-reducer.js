const SEND_MESSAGE = 'SEND_MESSAGE';
export let stateInit ={
       login: null,
       message:null,
       isAuth:true,
       isFetching:false,

};

const  dialogsReducer = (state  = stateInit, action) => {
    switch(action.type){
        case SEND_MESSAGE:
            {   
                
                return state;
            }   
        default:
            return state;
    }
}
      
export default dialogsReducer;


export const ssendMessage = (value) =>{
    return{
        type:SEND_MESSAGE,
        message:value
    }
}