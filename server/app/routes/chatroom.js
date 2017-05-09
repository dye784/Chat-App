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
      created_at: {
        $gt: req.user.last_logout,
      },
    },
    include: [
      { model: User, attributes: ['username'] },
      { model: Chatroom, attributes: ['name'] },
    ],
    order: [
      ['created_at', 'ASC'],
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
      chatroom_id: req.params.chatroomId,
    },
    include: [{ model: User, attributes: ['username'] }],
    order: [
      ['created_at', 'ASC'],
    ],
  })
  .then((foundMessages) => {
    res.send(foundMessages);
  })
  .catch(next);
});

// POST request to add a message
router.post('/:chatroomId/messages', (req, res, next) => {
  Message.create({
    content: req.body.content,
    user_id: req.body.userId,
    chatroom_id: req.params.chatroomId,
  })
  .then((createdMessage) => {
    res.send(createdMessage);
  })
  .catch(next);
});

module.exports = router;
