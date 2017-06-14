import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { postNewMessageToServer, addNewMessageForChatroom, addNewMessage, ADD_NEW_MESSAGE, addNewImageForChatroom } from './ChatActionCreators';

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
    const { userId, chatroomId, addNewMessageForChatroom, username } = this.props;
    const content = evt.target.message.value;
    if (content.trim().length > 0) {
      addNewMessageForChatroom({ content, userId, chatroomId });
      this.setState({ message: '' });
    }
  }

  // bit 64 format for file- enconded
  onAddFile = (evt) => {
    const { userId, chatroomId, addNewMessageForChatroom, username } = this.props;
    const file = evt.target.files[0];

    const img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;

    var reader = new FileReader();
    reader.onload = ((aImg) => {
      return (e) => {
        aImg.src = e.target.result;
        this.props.addNewImageForChatroom({
          content: e.target.result,
          user: {
            userId,
            username: 'test',
          },
          chatroomId
        });
      };
    })(img);

    reader.readAsDataURL(file);

    this.setState({ message: '' });
  }

  render() {
    const { messages, chatroomId, userId } = this.props
    return (
      <div className="container-chatbox">
        <div>
          <h2 className="chatroom-title">{messages[0] && `#${messages[0].chatroom.name}`}</h2>
          <hr />
        </div>
        <div className="container-chat-history">
          {messages.map((message, idx) => (
            <div key={`${message.user.userId}-${chatroomId}-${idx}`}>
              <div className="message-content-header">
                {message.user.username}
              </div>
              {message.type === 'img' && <img src={message.content}/>}
              {message.type === 'message' && <div className="chat-message">{message.content}</div>}
            </div>
          ))}
        </div>
        <div className="container-message-form">
          <input type="file" ref="upload" name="file" onChange={this.onAddFile} />
          <form className="message-form" onSubmit={this.onSubmit}>
            <input className="message-text-area" onChange={this.handleChange} value={this.state.message} name="message" placeholder={`Message #${messages[0] && messages[0].chatroom.name}`}/>
           </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, messages }, { params }) => ({
  messages,
  chatroomId: params.chatroomId,
  userId: auth.id,
  username: auth.username,
});

const mapDispatchToProps = { addNewMessageForChatroom, addNewImageForChatroom };

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

