const express = require('express');

const {getInvoices, checkoutAddOn} = require('../controllers/billingController');

const router = express.Router();

//get All invoices
router.get('/', getInvoices);

router.post('/create-checkout-session', checkoutAddOn)

module.exports = router;
