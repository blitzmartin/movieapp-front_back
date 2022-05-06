const moviesModel = require("../models/moviesModel");

// GET for /user (private)
// Loads homepage for logged user 
function showUserIndex(req, res) {
  moviesModel.find({})
    .then(data => {
      res.json(data, req.user);
    })
    .catch((err) => console.error(err.message))
}

// GET for /user/favorite (private)  NOT IMPLEMENTED NOW
// Loads Favorite page
function showFavorite(req, res) {
  moviesModel.find({})
    .then(data => {
      res.json(data);
    })
    .catch((err) => console.error(err.message))
}

// POST for /user/addfavorite
// Adds movie to Favorite
const addToFavorite = function (req, res) {
  userModel.findOne({ username: req.body.username })
    .then(user => {
      user.favorite.push(movieid);
      console.log("added favorite", user.favorite)
      user.save()
      res.status(200).json(user)
    })
    .catch((err) => console.error(err.message))
}


//  POST for /user/deletefavorite
// Deletes movie to Favorite
const deleteFromFavorite = function (req, res) {
  userModel.findOne({ username: req.body.username })
    .then(user => {
      if (!err) {
        res.status(200).json(user)
      }
    })
    .catch((err) => console.error(err.message))
}

module.exports = { showUserIndex, showFavorite, addToFavorite, deleteFromFavorite };






