import axios from 'axios';

export const SELECT_CHATROOM = 'SELECT_CHATROOM';
export const SET_ALL_CHATROOMS = 'SET_ALL_CHATROOMS';

export const selectChatroom = (chatroomId) => ({
  type: SELECT_CHATROOM,
  chatroomId,
});

export const setAllChatrooms = (allChatrooms) => ({
  type: SET_ALL_CHATROOMS,
  allChatrooms,
});

export const fetchAllChatrooms = () => (dispatch) => {
  axios.get('/api/chatrooms')
  .then(res => res.data)
  .then(allChatrooms => dispatch(setAllChatrooms(allChatrooms)))
  .catch(err => console.error('Fetch all chatrooms unsuccessful', err));
};
