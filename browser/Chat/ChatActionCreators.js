import axios from 'axios';

export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
export const LOAD_CHAT_MESSAGES = 'LOAD_CHAT_MESSAGES';

export const addNewMessage = (message) => ({
  type: ADD_NEW_MESSAGE,
  message,
});

export const loadChatMessages = (messages) => ({
  type: LOAD_CHAT_MESSAGES,
  messages,
});

export const fetchAllMessagesForChatroom = (chatroomId) => (dispatch) => (
  axios.get(`/api/chatrooms/${chatroomId}/messages`)
  .then(res => res.data)
  .then(receivedMessages => dispatch(loadChatMessages(receivedMessages)));
);
