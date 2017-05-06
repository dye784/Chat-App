import React from 'react';
import { connect } from 'react-redux';
import Login from '../Login/index.jsx';
import Logout from '../Logout/index.jsx';
import Chat from '../Chat/index.jsx';

export const App = ({ user }) => {
  return (
    <div style={{ backgroundColor: 'blue', height: '200px' }}>
      {user ? <Logout /> : <Login /> }
      <Chat />
    </div>
  );
};

const mapStateToProps = (state) => ({ user: state.auth });

export default connect(mapStateToProps)(App);
