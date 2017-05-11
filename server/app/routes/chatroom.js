const router = require('express').Router();
const Chatroom = require('../../model/chatroom');
const Message = require('../../model/message');
const User = require('../../model/user');

// GET request to get all chatrooms
router.get('/', (req, res, next) => {
  Chatroom.findAll()
  .then((foundChatrooms) => {
    res.send(foundChatrooms);
  })
  .catch(next);
});

// Get new messages from chatroom since user logged in
router.get('/messages/new', (req, res, next) => {
  if (!req.user) { res.send(404) }
  Message.findAll({
    where: {
      createdAt: {
        $gt: req.user.lastLogout,
      },
    },
    include: [
      { model: User, attributes: ['username'] },
      { model: Chatroom, attributes: ['name'] },
    ],
    order: [
      ['createdAt', 'ASC'],
    ],
  })
  .then((foundMessages) => {
    res.send(foundMessages);
  })
  .catch(next);
});

// GET request to get all messages of a chatroom
router.get('/:chatroomId/messages', (req, res, next) => {
  Message.findAll({
    where: {
      chatroomId: req.params.chatroomId,
    },
    include: [
      { model: User, attributes: ['username'] },
      { model: Chatroom, attributes: ['name'] },
    ],
    order: [
      ['createdAt', 'ASC'],
    ],
  })
  .then((foundMessages) => {
    res.send(foundMessages);
  })
  .catch(next);
});

// POST request to add a message
router.post('/:chatroomId/messages', (req, res, next) => {
  Message.create(req.body)
  .then((createdMessage) => {
    res.send(createdMessage);
  })
  .catch(next);
});

module.exports = router;
