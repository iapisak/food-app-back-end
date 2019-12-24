const express = require('express');
const router = express.Router();
const ctrl = require('../Controllers');

// --- Auth --- //
router.get('/login', ctrl.auth.login);
router.put('/signup', ctrl.auth.signup);
router.delete('/logout', ctrl.auth.logout);

// --- Restaurant --- //
router.get('/restaurant/all', ctrl.restaurant.getAllRestaurant);
router.get('/restaurant/:res_id', ctrl.restaurant.getRestaurant);
router.put('/restaurant/create', ctrl.restaurant.createRestaurant);

// --- Menu --- //
router.get('/menu/:restaurant_id', ctrl.menu.getMenu);
router.put('/menu/create', ctrl.menu.createMenu);

module.exports = router;