import React from 'react';
import { connect } from 'react-redux';

export const NewMessages = ({ newMessages }) => {
  return (
    <div>{newMessages.map(newMessage => <h3>{newMessage}</h3>)}</div>
  );
};

const mapStateToProps = ({ newMessages }) => ({ newMessages });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewMessages);
