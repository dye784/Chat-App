const { STRING, VIRTUAL } = require('sequelize');
const bcrypt = require('bcryptjs');
const db = require('./_db');

const setEmailAndPassword = (user) => {
  user.email = user.email && user.email.toLowerCase();
  if (!user.password) { return Promise.resolve(user); }

  return bcrypt.hash(user.get('password'), 10)
    .then(hash => user.set('password_digest', hash));
};

const User = db.define('users', {
  name: STRING,
  email: {
    type: STRING,
    validate: {
      isEmail: true,
      notEmpty: true,
      unique: true,
    },
  },
  password_digest: STRING,
  password: VIRTUAL,
}, {
  hooks: {
    beforeCreate: setEmailAndPassword,
    beforeUpdate: setEmailAndPassword,
  },
  instanceMethods: {
    authenticate(password) {
      return bcrypt.compare(password, this.password_digest);
    },
  },
});

module.exports = User;
