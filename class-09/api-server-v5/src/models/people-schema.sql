DROP TABLE IF EXISTS people;

CREATE TABLE people(
  id SERIAL PRIMARY KEY,
  name varchar(255),
  role varchar(255)
);
