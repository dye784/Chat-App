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
    },
    unique: true,
  },
  password_digest: STRING,
  password: VIRTUAL,
}, {
  hooks: {
    beforeCreate: setEmailAndPassword,
    beforeUpdate: setEmailAndPassword,
  },
  instanceMethods: {
    /**
     * authenticate - Use bcrpt to check password
     * @param {string} password
     * @returns {bool} Returns a promisified boolean
     */
    authenticate(password) {
      return bcrypt.compare(password, this.password_digest);
    },

    /**
     * toJson - Prep data to be sent to client
     * @returns {object} Returns an object of user data excluding
     * password and password_digest
     */
    toJson() {
      return {
        name: this.name,
        email: this.email,
        created_at: this.created_at,
        id: this.id,
        updated_at: this.updated_at,
      };
    },
  },
  defaultScope: {
    attributes: { exclude: ['password_digest'] },
  },
});

module.exports = User;
