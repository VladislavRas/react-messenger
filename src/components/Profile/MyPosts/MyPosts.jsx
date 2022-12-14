import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, postText: 'Hello, how a u?', likesCount: '0'}, 
        {id: 2, postText: 'It`s my new post', likesCount: '23'}, 
        {id: 3, postText: 'I love my dog Vinchi and my wife Mary', likesCount: '12'}
    ]

    let postsElemets = postsData.map((post) => {return(<Post message={post.postText} likesCount={post.likesCount}/>);});

    return <div>
        My posts
        <div>
            New post
        </div>
        <div className={s.posts}>
            {postsElemets}
        </div>
    </div>
}

export default MyPosts;

