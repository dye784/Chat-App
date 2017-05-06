import React from 'react';
import { connect } from 'react-redux';
import { selectChatroom } from './SidebarActionCreators';

export const Sidebar = ({ allChatrooms, selectChatroom }) => {
  return (
    <div>
      {allChatrooms.map((chatroom) => {
        return (
          <button id={chatroom.name} onClick={() => selectChatroom(chatroom.id)}>
            {chatroom.name}
          </button>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ chatrooms }) => ({
  allChatrooms: chatrooms.allChatrooms,
  selectedChatroom: chatrooms.selectedChatroom,
});

const mapDispatchToProps = { selectChatroom };

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
