const express = require('express'); 
const router = express.Router();
const authControllers = require('../controllers/authControllers'); 

// /auth/login
router.get('/login', isNotLoggedIn, authControllers.showLogin);
router.post('/login', isNotLoggedIn, authControllers.findUser);
// /auth/register
router.get('/register', isNotLoggedIn, authControllers.showRegister);
router.post('/register', isNotLoggedIn, authControllers.createUser);

// /auth/logout
router.delete('/logout', isLoggedIn,  authControllers.logOut);


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







