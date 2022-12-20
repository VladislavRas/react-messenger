import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map((post) => { return (<Post message={post.postText} likesCount={post.likesCount} />); });

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return <div>
        My posts
        <div className={s.newPostBlock}>
            <div>
                <textarea placeholder='New post...' ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
            </div>
            <div>
                <div><button onClick={onAddPost}>New post</button></div>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;

