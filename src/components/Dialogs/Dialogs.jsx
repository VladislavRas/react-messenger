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

    let dialogsData = [
        {id: 1, name: 'Uriy Michurin'}, 
        {id: 2, name: 'Dmitry Mazanov'},
        {id: 3, name: 'Pavel Kostyrev'}
    ]

    let messagesData = [
        {id: 1, message: 'Firts message'}, 
        {id: 2, message: 'Very very very long long long second second second message message message'},
        {id: 3, message: 'Third message'}
    ]

    let messagesElements = messagesData.map(
        (message) => 
        {return(<Message message={message.message} />);}
        );

    let dialogsElements = dialogsData.map(
        (dialog) => 
        {return(<DialogItem name={dialog.name} id={dialog.id}/>);}
        );
    
        
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;