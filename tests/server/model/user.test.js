/* global describe it before afterEach */

const { expect } = require('chai');
const User = require('../../../server/model/user');
const db = require('../../../server/model');

describe('User Model', () => {
  before('Clear database', () => db.sync({ force: true }));
  afterEach('Clear database', () => db.sync({ force: true }));
  const userData = {
    username: 'example',
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

    describe('toJson', () => {
      it('returns an object with the userData excluding password', () => {
        return User.create(userData)
          .then(createdUser => {
            const createdUserJson = createdUser.toJson();
            expect(createdUserJson.password).to.be.undefined;
            expect(createdUserJson.password_digest).to.be.undefined;
            expect(createdUserJson.username).to.equal(userData.username);
            expect(createdUserJson.id).to.equal(1);
            expect(createdUserJson.createdAt).to.be.not.be.undefined;
            expect(createdUserJson.updatedAt).to.be.not.be.undefined;
          });
      });
    });
  });
});
