const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../models/userModel')

function initialize(passport) {
  const customFields = {
    usernameField: "username",
    passwordField: "password",
  };

  //This is the callback function that goes inside localstrategy setup
  const authenticateUser = async (username, password, done) => {
    const user = await User.findOne({username: username});

    if (user == null) {
      return done(null, false, { message: 'No user with that email' })
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user)
      } else {
        return done(null, false, { message: 'Password incorrect' })
      }
    } catch (e) {
      return done(e)
    }
  }

  passport.use(new LocalStrategy(customFields, authenticateUser))

  //save user.id in our session
  passport.serializeUser((user, done) => {
    return done(null, user.id)
  })
  passport.deserializeUser(async (id, done) => {
    const user = await User.findOne({id: id});
    return done(null, user)
  })

}

module.exports = initialize;