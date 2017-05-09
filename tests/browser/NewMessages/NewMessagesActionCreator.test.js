/* global describe it */

const { expect } = require('chai');
const { LOAD_NEW_CHAT_MESSAGES, loadNewChatMessages } = require('../../../browser/NewMessages/NewMessagesActionCreators');

describe('New Messages Action Creators', () => {
  describe('loadNewChatMessages', () => {
    it('returns the correct action', () => {
      const solution = {
        type: LOAD_NEW_CHAT_MESSAGES,
        newMessages: ['new', 'newer', 'newest'],
      };

      expect(loadNewChatMessages(['new', 'newer', 'newest'])).to.deep.equal(solution);
    });
  });
});
