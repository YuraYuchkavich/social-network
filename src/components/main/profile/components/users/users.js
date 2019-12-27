import React from 'react';
import axios from 'axios';

import './users.css';


class Users  extends React.Component {
    constructor(props){
        super(props);
    }
   
    componentDidMount(){
        axios.get(" https://social-network.samuraijs.com/api/1.0/users").then(response =>{
        this.props.setUsers(response.data.items);
    });
    }

    componentDidUpdate(){

    }

    render(){
        debugger;
        return <div className = "Users">
                {
                    this.props.users.map( user => <div key = {user.id}>
                        <span>
                            <div>
                                <img />
                            </div>
                            <div>
                                {user.followed ?    <button>follow</button> :     <button>unfollow</button>}
                            
                            </div>
                        </span>
                        <span>
                            <div>
                                {user.name}
                            </div>
                        </span>
                    </div>
                    )
                }
            </div>
        
    }
}



export default Users;
