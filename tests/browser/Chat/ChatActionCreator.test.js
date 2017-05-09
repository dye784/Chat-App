/* global describe it */

const { expect } = require('chai');
const { ADD_NEW_MESSAGE, LOAD_CHAT_MESSAGES, addNewMessage, loadChatMessages } = require('../../../browser/Chat/ChatActionCreators');

describe('Chat Action Creators', () => {
  describe('addNewMessage', () => {
    it('returns the correct action', () => {
      const solution = {
        type: ADD_NEW_MESSAGE,
        message: 'Hello world!',
      };

      expect(addNewMessage('Hello world!')).to.deep.equal(solution);
    });
  });

  describe('loadChatMessages', () => {
    it('returns the correct action', () => {
      const solution = {
        type: LOAD_CHAT_MESSAGES,
        messages: ['test', 1, 2, 3],
      };

      expect(loadChatMessages(['test', 1, 2, 3])).to.deep.equal(solution);
    });
  });
});
