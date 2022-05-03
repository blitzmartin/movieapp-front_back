const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');
const initialize = require('../config/passport-conf')
const passport = require('passport')

initialize(passport);

// REGISTER Creates user
const createUser = async (req, res, next) => {
  
    const user = await userModel.findOne({ username: req.body.username });
      if (user) {
        return res.status(400).send({
          message: `Username <${req.body.userename}> already taken`,
        });
      } else {
      
       try { 
          const hashedPassword = await bcrypt.hash(req.body.password, 10)
          const newuser = await userModel.create({
            username: req.body.username,
            password: hashedPassword
          });
             res.status(200).json({
                username: newuser.username,
             });
       }catch(error) {
          console.log(error)
          next(error);
      }
    };
  };


// LOGIN Checks if user has an account and if the password is correct
const findUser = async (req, res, next) => {
    passport.authenticate('local', function (err, user) {
        if (err || !user) {
            res.status(401).send("Unauthorized");
        } else {
            req.login(user, function (err) {
                if (err) {
                    return next(err);
                }
                res.status(200).json({
                    username: user.username, 
                });
            });
        }
    })(req, res, next);
}


// LOGOUT Logs user out of session
function logout (req, res, next) {
    req.logout();
    res.clearCookie("connect.sid", { path: "/" });
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      }
      res.status(200).send();
    });
  }


module.exports = { createUser, findUser, logout };