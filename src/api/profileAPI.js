import axios from 'axios';


const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":'7f958cb2-87a5-4e90-acf4-c1de5fb6f621'
    }

});

export const UsersAPI ={
    getUsers(currentPage = 1,pageSize = 3){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {return response.data});
    },

    follow(userId){
        return instance.post(`follow/${userId}`);
    },

    unfollow(userId){
        return instance.delete(`follow/${userId}`);
    },

    getMessage(userID){
        return axios.get(`/api/users`);
    },
    SendMessage(userID){
        return axios.post(`/api/user`);
    }
}




