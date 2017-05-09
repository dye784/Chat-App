/* global describe it before afterEach beforeEach */

const { expect } = require('chai');
const request = require('supertest');
const app = require('../../../server/app/main');
const User = require('../../../server/model/user');
const db = require('../../../server/model');

describe('Auth Routes', () => {
  before('Clear database', () => db.sync({ force: true }));
  afterEach('Clear database', () => db.sync({ force: true }));

  const userData = {
    username: 'example',
    password: '12345',
  };

  beforeEach('Create a user', () => User.create(userData));

  describe('POST /login', () => {
    it('succeeds with a valid username and password', () => {
      return request(app)
        .post('/api/auth/login')
        .send(userData)
        .expect(200);
    });

    it('fails with an invalid username and password', () => {
      const incorrectUserData = {
        username: 'example',
        password: 'wrong password',
      };

      return request(app)
        .post('/api/auth/login')
        .send(incorrectUserData)
        .expect(401);
    });

    it('creates a new user if user doesn\'t exist', () => {
      const newUserData = {
        name: 'New Example',
        email: 'new@new.com',
        password: 'NewNewNew',
      };

      return request(app)
        .post('/api/auth/login')
        .send(newUserData)
        .expect(200);
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
