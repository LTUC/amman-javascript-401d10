const EE = require('events');
const events = new EE();
events.emit('hi');

events.on('hi', eventHandler);
events.on('hello', () => {
  console.log('Hello world');
});
function eventHandler(payload) {
  console.log('Hello', payload.name);
  events.emit('hello', { id: 10 });
}
events.emit('hi', { name: 'mahmoud' });
