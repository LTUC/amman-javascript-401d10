const dynamoose = require('dynamoose');

const fruitsSchema = new dynamoose.Schema({
  id: String,
  name: String,
  cal: String,
});

module.exports = dynamoose.model('fruits', fruitsSchema);
