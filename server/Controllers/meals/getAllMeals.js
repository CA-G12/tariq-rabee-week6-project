const query = require('../../Database/query');

const getAllMeals = (req, res) => {
  return query.meals.getAll()
  .then((data) => {
    res.json(data);
    console.log(data.rows);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json( {msg: 'internal server Error'});
  });
  
};

module.exports = getAllMeals;