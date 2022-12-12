import React from "react";
import s from './Navbar.module.css';
import NavbarLink from "./NavLink/NavbarLink";

const Navbar = () => {
    return <nav className={s.nav}>
        <NavbarLink name='Profile' icon='profile' link='/profile'/>
        <NavbarLink name='Messages' icon='messages' link='/dialogs'/>
        <NavbarLink name='News' icon='news' link='/news'/>
        <NavbarLink name='Calls' icon='calls' link='/calls'/>
        <NavbarLink name='Settings' icon='settings' link='/settimgs'/>
    </nav>
}

export default Navbar;


