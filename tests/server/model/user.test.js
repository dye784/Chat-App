/* global describe it before afterEach */

const db = require('../../../server/model/');
const { User } = db;
const { expect } = require('chai');

describe('User Model', () => {
  before('Clear database', () => User.sync({ force: true }));
  afterEach('Clear database', () => User.sync({ force: true }));

  describe('instanceMethods', () => {
    describe('authenticate', () => {
      it('returns true when stored hashed password matches password after hashing', () => {});

      it('returns false when stored hashed passwords do not match', () => {});
    });
  });
});
