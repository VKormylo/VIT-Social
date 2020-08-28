import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' />
            </div>
            <div>
                Ava + descr
            </div>
            <div>
                My post
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>Post 1</div>
                <div className={s.item}>Post 2</div>
            </div>
        </div>
    );
}

export default Profile;
