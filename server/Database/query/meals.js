const connection = require('../config/connection');

const meals = {
  getAll: () => connection.query('SELECT * FROM meals;'),

  get: (mealName) =>
    connection.query('SELECT * FROM meals WHERE mealName = $1;',
        [mealName]),

  add: (mealName, phone) =>
    connection.query('INSERT INTO meals (mealName, phone) VALUES ($1, $2);',
        [mealName, phone]),

  deleteById: (mealName) =>
    connection.query('DELETE FROM meals WHERE mealName = $1;', [mealName]),

  update: (id, mealName, imageUrl, price) => connection.query('UPDATE meals' +
        +'SET mealName = $2, image_url = $3, price= $4 WHERE id = $1;',
  [id, mealName, imageUrl, price]),
};

module.exports = meals;
