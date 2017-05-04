/* global describe it before aftereach */

const User = require('../../../server/model/user');
const { expect } = require('chai');

describe('User Model', () => {
  describe('instanceMethods', () => {
    describe('authenticate', () => {
      it('returns true when stored hashed password matches password after hashing', () => {
        // body...;
      });

      it('returns false when stored hashed passwords do not match', () => {
        // body...;
      });
    });
  });
});
