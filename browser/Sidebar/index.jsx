import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Logout from '../Logout/index.jsx';

const linkStyle = { textDecoration: 'none' };

export const Sidebar = ({ chatrooms, auth }) => (
  <div className="container-sidebar">
    <div>
      <Logout />
      <h3 className="sidebar-chatroom">CHATROOMS</h3>
    </div>
    <div className="container-sidebar-chatrooms">
      <Link to="/newMessages" style={linkStyle}>
        <h5 className="chatroom-link new-messages">NEW MESSAGES</h5>
      </Link>
      {chatrooms.map((chatroom) => (
        <div key={chatroom.name} className="sidebar-chatroom-link">
          <Link style={linkStyle} to={`/chatrooms/${chatroom.id}`}>
            <h5 className="chatroom-link">#  {chatroom.name}</h5>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

const mapStateToProps = ({ chatrooms, auth }) => ({ chatrooms, auth });

export default connect(mapStateToProps)(Sidebar);
