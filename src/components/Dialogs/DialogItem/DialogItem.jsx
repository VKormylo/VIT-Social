import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialogsItem}>
            <img src="https://img.pngio.com/user-profile-avatar-job-social-businessman-profession-user-profile-png-512_512.png" alt=""/>
            <NavLink className={s.dialogItem} activeClassName={s.activeLink} to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;