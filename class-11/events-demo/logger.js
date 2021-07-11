const events = require('./events.js');
events.on('join', (payload) => logIt('join', payload));
events.on('welcome', (payload) => logIt('welcome', payload));
events.on('leave', (payload) => logIt('leave', payload));

function logIt(event, payload) {
  console.log('EVENT LOG', { event, payload, time: new Date().toLocaleString() });
}
