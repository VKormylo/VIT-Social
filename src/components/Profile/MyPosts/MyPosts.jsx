import React from 'react';
import AddPostForm from './AddPostForm/AddPostForm';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = [
        props.posts.map(p =>
            <Post message={p.message} likesCount={p.likesCount} />
        )
    ];

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostForm onSubmit={onAddPost} />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;