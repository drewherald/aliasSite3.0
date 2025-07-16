const express = require('express')
const router = express.Router()


//controller functions

const {getProjectItems, postProjectItems,} = require('../controllers/projectController')


//get add on items route
router.get('/getProjects/:email', getProjectItems)

router.post('/postProjects', postProjectItems)

module.exports = router