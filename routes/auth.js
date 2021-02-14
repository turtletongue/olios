const router = require('express').Router();
const signinControllers = require('../controllers/auth');

router.post('/signin', signinControllers.login);

// router.post('/signup', signinControllers.signup);

module.exports = router;