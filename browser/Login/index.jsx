import React from 'react';
import { connect } from 'react-redux';
import { login } from './LoginActionCreator';

export const Login = ({ login }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    login(evt.target.username.value, evt.target.password.value);
  };

  return (
    <div className="container-login">
      <form className="login-form" onSubmit={handleSubmit}>
        <input className="box" name="username" placeholder="username" />
        <input className="box"name="password" type="password" placeholder="password" />
        <input className="box" type="submit" value="Login" />
      </form>
    </div>
  );
};

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(Login);
