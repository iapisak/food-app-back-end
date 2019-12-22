const express = require('express');
const router = express.Router();
const ctrl = require('../Controllers');

// --- Auth --- //
router.get('/login', ctrl.auth.login)
router.put('/signup', ctrl.auth.signup)
router.delete('/logout', ctrl.auth.logout)

// -- Restaurant --- //
router.get('/restaurant/:res_id', ctrl.restaurant.requestAndCreateRestaurant)

module.exports = router;