const express = require('express');

const {getInvoices} = require('../controllers/billingController');

const router = express.Router();

//get All invoices
router.get('/', getInvoices);

module.exports = router;
