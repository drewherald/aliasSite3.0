const express = require('express')
const router = express.Router()


//controller functions

const {getAddonItems, postAddOnItems} = require('../controllers/addonController')

//get add on items route
router.get('/getAddonItems', getAddonItems)

router.post('/postAddonItems', postAddOnItems)

module.exports = router