const router = require('express').Router();
const Chatroom = require('../../model/chatroom');
const Message = require('../../model/message');

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
      chatroom_id: +req.params.chatroomId,
    },
    order: [
      ['created_at', 'ASC'],
    ],
  })
  .then((foundMessages) => {
    res.send(foundMessages);
  })
  .catch(next);
});

module.exports = router;
