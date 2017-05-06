import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewMessageToServer } from './ChatActionCreators';

export class Chat extends Component {
  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.postNewMessageToServer(this.props.userId, this.props.selectedChatroom, evt.target.message.value)
  }

  render() {
    return (
      <div style={{ backgroundColor: 'red', height: '200px' }}>
        {this.props.messages.map(message => <h1 key={message.id}>{message.content}</h1>)}
        <form onSubmit={this.onSubmit}>
          <input name="message"></input>
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

