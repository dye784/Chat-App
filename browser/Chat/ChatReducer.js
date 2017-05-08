import { ADD_NEW_MESSAGE, LOAD_CHAT_MESSAGES, LOAD_NEW_CHAT_MESSAGES } from './ChatActionCreators';

const initialState = {
  messageHistory: [],
  isViewingNewMessages: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      return { messageHistory: [...state.messageHistory, action.message], isViewingNewMessages: false };
    case LOAD_CHAT_MESSAGES:
      return { messageHistory: [...action.messages], isViewingNewMessages: false };
    case LOAD_NEW_CHAT_MESSAGES:
      return { messageHistory: [...action.newMessages], isViewingNewMessages: true };
    default:
      return state;
  }
};

export default reducer;
