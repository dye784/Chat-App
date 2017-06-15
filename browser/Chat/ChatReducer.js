import { ADD_NEW_MESSAGE, LOAD_CHAT_MESSAGES } from './ChatActionCreators';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      return [...state, action.message];
    case LOAD_CHAT_MESSAGES:
      return [...action.messages];
    default:
      return state;
  }
};

export default reducer;

export const getAllMessages = (state) => state.messages;

export const getMessagesChatroomName = (state) => state.messages[0] && state.messages[0].chatroom.name;
