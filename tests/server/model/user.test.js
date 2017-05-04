/* global describe it before afterEach */

const { expect } = require('chai');
const User = require('../../../server/model/user');

describe('User Model', () => {
  before('Clear database', () => User.sync({ force: true }));
  afterEach('Clear database', () => User.sync({ force: true }));
  const userData = {
    name: 'Example',
    email: 'example@example.com',
    password: '12345',
  };

  describe('instanceMethods', () => {
    describe('authenticate', () => {
      it('returns true when stored hashed password matches password after hashing', () => {
        return User.create(userData)
          .then(createdUser => createdUser.authenticate('12345'))
          .then(result => expect(result).to.be.true);
      });

      it('returns false when stored hashed passwords do not match', () => {
        return User.create(userData)
          .then(createdUser => createdUser.authenticate('9000'))
          .then(result => expect(result).to.be.false);
      });
    });
  });
});
