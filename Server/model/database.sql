DROP DATABASE IF EXISTS db_ride;
CREATE DATABASE db_ride;

\c db_ride;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  firstname VARCHAR NOT NULL, 
  lastName VARCHAR NOT NULL, 
  email VARCHAR NOT NULL, 
  password VARCHAR NOT NULL, 
  phone VARCHAR NOT NULL
);

CREATE TABLE rides(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  source VARCHAR NOT NULL,
  destination VARCHAR NOT NULL,
  departure_time TIMESTAMP ,
  car_name VARCHAR,
  available_seat SMALLINT ,
  cost INT
);

CREATE TABLE rideRequest(
  id SERIAL PRIMARY KEY,
  --request_ride BOOLEAN NOT NULL ,
  --message TEXT,
  status VARCHAR DEFAULT 'pending',
  ride_id INT REFERENCES rides(id),
 -- ride_id INT REFERENCES rides(id),
  user_id INT REFERENCES users(id)
);