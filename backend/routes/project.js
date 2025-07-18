const express = require('express')
const router = express.Router()


//controller functions

const {getProjectItems, postProjectItems, addProjectComment} = require('../controllers/projectController')


//get add on items route
router.get('/getProjects/:email', getProjectItems)

router.post('/postProjects', postProjectItems)

router.post('/addComment', addProjectComment)


module.exports = router