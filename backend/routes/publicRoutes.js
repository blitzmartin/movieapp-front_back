const express = require('express');
const router = express.Router();
const publicControllers = require('../controllers/publicControllers')

// /movies
router.get('/', publicControllers.showHomepage);
router.get('/:id', publicControllers.showOneMovie);
router.get('/categories/:category', publicControllers.showCategory); //THIS IS NOW movies/categories!!!

module.exports = router;