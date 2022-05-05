const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers')

router.get('/', userControllers.showUserIndex);
router.get('/watchlist', userControllers.showWatchlist);
router.post('/watchlist', userControllers.addToWatchlist);
router.delete('/watchlist/:id', userControllers.deleteFromWatchlist);

module.exports = router;