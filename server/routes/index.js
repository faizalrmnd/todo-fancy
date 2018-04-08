const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/* GET home page. */
router.post('/signup', authController.signUp);

router.post('/signin', authController.signIn);

module.exports = router;
