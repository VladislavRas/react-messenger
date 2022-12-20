import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { ReactComponent as SendIcon } from "../../assets/send-icon.svg";

const Dialogs = (props) => {

    let state = props.messagesPage;

    let messagesElements = state.messages.map(
        (message) => { return (<Message message={message.message} />); }
    );

    let dialogsElements = state.dialogs.map(
        (dialog) => { return (<DialogItem name={dialog.name} id={dialog.id} />); }
    );

    let newMessageBody = state.newMessageBody;

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messagesElements}>{messagesElements}</div>
                <div className={s.newMessageBlock}>
                    <div><textarea placeholder='New message...' value={newMessageBody} onChange={onNewMessageChange}></textarea></div>
                    <div><button onClick={onSendMessageClick}><SendIcon /></button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs; 