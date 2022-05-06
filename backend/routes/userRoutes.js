const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers')

router.get('/', userControllers.showUserIndex);
router.get('/favorite', userControllers.showFavorite);
router.post('/favorite/:id', userControllers.addToFavorite);
router.post('/favorite/:id', userControllers.deleteFromFavorite);

module.exports = router;