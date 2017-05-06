import { SELECT_CHATROOM, SET_ALL_CHATROOMS } from './SidebarActionCreators';

const initialState = {
  selectedChatroom: 1,
  allChatrooms: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CHATROOM:
      return Object.assign(state, { selectedChatroom: action.chatroomId });
    case SET_ALL_CHATROOMS:
      return Object.assign(state, { allChatrooms: action.allChatrooms });
    default:
      return state;
  }
};

export default reducer;
