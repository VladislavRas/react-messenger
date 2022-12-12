import React from "react";
import s from './NavbarLink.module.css';
import SvgSelector from "./SvgSelector.jsx";
import { NavLink } from "react-router-dom";

const NavbarLink = (props) => {
    if (props.type === 'active') {
        var type = `${s.item} ${s.active}`;
    } else {
        type = `${s.item}`;
    }
    return (
        <div className={s.linkWrapper}>
            <NavLink to={props.link} className = { navData => navData.isActive ? s.active : s.textLink }> <div className={s.linkText}> <div className={s.image}><SvgSelector id={props.icon}/></div>{props.name} </div></NavLink>
        </div>
    )

}


export default NavbarLink;