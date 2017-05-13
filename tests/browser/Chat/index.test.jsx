/* global describe it beforeEach */

import React from 'react';
import { createStore } from 'redux';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import ChatContainer, { Chat } from '../../../browser/Chat/index.jsx';
chai.use(chaiEnzyme());

describe('<Chat />', () => {
  let root;
  beforeEach('shallow render Chat');
});

describe.only('<ChatContainer />', () => {
  const state = {
    auth: {},
    messages: [],
    chatrooms: [],
    selectedChatroom: 1,
  };
  let root;
  let store;
  beforeEach('shallow render ChatContainer and create test store', () => {
    store = createStore(reducerState => reducerState, {});
    root = shallow(<ChatContainer store={store} />);
  });

  it('has props.userId from state.auth.id', () => {
    expect(root.find(Chat)).to.have.prop('userId');
  });

  it('has props.messages from state.messages', () => {
    // body...
  });

  it('has props.selectedChatroom from ownProps.params', () => {
    // body...
  });

  it('has props.username from state.auth.username', () => {
    // body...
  });
});
