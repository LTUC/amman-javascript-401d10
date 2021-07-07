const pg = require('pg');
require('dotenv').config();
// fo heroku deployment we need to add the rejection key
pg.defaults.ssl = process.env.NODE_ENV === 'production' && { rejectUnauthorized: false };
module.exports = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});
