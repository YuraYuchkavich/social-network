const SET_INITIALZED = 'SET_INITIALZED';
export let stateInit ={
     initilized:false
};

const  appReducer = (state  = stateInit, action) => {
    switch(action.type){
        case SET_INITIALZED:
            {   
               
                return {
                    ...state,
                    initilized:true
                };
            }   
        default:
            return state;
    }
}



export const initilized = () =>{
    return{
        type:SET_INITIALZED
        
    }
}

export const initilizeApp = () => (dispatch) =>{
       // let  promise = dispatch();

        Promise.all([promise]
            .then(()=>{
            
        dispatch(initilized())
        })
 
}

      
export default appReducer;
