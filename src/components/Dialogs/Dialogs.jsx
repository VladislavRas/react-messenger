import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
    <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}

const Message = (props) => {
    return(
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='UraPirat' id='1'/>
                <DialogItem name='Dim0chka' id='2'/>
                <DialogItem name='Pashtet' id='3'/>
            </div>
            <div className={s.messages}>
                <Message message='Firts message' />
                <Message message='Very very very long long long second second second message message message' />
                <Message message='Third message' />
            </div>
        </div>
    )
}

export default Dialogs;