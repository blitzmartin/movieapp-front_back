const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers')

// /user
router.get('/', userControllers.showUserIndex);
router.get('/favorite', userControllers.showFavorite);
router.post('/addfavorite', userControllers.addToFavorite);
router.post('/deletefavorite', userControllers.deleteFromFavorite);

module.exports = router;