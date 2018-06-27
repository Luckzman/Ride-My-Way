import pg from 'pg';

const connectionString = process.env.DATABASE_URL || 'postgres://xlsxkhgl:DwoR7dwMGYuDj0Ib8-n_NmoYxal0jCJM@elmer.db.elephantsql.com:5432/xlsxkhgl';

const client = new pg.Client(connectionString);
client.connect();

const query = client.query('CREATE TABLE user(id SERIAL PRIMARY KEY, firstname VARCHAR(40) not null, lastname VARCHAR(40) not null, password VARCHAR(40) not null, email VARCHAR(40) not null, phone VARCHAR(40) not null)');
query.on('end', () => { client.end(); });

