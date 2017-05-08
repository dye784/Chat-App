// Database
const db = require('./_db');

// Models
const User = require('./user');
const Message = require('./message');
const Chatroom = require('./chatroom');

// Associations
User.hasMany(Message);
Message.belongsTo(User);
Chatroom.hasMany(Message);
Message.belongsTo(Chatroom);

module.exports = db;
