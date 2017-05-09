/* global describe it beforeEach */

const { expect } = require('chai');
const { createStore } = require('redux');
const { LOAD_NEW_CHAT_MESSAGES } = require('../../../browser/NewMessages/NewMessagesActionCreators');
const NewMessagesReducer = require('../../../browser/NewMessages/NewMessagesReducer').default;

describe('Chat Reducer', () => {
  const newChatMessages = [
    { content: 'new content' },
    { content: 'newer content' },
    { content: 'newest content' },
  ];

  let testStore;
  beforeEach('Create testing store from reducer', () => {
    testStore = createStore(NewMessagesReducer);
  });

  it('has an initial state of an empty array', () => {
    expect(testStore.getState().length).to.equal(0);
  });

  describe('LOAD_NEW_CHAT_MESSAGES', () => {
    it('should update the state with a new message', () => {
      testStore.dispatch({
        type: LOAD_NEW_CHAT_MESSAGES,
        newMessages: newChatMessages,
      });
      expect(testStore.getState().length).to.equal(3);
      expect(testStore.getState()).to.deep.equal(newChatMessages);
    });
  });
});
