import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


export const Sidebar = ({ chatrooms, fetchNewMessagesForChatroom }) => (
  <div className="container-sidebar">
    <h3>CHATROOMS</h3>
    {chatrooms.map((chatroom) => (
      <Link className="container-sidebar" to={`/chatrooms/${chatroom.id}`} key={chatroom.name}>
        <h5>{chatroom.name}</h5>
      </Link>
    ))}
    <Link to="/newMessages">VIEW NEW MESSAGES</Link>
  </div>
);

const mapStateToProps = ({ chatrooms }) => ({ chatrooms });

export default connect(mapStateToProps)(Sidebar);
