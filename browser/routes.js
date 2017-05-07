import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import { fetchLoggedInUser } from './Login/LoginActionCreator';
import { fetchAllChatrooms } from './Sidebar/SidebarActionCreators';
import { fetchAllMessagesForChatroom } from './Chat/ChatActionCreators';
import App from './App/index.jsx';
import Chat from './Chat/index.jsx';
import { socket } from './store';

const Routes = ({ fetchInitialData, fetchAllMessagesForChatroom }) => (
  <Router history={browserHistory}>
    <Route path="/" component={App} onEnter={fetchInitialData}>
      <Route path=":chatroomId" component={Chat} onEnter={fetchAllMessagesForChatroom} />
      <IndexRedirect to="/1" />
    </Route>
  </Router>
);

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  fetchInitialData() {
    dispatch(fetchLoggedInUser());
    dispatch(fetchAllChatrooms());
  },
  fetchAllMessagesForChatroom({ params }) {
    dispatch(fetchAllMessagesForChatroom(params.chatroomId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
