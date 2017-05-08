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
