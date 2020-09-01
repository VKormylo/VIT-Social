import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://d18qs7yq39787j.cloudfront.net/uploads/contest/1237/small_pic_firefox.png" />
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;
