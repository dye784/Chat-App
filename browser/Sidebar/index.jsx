import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Logout from '../Logout/index.jsx';
import Login from '../Login/index.jsx';

export const Sidebar = ({ chatrooms, auth }) => (
  <div className="container-sidebar">
    <Logout />
    <h3>CHATROOMS</h3>
    {chatrooms.map((chatroom) => (
      <Link to={`/chatrooms/${chatroom.id}`} key={chatroom.name}>
        <h5>#{chatroom.name}</h5>
      </Link>
    ))}
    <Link to="/newMessages">VIEW NEW MESSAGES</Link>
  </div>
);

const mapStateToProps = ({ chatrooms, auth }) => ({ chatrooms, auth });

export default connect(mapStateToProps)(Sidebar);
