import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Logout from '../Logout/index.jsx';
import Login from '../Login/index.jsx';

const linkStyle = { textDecoration: 'none' };

export const Sidebar = ({ chatrooms, auth }) => (
  <div className="container-sidebar">
    <div>
      <Logout />
      <h3>CHATROOMS</h3>
    </div>
    <div className="container-sidebar-chatrooms">
      <Link to="/newMessages" style={linkStyle}>
        <h5 className="chatroom-link">NEW MESSAGES</h5>
      </Link>
      {chatrooms.map((chatroom) => (
        <Link style={linkStyle} activeStyle={{ color: 'red' }} to={`/chatrooms/${chatroom.id}`} key={chatroom.name}>
          <h5 className="chatroom-link">#  {chatroom.name}</h5>
        </Link>
      ))}
    </div>
  </div>
);

const mapStateToProps = ({ chatrooms, auth }) => ({ chatrooms, auth });

export default connect(mapStateToProps)(Sidebar);
