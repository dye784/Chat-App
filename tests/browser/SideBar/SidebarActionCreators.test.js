/* global describe it */

const { expect } = require('chai');
const { SET_ALL_CHATROOMS, setAllChatrooms } = require('../../../browser/Sidebar/SidebarActionCreators');

describe('Sidebar Action Creators', () => {
  describe('setAllChatrooms', () => {
    it('returns the correct action', () => {
      const solution = {
        type: SET_ALL_CHATROOMS,
        allChatrooms: ['general', 'random', 'serious-stuff'],
      };

      expect(setAllChatrooms(['general', 'random', 'serious-stuff'])).to.deep.equal(solution);
    });
  });
});
