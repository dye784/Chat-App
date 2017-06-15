import { SET_ALL_CHATROOMS } from './SidebarActionCreators';

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_ALL_CHATROOMS:
      return action.allChatrooms;
    default:
      return state;
  }
};

export default reducer;

export const getAllChatrooms = (state) => state.chatrooms;
