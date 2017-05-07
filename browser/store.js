import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducer';
import { addNewMessage } from './Chat/ChatActionCreators';

const store = createStore(reducer,
  applyMiddleware(createLogger({ collapsed: true }), thunkMiddleware));

export default store;

// Connect socket
export const socket = io();

socket.on('connect', () => {
  socket.on('addMessage', (message) => {
    store.dispatch(addNewMessage(message));
  });
});

