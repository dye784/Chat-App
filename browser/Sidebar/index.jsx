import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { array } from 'prop-types';

import Logout from '../Logout';
import { getAllChatrooms } from './SidebarReducer';

const linkStyle = { textDecoration: 'none' };

export const Sidebar = ({ chatrooms }) => (
  <div className="container-sidebar">
    <div>
      <Logout />
      <h3 className="chatroom-title">CHATROOMS</h3>
      <hr />
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

Sidebar.propTypes = {
  chatrooms: array.isRequired,
};

const mapStateToProps = (state) => ({
  chatrooms: getAllChatrooms(state),
});

export default connect(mapStateToProps)(Sidebar);
