import React from 'react';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';

import { logout } from '../Login/LoginActionCreator';
import { getUser } from '../Login/LoginReducer';

export const Logout = ({ user, logout }) => (
  <div>
    <h3 className="username-display">{user && user.username}</h3>
    <button className="btn-logout" onClick={logout}>Logout</button>
    <hr />
  </div>
);

Logout.propTypes = {
  logout: func.isRequired,
  user: object,
};

const mapStateToProps = (state) => ({ user: getUser(state) });

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
