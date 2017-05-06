import React from 'react';
import { connect } from 'react-redux';

export const Chat = ({ messages }) => {
  const messagesToDisplay = messages.map(message => <h1 id={`${message.id}`}>{message}</h1>);

  return (
    <div>
      {messagesToDisplay}
    </div>
  );
};

const mapStateToProps = ({ messages }) => ({ messages });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

