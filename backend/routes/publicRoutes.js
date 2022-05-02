const express = require('express');
const router = express.Router();
const publicControllers = require('../controllers/publicControllers')

router.get('/', isNotLoggedIn, publicControllers.showHomepage);
router.get('/:id', isNotLoggedIn, publicControllers.showOneMovie);
router.get('/categories/:category', isNotLoggedIn, publicControllers.showCategory); //THIS IS NOW movies/categories!!!

  

// SHOULD I LEAVE REDIRECT FOR AUTH????
  function isNotLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/') // ?????
    }
    next()
  }

module.exports = router;