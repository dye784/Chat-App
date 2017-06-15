'use strict';

const Promise = require('bluebird');
const faker = require('faker');

const db = require('./server/model');
const User = require('./server/model/user');
const Chatroom = require('./server/model/chatroom');
const Message = require('./server/model/message');

const numChatrooms = 10;
const numUsers = 20;
const numMessages = 300;

const doTimes = (n, fn) => {
  const results = [];
  while (n--) {
    results.push(fn());
  }
  return results;
};

const randomFakeChatroom = () => Chatroom.build({ name: faker.internet.domainName() });

const createFakeChatroom = () => {
  const generalChatroom = Chatroom.build({ name: 'general' });
  const arrOfChatroomsToBeSaved = [
    generalChatroom,
    ...doTimes(numChatrooms, () => randomFakeChatroom()),
  ];
  return Promise.map(arrOfChatroomsToBeSaved, (chatroom) => chatroom.save());
};

const randomFakeUser = () => {
  return User.build({
    username: faker.internet.userName(),
    password: faker.internet.password(),
    lastLogout: Date.now(),
    avatar: faker.image.avatar(),
  });
};

const createFakeUser = () => {
  const testUser = User.build({
    username: 'example',
    password: '12345',
    lastLogout: Date.now(),
    avatar: faker.image.avatar(),
  });
  const arrOfUsersToBeSaved = [
    testUser,
    ...doTimes(numUsers, () => randomFakeUser()),
  ];
  return Promise.map(arrOfUsersToBeSaved, (user) => user.save());
};

const randomFakeMessage = () => {
  return Message.build({
    content: faker.lorem.sentence(),
    userId: faker.random.number({ min: 1, max: numUsers }),
    chatroomId: faker.random.number({ min: 1, max: numChatrooms + 1 }),
  });
};

const createFakeMessage = () => {
  const arrOfMessagesToBeSaved = doTimes(numMessages, () => randomFakeMessage());
  return Promise.map(arrOfMessagesToBeSaved, (message) => message.save());
};

const seed = () => {
  return createFakeChatroom()
    .then(() => createFakeUser())
    .then(() => createFakeMessage());
};

db.sync({ force: true })
.then(() => {
  return seed();
})
.then(() => {
  console.log('----- Seeding successful! -----');
}, (err) => {
  console.error('Error while seeding');
  console.error(err.stack);
})
.then(() => {
  process.exit();
});
