const query = require('../../Database/query');

const getAllMeals = (req, res) => {
  query.meals.getAll().then((data) => {
    console.log(data.rows);
    res.end();
  });
  
};

module.exports = getAllMeals;