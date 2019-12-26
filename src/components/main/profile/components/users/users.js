import React from 'react';

import './users.css';


const Users  = (props) => {


    return <div className = "Users">
            {
                props.users.map( user => <div key = {user.id}>
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
                            {user.fullName}
                        </div>
                    </span>
                </div>
                )
            }
        </div>
    
}



export default Users;
