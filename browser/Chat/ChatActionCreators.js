import axios from 'axios';

export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
export const LOAD_CHAT_MESSAGES = 'LOAD_CHAT_MESSAGES';
export const LOAD_NEW_CHAT_MESSAGES = 'LOAD_NEW_CHAT_MESSAGES'

export const addNewMessage = (message) => ({
  type: ADD_NEW_MESSAGE,
  message,
});

export const loadChatMessages = (messages) => ({
  type: LOAD_CHAT_MESSAGES,
  messages,
});

export const loadNewChatMessages = (newMessages) => ({
  type: LOAD_NEW_CHAT_MESSAGES,
  newMessages,
});

export const fetchAllMessagesForChatroom = (chatroomId) => (dispatch) => (
  axios.get(`/api/chatrooms/${chatroomId}/messages`)
  .then(res => res.data)
  .then(receivedMessages => dispatch(loadChatMessages(receivedMessages)))
);

export const fetchNewMessagesForChatroom = (chatroomId) => (dispatch) => (
  axios.get(`/api/chatrooms/${chatroomId}/messages/new`)
  .then(res => res.data)
  .then(receivedNewMessages => dispatch(loadNewChatMessages(receivedNewMessages)))
);
