import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";

const MyPosts = (props) => {
    
    let postsElements = props.posts.map((post) => {return(<Post message={post.postText} likesCount={post.likesCount}/>);});

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return <div>
        My posts
        <div>
            <textarea placeholder='New post...' ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
        </div>
        <div>
            <button onClick={addPost}>New post</button>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;

