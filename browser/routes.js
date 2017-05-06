import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { fetchLoggedInUser } from './Login/LoginActionCreator';
import { fetchAllChatrooms } from './Sidebar/SidebarActionCreators';
import App from './App';

const Routes = ({ fetchInitialData }) => (
  <Router history={browserHistory}>
    <Route path="/" onEnter={fetchInitialData}>
      <IndexRoute component={App} />
      <Route path="*" component={App} />
    </Route>
  </Router>
);

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  fetchInitialData() {
    dispatch(fetchLoggedInUser());
    dispatch(fetchAllChatrooms());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
