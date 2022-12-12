import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

const Profile = () => {
    return <div>
        <div className={s.profileImage}>
            <img src="https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
}

export default Profile;

