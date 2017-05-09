import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Logout from '../Logout/index.jsx';
import Login from '../Login/index.jsx';

export const Sidebar = ({ chatrooms, auth }) => (
  <div className="container-sidebar">
    <div>
      <Logout />
      <h3>CHATROOMS</h3>
    </div>
    <div className="container-sidebar-chatrooms">
      <Link to="/newMessages">NEW MESSAGES</Link>
      {chatrooms.map((chatroom) => (
        <Link to={`/chatrooms/${chatroom.id}`} key={chatroom.name}>
          <h5>#{chatroom.name}</h5>
        </Link>
      ))}
    </div>
  </div>
);

const mapStateToProps = ({ chatrooms, auth }) => ({ chatrooms, auth });

export default connect(mapStateToProps)(Sidebar);
