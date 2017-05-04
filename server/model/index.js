// Database
const db = require('./_db');

// Models
const User = require('./user');
const Message = require('./message');
const Chatroom = require('./chatroom');

// Associations
User.hasMany(Message);
Chatroom.hasMany(Message);

module.exports = db;
