const UPDATE_BACKGROUN = 'UPDATE_BACKGROUN';
const UPDATE = 'UPDATE';

const  backgroundReducer = (state, action) => {
    if (action.type == UPDATE_BACKGROUN ) {
        state.getBackground(UPDATE_BACKGROUN)       
    }
    return state;
}

export default backgroundReducer;