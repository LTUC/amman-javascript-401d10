const events = require('./events.js');
require('./logger');
require('./dashboard');
events.emit('join', { id: 88, username: 'mahmoud' });
events.emit('leave', { id: 88, username: 'mahmoud' });
