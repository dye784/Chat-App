import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { postNewMessageToServer, addNewMessage, fetchNewMessagesForChatroom } from './ChatActionCreators';
import { socket } from '../store';

export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' }
  }

  handleChange = (evt) => {
    this.setState({ message: evt.target.value });
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    const { userId, selectedChatroom, addNewMessage, username } = this.props;
    const message = evt.target.message.value;
    addNewMessage({ content: message, user: { username } });
    socket.emit('newMessage', { userId, chatroomId: selectedChatroom, content: message })
    this.setState({ message: '' });
  }

  handleClick = (evt) => {
    evt.preventDefault();
    this.props.fetchNewMessagesForChatroom();
  };

  render() {
    const { messageHistory, selectedChatroom, userId, isViewingNewMessages } = this.props

    return (
      <div style={{ backgroundColor: 'red', height: '200px' }}>
        <button onClick={this.handleClick}>VIEW NEW MESSAGES</button>
        {isViewingNewMessages && <h1>NEW MESSAGES</h1>}
        {messageHistory.map((message, idx) => (
          <h5 key={`${userId}-${selectedChatroom}-${idx}`}>
            {message.user.username} : {message.content}
          </h5>
        ))}
       {!isViewingNewMessages &&
        <form style={{display: 'float left'}} onSubmit={this.onSubmit}>
          <input onChange={this.handleChange} value={this.state.message} name="message"></input>
           <input type="submit" value="Send" />
         </form>}
      </div>
    );
  }
}

const mapStateToProps = ({ auth, messages, chatrooms }, { params }) => ({
  messageHistory: messages.messageHistory,
  isViewingNewMessages: messages.isViewingNewMessages,
  selectedChatroom: params.chatroomId,
  userId: auth.id,
  username: auth.username,
});

const mapDispatchToProps = { addNewMessage, fetchNewMessagesForChatroom };

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

