import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './LoginActionCreator';

export class Login extends Component {
  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.login(evt.target.username.value, evt.target.password.value);
  }

  render() {
    return (
      <div className="container-login">
          <form className="login-form" onSubmit={this.onSubmit}>
            <input className="box" name="username" />
            <input className="box"name="password" type="password" />
            <input type="submit" value="Login" />
          </form>
      </div>
    );
  }
}

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(Login);
