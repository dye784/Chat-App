/* global describe it before afterEach */

const { expect } = require('chai');
const { AUTHENTICATED, authenticate } = require('../../../browser/Login/LoginActionCreator');

describe('Login Action Creators', () => {
  it('returns an object with type AUTHENTICATED and a user', () => {
    const exampleUser = {
      email: 'example@exmaple.com',
      password: 'examplePassword',
    };

    const result = {
      type: AUTHENTICATED,
      user: exampleUser,
    };

    expect(authenticate(exampleUser)).to.deep.equal(result);
  });
});
