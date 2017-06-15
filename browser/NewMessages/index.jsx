import React from 'react';
import { connect } from 'react-redux';
import { array } from 'prop-types';

import { getNewMessages } from './NewMessagesReducer';

export const NewMessages = ({ newMessages }) => {
  return (
    <div className="container-chatbox">
      <h2 className="chatroom-title">New Messages</h2>
      <hr />
      <div className="container-chat-history">
        {newMessages.map(newMessage => (
          <div key={`${newMessage.user_id}-${newMessage.chatroom_id}-${newMessage.id}-new`}>
            <div className="message-content-header">Chatroom - {newMessage.chatroom.name}</div>
            <div className="chat-message">{newMessage.user.username} : {newMessage.content}</div>
          </div>
          ))}
      </div>
      <hr />
    </div>
  );
};

NewMessages.propTypes = {
  newMessages: array.isRequired,
};

const mapStateToProps = (state) => ({ newMessages: getNewMessages(state) });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewMessages);
