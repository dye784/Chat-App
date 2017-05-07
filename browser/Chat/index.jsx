import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const userId = this.props.userId;
    const selectedChatroom = this.props.selectedChatroom;
    const message = evt.target.message.value;
    this.props.addNewMessage({ content: message });
    socket.emit('newMessage', { userId, chatroomId: selectedChatroom, content: message })
    this.setState({ message: '' });
  }

  render() {
    return (
      <div style={{ backgroundColor: 'red', height: '200px' }}>
        {this.props.messages.map((message,idx) => (
          <h1 key={`${this.props.userId}-${this.props.selectedChatroom}-${idx}`}>
            {message.content}
          </h1>
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
});

const mapDispatchToProps = { addNewMessage };

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

