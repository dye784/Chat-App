/* global describe it beforeEach */

import React from 'react';
import { createStore } from 'redux';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
import ChatContainer, { Chat } from '../../../browser/Chat';
chai.use(chaiEnzyme());

describe('<Chat />', () => {
  const messages = [{
    user: { userId: 1, username: 'example' },
    chatroom: { name: 'general' },
    content: 'something clever',
  }];
  const chatroomId = 1;
  const userId = 1;
  let root;
  beforeEach('shallow render Chat', () => {
    root = shallow(<Chat messages={messages} chatroomId={chatroomId} userId={userId} />);
  });

  it('has an input tag for messages', () => {
    expect(root.find('input[name="message"]')).to.have.length(1);
  });

  describe('onSubmit', () => {
    const submitEvent = {
      preventDefault: spy(),
      target: {
        message: { value: 'blah blah blah' },
      },
    };
    const addNewMessageForChatroom = spy();

    beforeEach('shallow render compoenent and reset spies', () => {
      addNewMessageForChatroom.reset();
      submitEvent.preventDefault.reset();
      root = shallow(<Chat addNewMessageForChatroom={addNewMessageForChatroom} messages={messages} chatroomId={chatroomId} userId={userId} />);
      root.find('form').simulate('submit', submitEvent);
    });

    it('calls addNewMessageForChatroom on submit', () => {
      expect(addNewMessageForChatroom).to.have.been.calledWith({ content: submitEvent.target.message.value, userId, chatroomId });
    });

    it('calls evt.preventDefault', () => {
      expect(submitEvent.preventDefault).to.have.been.called;
    });
  });
});

describe('<ChatContainer />', () => {
  const state = {
    auth: { id: 1, username: 'example' },
    messages: [{
      user: { userId: 1, username: 'example' },
      chatroom: { name: 'general' },
      content: 'something clever',
    }],
  };
  let root;
  let store;
  beforeEach('shallow render ChatContainer and create test store', () => {
    store = createStore(reducerState => reducerState, state);
    root = shallow(<ChatContainer params={{ chatroomId: 1 }} store={store} />);
  });

  it('has props.userId from state.auth.id', () => {
    expect(root.find(Chat)).to.have.prop('userId');
  });

  it('has props.messages from state.messages', () => {
    expect(root.find(Chat)).to.have.prop('messages');
  });

  it('has props.chatroomId from ownProps.params', () => {
    expect(root.find(Chat)).to.have.prop('chatroomId');
  });

  it('has props.username from state.auth.username', () => {
    expect(root.find(Chat)).to.have.prop('username');
  });
});
