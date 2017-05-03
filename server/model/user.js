const { STRING } = require('sequelize');
const db = require('./_db');

const User = db.define('users', {
  name: STRING,
  email: {
    type: STRING,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
});

module.exports = User;
