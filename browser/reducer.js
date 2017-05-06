import { combineReducers } from 'redux';
import AppReducer from './App/AppReducer';
import LoginReducer from './Login/LoginReducer';
import ChatReducer from './Chat/ChatReducer';

const rootReducer = combineReducers({
  auth: LoginReducer,
  app: AppReducer,
  messages: ChatReducer,
});

export default rootReducer;
