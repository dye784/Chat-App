import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { postNewMessageToServer, addNewMessage } from './ChatActionCreators';
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
    if (message.trim().length > 0) {
      addNewMessage({ content: message, user: { username } });
      socket.emit('newMessage', { userId, chatroomId: selectedChatroom, content: message })
      this.setState({ message: '' });
    }
  }

  render() {
    const { messages, selectedChatroom, userId } = this.props
    return (
      <div className="container-chatbox">
        <div>
          <h2 className="chatroom-title">{messages[0] && messages[0].chatroom.name}</h2>
          <hr />
        </div>
        <div className="container-chat-history">
          {messages.map((message, idx) => (
            <div key={`${userId}-${selectedChatroom}-${idx}`}>
              <div className="message-content-header">
                {message.user.username}
              </div>
              <div className="chat-message">{message.content}</div>
            </div>
          ))}
        </div>
        <div className="container-message-form">
          <form className="message-form" onSubmit={this.onSubmit}>
            <input className="message-text-area" onChange={this.handleChange} value={this.state.message} name="message" placeholder={`Message #${messages[0] && messages[0].chatroom.name}`}/>
           </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, messages, chatrooms }, { params }) => ({
  messages,
  selectedChatroom: params.chatroomId,
  userId: auth.id,
  username: auth.username,
});

const mapDispatchToProps = { addNewMessage };

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

