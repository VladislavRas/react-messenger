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
    }
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
    if (action.type === ADD_POST){
      let newPost = {
        id: 4,
        postText: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } 
    else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } 
    else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagesPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } 
    else if (action.type === SEND_MESSAGE) {
      let body = this._state.messagesPage.newMessageBody;
      this._state.messagesPage.newMessageBody = '';
      this._state.messagesPage.messages.push({ id: 4, message: body});
      this._callSubscriber(this._state);
    }
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