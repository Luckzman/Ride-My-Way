const pg = require('pg');
const dbConnection = new pg.Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'ride',
    password: 'postgres',
    port: '5432'
});

export default dbConnection;