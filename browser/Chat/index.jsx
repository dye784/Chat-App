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
    addNewMessage({ content: message, user: { username } });
    socket.emit('newMessage', { userId, chatroomId: selectedChatroom, content: message })
    this.setState({ message: '' });
  }

  render() {
    const { messages, selectedChatroom, userId } = this.props
    return (
      <div style={{ backgroundColor: 'red', height: '200px' }}>
        {messages.map((message, idx) => (
          <h5 key={`${userId}-${selectedChatroom}-${idx}`}>
            {message.user.username} : {message.content}
          </h5>
        ))}
        <form style={{display: 'float left'}} onSubmit={this.onSubmit}>
          <input onChange={this.handleChange} value={this.state.message} name="message"></input>
           <input type="submit" value="Send" />
         </form>
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

