const express = require('express');
const customers = require('./Controllers/customers');

const router = express();

router.get('/allcustomer', customers.gaetAllCustomer);
