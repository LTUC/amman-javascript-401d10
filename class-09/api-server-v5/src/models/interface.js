'use strict';
const pool = require('./pool');
class Interface {
  read(id) {
    if (id) {
      return pool.query('SELECT * FROM people WHERE id=$1;', [id]);
    }
    return pool.query('SELECT * FROM people;');
  }

  create(obj) {
    const sql = 'INSERT INTO people (name,role) VALUES ($1,$2) RETURNING *;';
    const safeValues = [obj.name, obj.role];
    return pool.query(sql, safeValues);
  }

  update(id, obj) {
    const sql = 'UPDATE people SET name=$1,role=$2 WHERE id=$3 RETURNING *;';
    const safeValues = [obj.name, obj.role, id];
    return pool.query(sql, safeValues);
  }

  delete(id) {
    return pool.query('DELETE FROM people WHERE id=$1 RETURNING *;', [id]);
  }
}

module.exports = Interface;
