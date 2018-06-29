const pg = require('pg');
const dbConnection = new pg.Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'rides',
    password: 'postgres',
    port: '5432'
});

export default dbConnection;