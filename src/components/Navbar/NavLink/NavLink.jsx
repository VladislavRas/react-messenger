import React from "react";
import s from './NavLink.module.css';
import SvgSelector from "./SvgSelector.jsx";

const NavLink = (props) => {
    if (props.type === 'active') {
        var type = `${s.item} ${s.active}`;
    } else {
        type = `${s.item}`;
    }
    return <div className={type}>
        <SvgSelector id={props.icon}/>
        <div className={s.linkText}>
            <a href={props.link}>{props.name}</a>
        </div>
    </div>
}

export default NavLink;