/* global describe it beforeEach */

const { expect } = require('chai');
const { createStore } = require('redux');
const { SET_ALL_CHATROOMS } = require('../../../browser/Sidebar/SidebarActionCreators');
const SidebarReducer = require('../../../browser/Sidebar/SidebarReducer').default;

describe('Sidebar Reducer', () => {
  const chatrooms = [
    'general',
    'random',
    'test',
  ];

  let testStore;
  beforeEach('Create testing store from reducer', () => {
    testStore = createStore(SidebarReducer);
  });

  it('has an initial state of an empty array', () => {
    expect(testStore.getState().length).to.equal(0);
  });

  describe('SET_ALL_CHATROOMS', () => {
    it('should update the state with a new message', () => {
      testStore.dispatch({
        type: SET_ALL_CHATROOMS,
        allChatrooms: chatrooms,
      });
      expect(testStore.getState().length).to.equal(3);
      expect(testStore.getState()).to.deep.equal(chatrooms);
    });
  });
});
