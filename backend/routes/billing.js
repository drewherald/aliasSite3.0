const express = require('express');

const {getInvoices, checkoutAddOn, subscriptionChange} = require('../controllers/billingController');

const router = express.Router();

//get All invoices
router.get('/', getInvoices);

router.post('/create-checkout-session', checkoutAddOn)

router.post('/create-sub-session', subscriptionChange)

module.exports = router;
