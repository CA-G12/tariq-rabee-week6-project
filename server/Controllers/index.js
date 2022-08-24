const getAllCustomer = require('./customers/getAllCustomers');
const getAllMeals = require('./meals/getAllMeals');
const {getMealByCustomer, getCustomerByMeal} = require('./orders/getOrder');

module.exports = {getAllCustomer, getAllMeals, getMealByCustomer, getCustomerByMeal};
