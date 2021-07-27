const uuid = require('uuid').v4;
const fruitsModel = require('./fruits.schema.js');

exports.handler = async (event) => {
  try {
    // event.body = {name:'apple',cal:50}
    const { name, cal } = JSON.parse(event.body);
    const id = uuid();
    const doc = new fruitsModel({ id, name, cal });
    const data = await doc.save();
    return {
      statusCode: 201,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      status: 500,
      message: e.message,
    };
  }
};
