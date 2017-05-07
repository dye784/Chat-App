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

    socket.on('newMessage', (createdMessage) => {
      socket.broadcast.to(createdMessage.chatroom_id).emit('addMessage', createdMessage);
    });
  });
};

module.exports = socketEvents;
