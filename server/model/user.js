const { STRING, VIRTUAL } = require('sequelize');
const bcrypt = require('bcryptjs');
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
  password_digest: STRING,
  password: VIRTUAL,
});

function setEmailAndPassword(user) {
  user.email = user.email && user.email.toLowerCase();
  if (!user.password) { return Promise.resolve(user); }

  return bcrypt.hash(user.get('password'), 10)
    .then(hash => user.set('password_digest', hash));
}


module.exports = User;
