const connection = require('../config/connection');

const customer = {
  getAll: () => connection.query('SELECT * FROM customers;'),
  getSpecific: (fullName) =>
    connection.query('SELECT * FROM customers WHERE fullName = $1;',
        [fullName]),

   add: (fullName, phone) =>
    connection.query('INSERT INTO customers (fullName, phone) VALUES ($1, $2);',
        [fullName, phone]),

  deleteById: (id) =>
    connection.query('DELETE FROM customers WHERE id = $1;', [id]),

  update: (id, fullName, phone) => connection.query('UPDATE customers' +
        +'SET fullName = $2, phone = $3 WHERE id = $1;',
  [id, fullName, phone]),
};


module.exports = customer;
