const express = require('express')
const router = express.Router()


//controller functions

const {loginUser, signupUser, loginUserOauth, updateUser, sendEmail} = require('../controllers/userController')

//login route
router.post('/login', loginUser)

//login oauth route
router.post('/loginoauth', loginUserOauth)

//sign up route
router.post('/signup', signupUser)

//forgot password route
router.post('/forgotpassword', sendEmail)

//update password routh
router.patch('/updatepassword', updateUser)

module.exports = router