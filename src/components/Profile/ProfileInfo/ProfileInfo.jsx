import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div className={s.wrapper}>
        <div className={s.profileImage}>
            <img src="https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
        </div>
        <div className={s.profileAvatar}>
            <img src='https://i10.fotocdn.net/s131/c20ebc58ccdf1ec7/user_m/2960335092.jpg' />
            <div className={s.profileName}>Vladislav<br/>Rastegaev</div>
        </div>
    </div>
}

export default ProfileInfo;

