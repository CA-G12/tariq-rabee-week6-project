const { Router } = require('express');
const express = require('express');
const controller = require('./Controllers');

const router = Router();

router.get('/allcustomer', controller.getAllCustomer);
router.get('/allmeals', controller.getAllMeals);

module.exports = router;
