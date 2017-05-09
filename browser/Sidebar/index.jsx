import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


export const Sidebar = ({ chatrooms, fetchNewMessagesForChatroom }) => (
  <div>
    CHATROOMS
    {chatrooms.map((chatroom) => (
      <Link to={`/chatrooms/${chatroom.id}`} key={chatroom.name}>
        {chatroom.name}
      </Link>
    ))}
    <Link to="/newMessages">VIEW NEW MESSAGES</Link>
  </div>
);

const mapStateToProps = ({ chatrooms }) => ({ chatrooms });

export default connect(mapStateToProps)(Sidebar);
