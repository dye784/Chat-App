import { combineReducers } from 'redux';
import AppReducer from './App/AppReducer';
import LoginReducer from './Login/LoginReducer';
import ChatReducer from './Chat/ChatReducer';
import SidebarReducer from './Sidebar/SidebarReducer';

const rootReducer = combineReducers({
  auth: LoginReducer,
  app: AppReducer,
  messages: ChatReducer,
  selectedChatroom: SidebarReducer,
});

export default rootReducer;
