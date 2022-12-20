const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    messages: [
      { id: 1, message: 'Firts message' },
      { id: 2, message: 'Very very very long long long second second second message message message' },
      { id: 3, message: 'Third message' }
    ],

    dialogs: [
      { id: 1, name: 'Uriy Michurin' },
      { id: 2, name: 'Dmitry Mazanov' },
      { id: 3, name: 'Pavel Kostyrev' }
    ],
    newMessageBody: ""
  };

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            state.newMessageBody = action.body;
            return state;
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 4, message: body });
            return state;
        }
        default: {
            return state;
        }
    }

}

export default messagesReducer;