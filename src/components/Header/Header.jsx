import React from "react";
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img src="https://www.clipartmax.com/png/full/299-2997039_subscribe-to-our-email-list-e-mail-icon-png.png" />
        <div className={s.logoText}>
            RV Messenger
        </div>
    </header>
}

export default Header;

