import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewMessageToServer } from './ChatActionCreators';

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
    this.props.postNewMessageToServer(userId, selectedChatroom, message)
    this.setState({ message: '' });
  }

  render() {
    return (
      <div style={{ backgroundColor: 'red', height: '200px' }}>
        {this.props.messages.map(message => <h1 key={message.id}>{message.content}</h1>)}
        <form onSubmit={this.onSubmit}>
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

const mapDispatchToProps = { postNewMessageToServer };

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

