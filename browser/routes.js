import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { fetchLoggedInUser } from './Login/LoginActionCreator';
import App from './App';

const Routes = ({ fetchLoggedInUser }) => (
  <Router history={browserHistory}>
    <Route path="/" onEnter={fetchLoggedInUser}>
      <IndexRoute component={App} />
      <Route path="*" component={App} />
    </Route>
  </Router>
);

const mapStateToProps = null;

const mapDispatchToProps = { fetchLoggedInUser };

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
