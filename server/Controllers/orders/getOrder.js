const query = require('../../Database/query');

const getOrders = (req, res) => {
  return query.orders.getSpecific(req.params.fullname.slice(1)).then(data => {
    res.json(data)
  }) .catch((err) => {
      console.log(err);
      res.status(500).json( {msg: 'internal server Error'});
    });
  }
;

module.exports = getOrders;