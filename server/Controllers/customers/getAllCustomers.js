const data = require('../../Database/query');

const getAllCustomer = (req, res) => {
  data.customer.getAll().then((data) => {
    console.log(data.json());
  });
};

module.exports = getAllCustomer;
