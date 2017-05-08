import { LOAD_NEW_CHAT_MESSAGES } from './NewMessagesActionCreators';

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_NEW_CHAT_MESSAGES:
      return [...action.newMessages];
    default:
      return state;
  }
};

export default reducer;
