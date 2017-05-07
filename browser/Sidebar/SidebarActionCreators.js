import axios from 'axios';

export const SET_ALL_CHATROOMS = 'SET_ALL_CHATROOMS';

export const setAllChatrooms = (allChatrooms) => ({
  type: SET_ALL_CHATROOMS,
  allChatrooms,
});

export const fetchAllChatrooms = () => (dispatch) => {
  axios.get('/api/chatrooms')
  .then(res => res.data)
  .then(allChatrooms => dispatch(setAllChatrooms(allChatrooms)));
};
