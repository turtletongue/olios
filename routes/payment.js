const router = require('express').Router();
const paymentControllers = require('../controllers/payment');

router.post('/payment', paymentControllers.postPayment);

module.exports = router;