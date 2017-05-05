import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './LoginActionCreator';

class Login extends Component {
  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.login(evt.target.email.value, evt.target.password.value);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input name="email" />
        <input name="password" type="password" />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(Login);
