const { STRING } = require('sequelize');
const db = require('./_db');

const Chatroom = db.define('chatrooms', {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Chatroom;
