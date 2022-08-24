const query = require('../../Database/query');

const getAllCustomer = (req, res) => {
  query.customer.getAll().then((data) => {
    console.log(data.rows);
    res.end();
  }).catch((err) => {
    console.log(err);
    res.status(500).json( {msg: 'internal server Error'});
  });
};

module.exports = getAllCustomer;
