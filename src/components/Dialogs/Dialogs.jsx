import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/state";

const Dialogs = (props) => {

    let state = props.store.getState().messagesPage;

    let messagesElements = state.messages.map(
        (message) => { return (<Message message={message.message} />); }
    );

    let dialogsElements = state.dialogs.map(
        (dialog) => { return (<DialogItem name={dialog.name} id={dialog.id} />); }
    );

    let newMessageBody = state.newMessageBody;

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body)); 
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder='New message...' value={newMessageBody} onChange={onNewMessageChange}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs; 