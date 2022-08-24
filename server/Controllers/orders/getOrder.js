const query = require('../../Database/query');

const getMealByCustomer = (req, res) => {
  return query.orders.getSpecificMe(req.params.fullname.slice(1)).then((data) => {
    res.json(data);
  }) .catch((err) => {
    console.log(err);
    res.status(500).json( {msg: 'internal server Error'});
  });
};

const getCustomerByMeal = (req, res) => {
  console.log(req.params.mealname.slice(1));
  return query.orders.getSpecificCust(req.params.mealname.slice(1))
  .then((data) => {res.json(data);
  }) .catch((err) => {
    console.log(err);
  res.status(500).json( 
    {msg: 'internal server Error'});
  });
};
module.exports = {getMealByCustomer, getCustomerByMeal};
