/* eslint-disable max-len */
/* eslint-disable indent */
const connection = require('../config/connection');

const order ={
    getSpecificMe: (fullName) => {
     return connection.query('select meals.mealname from meals inner join orders on orders.meal_id = meals.id inner join customers on customers.id = orders.customer_id where customers.fullname = $1; ',
     [fullName]);
    },
    getSpecificCust: (mealName) => {
        return connection.query('select customers.fullname from meals inner join orders on orders.meal_id = meals.id inner join customers on customers.id = orders.customer_id where meals.mealname = $1; ',
        [mealName]);
       },
 };
 module.exports = order;
