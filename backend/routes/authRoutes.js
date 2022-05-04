const express = require('express'); 
const router = express.Router();
const authControllers = require('../controllers/authControllers'); 

// /auth/login
router.post('/login', isNotLoggedIn, authControllers.findUser);

// /auth/register
router.post('/register', isNotLoggedIn, authControllers.createUser);

// /auth/logout
router.post('/logout', isLoggedIn,  authControllers.logout);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {  
      return next()
    }
    res.redirect('/')
  }
  
  function isNotLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }

module.exports = router;







