import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

import Login from '../Login';
import Logout from '../Logout';
import Chat from '../Chat';
import Sidebar from '../Sidebar';
import { socket } from '../store';
import { getUser } from '../Login/LoginReducer';

export class App extends Component {
  componentWillReceiveProps(nextProps) {
    const previousChatroomId = this.props.params.chatroomId;
    const nextChatroomId = nextProps.params.chatroomId;

    if (previousChatroomId !== nextChatroomId) {
      socket.emit('leave', previousChatroomId);
    }
    socket.emit('join', nextChatroomId);
  }

  render() {
    return (
      <div>
        {!this.props.user && <Login />}
        <div className="container">
          {this.props.user && <Sidebar />}
          {this.props.user && this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  user: oneOfType([object, string]),
  children: object,
  params: object,
};

const mapStateToProps = (state) => ({ user: getUser(state) });

export default connect(mapStateToProps)(App);
