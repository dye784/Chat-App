/* global describe it before afterEach beforeEach */

const { expect } = require('chai');
const request = require('supertest');
const app = require('../../../server/app/main');
const User = require('../../../server/model/user');

describe('Auth Routes', () => {
  before('Clear database', () => User.sync({ force: true }));
  afterEach('Clear database', () => User.sync({ force: true }));

  const userData = {
    name: 'Example',
    email: 'example@example.com',
    password: '12345',
  };

  beforeEach('Create a user', () => User.create(userData));

  describe('POST /login', () => {
    it('succeeds with a valid username and password', () => {
      return request(app)
        .post('/api/auth/login')
        .send(userData)
        .expect(302);
    });

    it('fails with an invalid username and password', () => {
      const incorrectUserData = {
        name: 'Example',
        email: 'example@example.com',
        password: 'wrong password',
      };

      return request(app)
        .post('/api/auth/login')
        .send(incorrectUserData)
        .expect(401);
    });
  });

  describe('DELETE /logout', () => {
    describe('when logged in', () => {
      const agent = request.agent(app);

      beforeEach('log in', () => {
        return agent
          .post('/api/auth/login')
          .send(userData);
      });

      it('logs you out', () => {
        return agent.delete('/api/auth/logout')
          .expect(204);
      });
    });
  });
});
