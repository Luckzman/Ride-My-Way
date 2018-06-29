DROP DATABASE IF EXISTS ridemyway;
CREATE DATABASE ridemyway ;

\c ridemyway;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(40) NOT NULL, 
  lastName VARCHAR(40) NOT NULL, 
  email VARCHAR(40) NOT NULL, 
  password VARCHAR(40) NOT NULL, 
  phone INT NOT NULL,
)
  
INSERT INTO users(id, firstName, lastName,,email, password, phone) VALUES( "lucky", "omokarho", "lumpsey@gmail.com", "1234", "08023444")

