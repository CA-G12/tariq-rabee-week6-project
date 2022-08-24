const {Router} = require('express');
const controller = require('./Controllers');

// eslint-disable-next-line new-cap
const router = Router();

router.get('/allcustomers', controller.getAllCustomer);
router.get('/allmeals', controller.getAllMeals);
router.get('/MealByCustomer:fullname', controller.getMealByCustomer);
router.get('/CustomerByMeal:mealname', controller.getCustomerByMeal);

module.exports = router;
