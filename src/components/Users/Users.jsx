import React from 'react';
import userPhoto from '../../assets/images/user.png';
import styles from './users.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { usersAPI } from '../../api/api';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={styles.page}>
                {pages.map(p => {
                    return <span className={` ${styles.pageText} ${props.currentPage === p && styles.selectedPage}`} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u =>
                    <div key={u.id} className={styles.users}>
                        <div className={styles.ava}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed ?
                                    <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => { props.unfollow(u.id) }
                                        }>Unfollow</button>
                                    :
                                    <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => { props.follow(u.id) }
                                        }>Follow</button>}
                            </div>
                        </div>
                        <div className={styles.userInfo}>
                            <div className={styles.personal}>
                                <div className={styles.name}>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div className={styles.location}>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Users;