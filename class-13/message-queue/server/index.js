const express = require('express');
const app = express();
const http = require('http');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const server = http.createServer(app);
const io = require('socket.io')(http);
const staffRoom = 'staff';
const { v4: uuidv4 } = require('uuid');
io.listen(server);
const queue = {
  tickets: [],
  staff: [],
};
app.use(cors());
// app.get('/hi', (req, res) => {
//   res.send('Hello World');
// });

io.on('connection', (socket) => {
  // console.log('clie.nt connected', socket.id);
  //2a
  socket.on('join', (payload) => {
    // socket.join will put the socket in a private room
    const staff = { name: payload.name, id: socket.id };
    queue.staff.push(staff);
    socket.join(staffRoom);
    socket.to(staffRoom).emit('onlineStaff', staff);
  });
  socket.on('createTicket', (payload) => {
    // 2
    const ticketData = { ...payload, id: uuidv4(), socketId: socket.id };
    queue.tickets.push(ticketData);
    socket.in(staffRoom).emit('newTicket', ticketData);
  });

  socket.on('claim', (payload) => {
    // when a TA claim the ticket we need to notify the student
    socket.to(payload.studentId).emit('claimed', { name: payload.name });
    queue.tickets = queue.tickets.filter((t) => t.id !== payload.id);
  });
  socket.on('getAll', () => {
    queue.staff.forEach((person) => {
      socket.emit('onlineStaff', { name: person.name, id: person.id });
    });
    queue.tickets.forEach((ticket) => {
      socket.emit('newTicket', ticket);
    });
  });
  socket.on('disconnect', () => {
    socket.to(staffRoom).emit('offlineStaff', { id: socket.id });
    queue.staff = queue.staff.filter((s) => s.id !== socket.id);
  });
});
server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
