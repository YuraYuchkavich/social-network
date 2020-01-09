import React from 'react';

import styles from './users.module.css';

let Users = (props) =>{

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
        for (let i=1; i<=pagesCount; i++){
            pages.push(i);
        }

    return <div className = {styles.Users}>
                <div>
                    {pages.map( p => {
                    return <span className = {props.currentPage ===p && styles.selectedPage }
                    onClick = {() =>{props.onPageChanged(p)}}>{p}</span>
                })}
                </div>
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
                                {user.name}
                            </div>
                        </span>
                    </div>
                    )
                }
            </div>
}

export default Users;