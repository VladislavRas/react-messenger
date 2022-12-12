import React from "react";
import s from './Navbar.module.css';
import NavLink from "./NavLink/NavLink";

const Navbar = () => {
    return <nav className={s.nav}>
        <NavLink type='active' name='Profile' icon='profile' link='/profile'/>
        <NavLink name='Messages' icon='messages' link='/dialogs'/>
        <NavLink name='News' icon='news'/>
        <NavLink name='Calls' icon='calls'/>
        <NavLink name='Settings' icon='settings'/>
    </nav>
}

export default Navbar;


