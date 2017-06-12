/* global describe it beforeEach */

import React from 'react';
import { createStore } from 'redux';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import NewMessagesContainer, { NewMessages } from '../../../browser/NewMessages';
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

describe('<NewMessagesContainer />', () => {
  const state = { newMessages: ['a', 'b', 'c'] };
  let root;
  let store;
  beforeEach('shallow render NewMessagesContainer and create store', () => {
    store = createStore(reducerState => reducerState, state);
    root = shallow(<NewMessagesContainer store={store} />);
  });

  it('gets props.newMesssages from state.newMessages', () => {
    expect(root.find(NewMessages)).to.have.prop('newMessages');
  });
});
