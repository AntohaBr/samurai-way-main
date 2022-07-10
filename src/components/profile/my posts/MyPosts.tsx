import React from 'react';
import s from './MyPosts.module.css';
import Post from "./post/Post";


const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea></textarea>
                </div>
                <div>
                <button>Add post</button>
                <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how a you?' likesCount='0'/>
                <Post message='It`s my first post' likesCount='23'/>
            </div>
        </div>
    );
}

export default MyPosts;