const { Router } = require('express');
const express = require('express');
const controller = require('./Controllers');

const router = Router();

router.get('/allcustomers', controller.getAllCustomer);
router.get('/allmeals', controller.getAllMeals);
router.get('/spiceficOrders:fullname', controller.getSpecificOrders)
 
module.exports = router;
