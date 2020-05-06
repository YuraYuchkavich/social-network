export const getUsersSelector = (state) =>{
    return state.usersReducer.users;
}


export const  getPageSize = (state) =>{
    return state.usersReducer.pageSize;
}