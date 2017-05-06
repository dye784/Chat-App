'use strict';

const Promise = require('bluebird');
const faker = require('faker');

const db = require('./server/model');
const User = require('./server/model/user');
const Chatroom = require('./server/model/chatroom');
const Message = require('./server/model/message');

const numChatrooms = 5;
const numUsers = 10;
const numMessages = 50;

const doTimes = (n, fn) => {
  const results = [];
  while (n--) {
    results.push(fn());
  }
  return results;
};

const randomFakeChatroom = () => Chatroom.build({ name: faker.random.word() });

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
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  });
};

const createFakeUser = () => {
  const testUser = User.build({
    name: 'example',
    password: '12345',
    email: 'example@example.com',
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
    user_id: faker.random.number({ min: 1, max: numUsers }),
    chatroom_id: faker.random.number({ min: 1, max: numChatrooms + 1 }),
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
