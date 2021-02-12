import React from 'react';
import userPhoto from '../../assets/images/user.png';
import styles from './users.module.css';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, unfollow, follow }) => {
    return (

        <div className={styles.users}>
            <div className={styles.ava}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {user.followed ?
                        <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { unfollow(user.id) }
                            }>Unfollow</button>
                        :
                        <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { follow(user.id) }
                            }>Follow</button>}
                </div>
            </div>
            <div className={styles.userInfo}>
                <div className={styles.personal}>
                    <div className={styles.name}>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div className={styles.location}>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </div>
            </div>
        </div>
    )
}

export default User;