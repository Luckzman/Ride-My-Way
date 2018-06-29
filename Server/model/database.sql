DROP DATABASE IF EXISTS ride;
CREATE DATABASE ride;

\c ride;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(40) NOT NULL, 
  lastName VARCHAR(40) NOT NULL, 
  email VARCHAR(40) NOT NULL, 
  password VARCHAR(40) NOT NULL, 
  phone INT NOT NULL
);

CREATE TABLE rides(
  id SERIAL PRIMARY KEY,
  --user_id INT REFERENCES users(id),
  source VARCHAR(50) NOT NULL,
  destination VARCHAR(50) NOT NULL,
  departure_time TIME NOT NULL,
  car_name VARCHAR(50),
  available_seat SMALLINT NOT NULL,
  cost INT NOT NULL
);

CREATE TABLE request(
  id SERIAL PRIMARY KEY,
  request_ride BOOLEAN NOT NULL,
  message TEXT,
  ride_id INT REFERENCES rides(id)
);