import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
        return (
            <header className={s.header}>
                <img src='https://d18qs7yq39787j.cloudfront.net/uploads/contest/1237/small_pic_firefox.png' />

                <div className={s.loginBlock}>
                    {props.isAuth 
                    ? <div>{props.login}<button onClick={props.logout}>Logout</button></div> 
                    : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </header>
        );
    }

export default Header;