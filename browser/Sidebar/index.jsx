import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export const Sidebar = ({ chatrooms }) => {
  return (
    <div style={{ height: '100px' }}>
      CHATROOMS
      {chatrooms.map((chatroom) => {
        return (
          <Link to={`/${chatroom.id}`} key={chatroom.name}>
            {chatroom.name}
          </Link>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ chatrooms }) => ({ chatrooms });

export default connect(mapStateToProps)(Sidebar);
