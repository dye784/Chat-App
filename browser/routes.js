import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { fetchLoggedInUser } from './Login/LoginActionCreator';
import { fetchAllChatrooms } from './Sidebar/SidebarActionCreators';
import { fetchAllMessagesForChatroom } from './Chat/ChatActionCreators';
import App from './App';
import Chat from './Chat/index.jsx';

const Routes = ({ fetchInitialData, fetchAllMessagesForChatroom }) => (
  <Router history={browserHistory}>
    <Route path="/" component={App} onEnter={fetchInitialData}>
      <Route path=":chatroomId" component={Chat} onEnter={fetchAllMessagesForChatroom} />
      <IndexRedirect to=":chatroomId" />
    </Route>
  </Router>
);

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  fetchInitialData() {
    dispatch(fetchLoggedInUser());
    dispatch(fetchAllChatrooms());
  },
  fetchAllMessagesForChatroom(nextRouterState) {
    dispatch(fetchAllMessagesForChatroom(nextRouterState.params.chatroomId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
