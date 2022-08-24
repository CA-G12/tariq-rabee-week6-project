const connection = require('../config/connection');

const order ={
    getSpecific: (fullName) => {
        console.log(fullName);
     return connection.query('select meals.mealname from meals inner join orders on orders.meal_id = meals.id inner join customers on customers.id = orders.customer_id where customers.fullname = $1; ',
     [fullName]);
    }
 }

 module.exports = order