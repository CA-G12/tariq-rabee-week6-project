const pg = require('pg');
require('env2')('.env');

const connectionString = process.env.DB_URL;

if (!connectionSstring) throw Error('Wrong DB URL');

const connection = new pg.Client(connectionString);

connection.connect();

module.exports = connection;
