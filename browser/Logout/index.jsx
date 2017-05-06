import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../Login/LoginActionCreator';

export const Logout = ({ user, logout }) => (
  <div>
    <h1> Hi {user && user.email} !</h1>
    <button onClick={logout}>Logout</button>
  </div>
);

const mapStateToProps = (state) => ({ user: state.auth });

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
