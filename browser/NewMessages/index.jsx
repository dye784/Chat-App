import React from 'react';
import { connect } from 'react-redux';

export const NewMessages = ({ newMessages }) => {
  return (
    <div className="container-chatbox">
      <h2 className="chatroom-title">New Messages</h2>
      <hr />
      <div className="container-chat-history">
        {newMessages.map(newMessage => (
          <div key={`${newMessage.user_id}-${newMessage.chatroom_id}-${newMessage.id}-new`}>
            <h3>Chatroom - {newMessage.chatroom.name}</h3>
            <h5>{newMessage.user.username} : {newMessage.content}</h5>
          </div>
          ))}
      </div>
      <hr />
    </div>
  );
};

const mapStateToProps = ({ newMessages }) => ({ newMessages });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewMessages);
