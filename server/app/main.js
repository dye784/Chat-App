// Express App Setup
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();

// Redis and Sessions setup
const redis = require('redis');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisClient = redis.createClient();
const sessionStore = new RedisStore({ client: redisClient });

const routes = require('./routes');
const db = require('../model');

const port = process.env.PORT || 1337;

// Socket setup
const socketio = require('socket.io');
const http = require('http');
const server = http.createServer();
server.on('request', app);
const io = socketio(server);
const socketEvents = require('./sockets');
socketEvents(io);

// Logging Middleware
if (port === 1337) { app.use(morgan('dev')); }

// Server up static files from '../../public'
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

// Body parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Session Middleware
app.use(session({
  store: sessionStore,
  key: 'jsessionid',
  secret: process.env.SESSION_SECRET || 'invalid secret key',
  resave: false,
  saveUninitialized: false,
}));

console.log(sessionStore);

// Authentication Middleware
app.use(passport.initialize());
app.use(passport.session());

// Serve up index.html file
const validFrontEndRoutes = ['/', '/newMessages', '/chatrooms', '/chatrooms/:chatroomId'];

validFrontEndRoutes.forEach((uri) => {
  app.get(uri, (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
  });
});

// Reroute to /api
app.use('/api', routes);

// Sync database then start listening if we are running the file directly
// Needed to remove errors during http testing
if (module === require.main) {
  server.listen(port, () => {
    console.log('----- HTTP Server Started! -----');
    console.log(`Server is listening on port ${port}`);
  });
}

module.exports = app;
