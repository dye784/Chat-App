import axios from 'axios';
import { socket } from '../store';

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
  .then(receivedMessages => dispatch(loadChatMessages(receivedMessages)))
  .catch(err => console.error('Fetching messages for chatroom unsuccessful', err))
);

export const postNewMessageToServer = (userId, chatroomId, content) => (dispatch) => (
  axios.post(`/api/chatrooms/${chatroomId}/messages`, {
    content,
    userId,
    chatroomId,
  })
  .then(res => res.data)
  .then((createdMessage) => {
    dispatch(addNewMessage(createdMessage));
    socket.emit('newMessage', createdMessage);
  })
  .catch(err => console.error('Creating message unsuccessful', err))
);
