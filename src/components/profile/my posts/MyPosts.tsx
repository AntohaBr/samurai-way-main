import React from 'react';
import s from './MyPosts.module.css';
import Post from "./post/Post";


const MyPosts = () => {
    let postsData=[
        {id:1, message:'Hi, how a you?', likesCount:12},
        {id:2, message:'It`s my first post', likesCount:10},

    ]
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
                <Post message={postsData[0].message} likesCount={postsData[0].message}/>
                <Post message={postsData[1].message} likesCount={postsData[1].message}/>
            </div>
        </div>
    );
}

export default MyPosts;