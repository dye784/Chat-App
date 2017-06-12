import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { fetchLoggedInUser } from './Login/LoginActionCreator';
import { fetchAllChatrooms } from './Sidebar/SidebarActionCreators';
import { fetchAllMessagesForChatroom } from './Chat/ChatActionCreators';
import { fetchNewMessages } from './NewMessages/NewMessagesActionCreators';
import App from './App';
import Chat from './Chat';
import NewMessages from './NewMessages';

const Routes = ({ fetchInitialData, fetchAllMessagesForChatroom, fetchNewMessages }) => (
  <Router history={browserHistory}>
    <Route path="/" component={App} onEnter={fetchInitialData}>
      <Route path="/chatrooms/:chatroomId" component={Chat} onEnter={fetchAllMessagesForChatroom} />
      <Route path="/newMessages" component={NewMessages} onEnter={fetchNewMessages} />
    </Route>
  </Router>
);

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  fetchInitialData() {
    dispatch(fetchLoggedInUser());
    dispatch(fetchAllChatrooms());
    dispatch(fetchNewMessages());
  },
  fetchAllMessagesForChatroom({ params }) {
    dispatch(fetchAllMessagesForChatroom(params.chatroomId));
  },
  fetchNewMessages() {
    dispatch(fetchNewMessages());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
