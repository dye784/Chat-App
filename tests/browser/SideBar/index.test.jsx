/* global describe it beforeEach */

import React from 'react';
import { createStore } from 'redux';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { Link } from 'react-router';
import SidebarContainer, { Sidebar } from '../../../browser/Sidebar';
chai.use(chaiEnzyme());

describe('<Sidebar />', () => {
  const chatrooms = [{ id: 1 }, { id: 2 }];
  const auth = { username: 'example' };
  let root;
  beforeEach('shallow render Sidebar', () => {
    root = shallow(<Sidebar chatrooms={chatrooms} auth={auth} />);
  });

  it('shows each chatroom as a link + 1', () => {
    expect(root.find(Link)).to.have.length(3);
  });

  it('should link to the chatrooms', () => {
    expect(root.find({ to: `/chatrooms/${chatrooms[0].id}` })).to.have.length(1);
    expect(root.find({ to: `/chatrooms/${chatrooms[1].id}` })).to.have.length(1);
  });

  it('should link to new messages', () => {
    expect(root.find({ to: '/newMessages' })).to.have.length(1);
  });
});

describe('<SidebarContainer />', () => {
  const state = {
    chatrooms: ['general', 'rando'],
  };
  let root;
  let store;
  beforeEach('shallow render SidebarContainer and create store', () => {
    store = createStore(reducerState => reducerState, state);
    root = shallow(<SidebarContainer store={store} />);
  });

  it('gets props.chatrooms from state.chatrooms', () => {
    expect(root.find(Sidebar)).to.have.prop('chatrooms');
  });
});

