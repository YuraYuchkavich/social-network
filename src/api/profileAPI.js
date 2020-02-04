import axios from 'axios';
import { faCross } from '@fortawesome/free-solid-svg-icons';


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
    
    getMessage(){
        debugger;
        return axios.get(`http://localhost:4000/api/users`);
    },
    sendMessage(){
        return axios.get(`http://localhost:4000/api/users`);
      /*  var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            return fetch('http://localhost:4000/api/user', {
            method: 'post',
            headers: myHeaders,
            mode: 'cors',
            body: JSON.stringify({
            "message": "test"
            })
            });*/
    }
}




