const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
      { id: 1, postText: 'Hello, how a u?', likesCount: '0' },
      { id: 2, postText: 'It`s my new post', likesCount: '23' },
      { id: 3, postText: 'I love my dog Vinchi and my wife Mary', likesCount: '12' }
    ],
    newPostText: ''
  };

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                postText: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            return state;
        }
        default: {
            return state;
        }
    }
}

export default profileReducer;