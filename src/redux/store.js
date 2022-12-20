import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
  _state: {

    profilePage: {
      posts: [
        { id: 1, postText: 'Hello, how a u?', likesCount: '0' },
        { id: 2, postText: 'It`s my new post', likesCount: '23' },
        { id: 3, postText: 'I love my dog Vinchi and my wife Mary', likesCount: '12' }
      ],
      newPostText: ''
    },

    messagesPage: {
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
    },
    
    sidebar: {}
  },

  _callSubscriber() {
    console.log('State changed');
  },



  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },



  dispatch(action) {
    
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

  }

}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }    
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  }    
}

export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  }
}

export default store;
window.store = store;