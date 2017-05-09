import React from 'react';
import { connect } from 'react-redux';

export const NewMessages = ({ newMessages }) => {
  return (
    <div>
      <h2>New Messages</h2>
      {newMessages.map(newMessage => (
        <div key={`${newMessage.user_id}-${newMessage.chatroom_id}-${newMessage.id}-new`}>
          <h3>Chatroom - {newMessage.chatroom.name}</h3>
          <h4>{newMessage.user.username} : {newMessage.content}</h4>
        </div>
        ))}
    </div>
  );
};

const mapStateToProps = ({ newMessages }) => ({ newMessages });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewMessages);
