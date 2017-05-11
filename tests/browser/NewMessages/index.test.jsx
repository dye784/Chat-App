/* global describe it beforeEach */

import React from 'react';
import { createStore } from 'redux';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import NewMessagesContainer, { NewMessages } from '../../../browser/NewMessages/index.jsx';
chai.use(chaiEnzyme());

describe('<NewMessages />', () => {
  const newMessages = [{
    id: 1,
    user_id: 1,
    chatroom_id: 1,
    chatroom: { name: 'general' },
    content: 'something really cool',
    user: { username: 'Boss' },
  }];
  let root;
  beforeEach('shallow render NewMessages', () => {
    root = shallow(<NewMessages newMessages={newMessages} />);
  });

  it('shows each new message and its values', () => {
    expect(root.text()).to.contain(newMessages[0].chatroom.name);
    expect(root.text()).to.contain(newMessages[0].content);
    expect(root.text()).to.contain(newMessages[0].user.username);
  });
});

