import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/store";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            { (store) => {

                let state = store.getState();

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }

                return <Dialogs updateNewMessageBody={onNewMessageChange} 
                sendMessage={onSendMessageClick} 
                messagesPage={state.messagesPage} />
            }
        }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;