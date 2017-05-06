import { combineReducers } from 'redux';
import LoginReducer from './Login/LoginReducer';
import ChatReducer from './Chat/ChatReducer';
import SidebarReducer from './Sidebar/SidebarReducer';

const rootReducer = combineReducers({
  auth: LoginReducer,
  messages: ChatReducer,
  chatrooms: SidebarReducer,
});

export default rootReducer;
