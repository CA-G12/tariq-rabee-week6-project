const { Pool } = require('pg');
require('env2')('.env');

const { DB_URL } = process.env;

console.log("url is " + DB_URL);

if (!DB_URL) {
    throw new Error('There is a wrong in url');
}

const connection = new Pool({
    connectionString: DB_URL,
    ssl: false,
});

module.exports = connection;
