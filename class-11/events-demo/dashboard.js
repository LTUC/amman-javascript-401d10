const events = require('./events.js');

events.on('join', (payload) => {
  console.log(`${payload.username} has joined!`);
  events.emit('welcome', { username: payload.username });
});
