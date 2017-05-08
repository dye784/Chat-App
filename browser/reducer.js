import { combineReducers } from 'redux';
import LoginReducer from './Login/LoginReducer';
import ChatReducer from './Chat/ChatReducer';
import SidebarReducer from './Sidebar/SidebarReducer';
import NewMessagesReducer from './NewMessages/NewMessagesReducer';

const rootReducer = combineReducers({
  auth: LoginReducer,
  messages: ChatReducer,
  chatrooms: SidebarReducer,
  newMessages: NewMessagesReducer,
});

export default rootReducer;
