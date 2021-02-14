import React from "react";
import s from "./Post.module.css";
import userPhoto from "../../../../assets/images/user.png";

const Post = (props) => {
  return (
    <div className={s.items}>
      <div className={s.item}>
        <img src={userPhoto} />
        <div>{props.message}</div>
      </div>
      <div className={s.likes}>
        <span>{props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
