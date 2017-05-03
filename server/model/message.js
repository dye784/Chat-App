const { TEXT } = require('sequelize');
const db = require('./_db');

const Message = db.define('messages', {
  content: {
    type: TEXT,
    allowNull: false,
  },
});

module.exports = Message;
