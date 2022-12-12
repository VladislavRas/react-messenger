import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        My posts
        <div>
            New post
        </div>
        <div className={s.posts}>
            <Post message='Hello, how a u?' likesCount='0'/>
            <Post message="It`s my new post" likesCount='23'/>
        </div>
    </div>
}

export default MyPosts;

