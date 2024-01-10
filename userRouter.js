const express = require('express');
const {registerUser, loginUser, CurrentUser} = require('./userConroll');
const validateToken = require('./middleware/validatejwt');
const router = express.Router();


router.post('/register', registerUser)

router.post('/login', loginUser)

router.get('/current', validateToken, CurrentUser)


module.exports = router