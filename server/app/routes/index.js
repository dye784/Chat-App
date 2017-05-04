const router = require('express').Router();
const authRouter = require('./auth');
const chatroomRouter = require('./chatroom');

router.use('/auth', authRouter);
router.use('/chatrooms', chatroomRouter);

module.exports = router;
