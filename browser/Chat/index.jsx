import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewMessageToServer } from './ChatActionCreators';

export class Chat extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'red', height: '200px' }}>
        {this.props.messages.map(message => <h1 id={`${message.id}`}>{message}</h1>)}
        <form onSubmit={this.onSubmit}>
          <textarea name="message" rows="10"></textarea>
          <button type="submit"></button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ messages }) => ({ messages });

const mapDispatchToProps = { postNewMessageToServer };

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

