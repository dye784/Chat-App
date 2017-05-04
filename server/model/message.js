const { STRING } = require('sequelize');
const db = require('./_db');

const Message = db.define('messages', {
  content: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Message;
