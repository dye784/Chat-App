import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducer';
import { addNewMessage } from './Chat/ChatActionCreators';
import io from 'socket.io-client';

const store = createStore(reducer,
  applyMiddleware(createLogger({ collapsed: true }), thunkMiddleware));

export default store;

// Connect socket
export const socket = io('http://localhost:1337/');

socket.on('connect', () => {
  socket.on('addMessage', (message) => {
    store.dispatch(addNewMessage(message));
  });
});
