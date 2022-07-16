import React from 'react';
import s from './MyPosts.module.css';
import Post from "./post/Post";


const MyPosts = () => {
    let posts=[
        {id:1, message:'Hi, how a you?', likesCount:12},
        {id:2, message:'It`s my first post', likesCount:10},

    ]

    let postsElement=posts.map(p=> <Post message={p.message} likesCount={p.message}/>)

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
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;