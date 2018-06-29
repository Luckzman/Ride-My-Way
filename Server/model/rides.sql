DATABASE ridemyway EXISTS;

\c ridemyway;

CREATE TABLE rides(
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  source VARCHAR(50) NOT NULL,
  destination VARCHAR(50) NOT NULL,
  departure_time TIME,
  car_name VARCHAR(50),
  available_seat SMALLINT NOT NULL,
  cost INT NOT NULL,
  PRIMARY KEY (id, user_id),
);

INSERT INTO rides(id, user_id, source, destination, departure_time, car_name, available_seat, cost) VALUES("agege","ikorodu","08:30","Toyota Camry","4","800")