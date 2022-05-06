const moviesModel = require("../models/moviesModel");
const userModel = require("../models/userModel");

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
      user.favorite.push(req.body.movieid);
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
        const filtered = user.favorite.filter(item => item!==req.body.movieid);
        user.favorite = [...filtered];
        user.save()
        res.status(200).json(user)
    })
    .catch((err) => console.error(err.message))
}

module.exports = { showUserIndex, showFavorite, addToFavorite, deleteFromFavorite };






