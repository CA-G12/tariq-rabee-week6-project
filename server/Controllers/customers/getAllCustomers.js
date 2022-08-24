const query = require('../../Database/query');

const getAllCustomer = (req, res) => {
  return query.customer.getAll()
  .then(data => {
    res.json(data)
  }) .catch((err) => {
      console.log(err);
      res.status(500).json( {msg: 'internal server Error'});
    });
  }
;

module.exports = getAllCustomer;
