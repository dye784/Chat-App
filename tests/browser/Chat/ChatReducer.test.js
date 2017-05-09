/* global describe it beforeEach */

const { expect } = require('chai');
const { createStore } = require('redux');
const { ADD_NEW_MESSAGE, LOAD_CHAT_MESSAGES } = require('../../../browser/Chat/ChatActionCreators');
const ChatReducer = require('../../../browser/Chat/ChatReducer').default;

describe('Chat Reducer', () => {
  const newMessage = 'Something something';

  const manyMessages = [
    { content: 'test 1' },
    { content: 'test 2' },
    { content: 'test 3' },
  ];

  let testStore;
  beforeEach('Create testing store from reducer', () => {
    testStore = createStore(ChatReducer);
  });

  it('has an initial state of an empty array', () => {
    expect(testStore.getState().length).to.equal(0);
  });

  describe('ADD_NEW_MESSAGE', () => {
    it('should update the state with a new message', () => {
      testStore.dispatch({
        type: ADD_NEW_MESSAGE,
        message: newMessage,
      });
      expect(testStore.getState().length).to.equal(1);
      expect(testStore.getState()[0]).to.equal(newMessage);
      testStore.dispatch({
        type: ADD_NEW_MESSAGE,
        message: newMessage,
      });
      expect(testStore.getState().length).to.equal(2);
      expect(testStore.getState()[1]).to.equal(newMessage);
    });
  });

  describe('LOAD_CHAT_MESSAGES', () => {
    it('should update the state with all the messages of a chatroom', () => {
      testStore.dispatch({
        type: LOAD_CHAT_MESSAGES,
        messages: manyMessages,
      });
      expect(testStore.getState().length).to.equal(3);
      expect(testStore.getState()).to.deep.equal(manyMessages);
    });
  });
});
