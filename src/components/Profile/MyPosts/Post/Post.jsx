import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>
        <img src='https://i10.fotocdn.net/s131/c20ebc58ccdf1ec7/user_m/2960335092.jpg' />
        {props.message}
        <div>
            <span>Likes: </span> {props.likesCount}
        </div>
    </div>
}

export default Post;

 