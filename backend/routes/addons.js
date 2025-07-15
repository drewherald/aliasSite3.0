const express = require('express')
const router = express.Router()


//controller functions

const {getAddonItems, postAddOnItems, getCartItems, postCartItems} = require('../controllers/addonController')


//get add on items route
router.get('/getAddonItems', getAddonItems)

router.post('/postAddonItems', postAddOnItems)

router.get('/getCartItems/:email', getCartItems)

router.post('/postCartItems', postCartItems)

module.exports = router