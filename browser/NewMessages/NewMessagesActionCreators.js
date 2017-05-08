import axios from 'axios';

export const LOAD_NEW_CHAT_MESSAGES = 'LOAD_NEW_CHAT_MESSAGES';

export const loadNewChatMessages = (newMessages) => ({
  type: LOAD_NEW_CHAT_MESSAGES,
  newMessages,
});

export const fetchNewMessages = () => (dispatch) => (
  axios.get('/api/chatrooms/messages/new')
  .then(res => res.data)
  .then(receivedNewMessages => dispatch(loadNewChatMessages(receivedNewMessages)))
);
