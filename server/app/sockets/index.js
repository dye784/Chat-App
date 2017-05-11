const Message = require('../../model/message');
const User = require('../../model/user');

/**
 * socketEvents - Attaches the socket events to the server
 * @param {function} io - socket.io server
 * @returns {function} Returns io with event listeners attached
 */
const socketEvents = (io) => {
  io.on('connection', (socket) => {
    console.log(`A user has connected! SocketId: ${socket.id}`);

    socket.on('join', (chatroomId) => {
      socket.join(chatroomId);
    });

    socket.on('leave', (chatroomId) => {
      socket.leave(chatroomId);
    });

    socket.on('disconnect', () => {
      console.log(`SocketId: ${socket.id} has disconnected!`);
    });

    socket.on('newMessage', (message) => {
      Message.create(message)
      .then((createdMessage) => {
        return Message.findById(createdMessage.id, {
          include: [{ model: User, attributes: ['username'] }],
        })
        .then((foundMessage) => {
          socket.broadcast.to(foundMessage.chatroom_id).emit('addMessage', foundMessage);
        });
      });
    });
  });
};

module.exports = socketEvents;
