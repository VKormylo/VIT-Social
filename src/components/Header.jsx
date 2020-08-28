import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://d18qs7yq39787j.cloudfront.net/uploads/contest/1237/small_pic_firefox.png' />
        </header>
    );
}

export default Header;