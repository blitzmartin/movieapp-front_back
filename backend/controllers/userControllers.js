const moviesModel = require("../models/moviesModel");

// GET for /user (private)
// Loads homepage for logged user 
function showUserIndex (req, res) {
  moviesModel.find({})
  .then(data => {
    res.json(data, req.user); 
  })
  .catch((err) => console.error(err.message))
}

// GET for /user/favorite (private)  NOT IMPLEMENTED NOW
// Loads Favorite page
function showFavorite (req, res) {
  moviesModel.find({})
  .then(data => {
    res.json(data); 
  })
  .catch((err) => console.error(err.message))
}

// POST for /user/favorite/:id
// Adds movie to Favorite
const addToFavorite = function (req, res) {
  movieModel.find({_id: req.params.id}) // DON'T KNOW!!
        .then(data => {
            res.status(200).json(data)
        })
        .catch((err) => console.error(err.message))
}


//  POST for /user/favorite/:id
// Deletes movie to Favorite
const deleteFromFavorite = function (req, res) {
  FavoriteModel.findByIdAndRemove({_id: req.params.id})
  .then(data => {
      if(!err) {
        res.status(200).json(data)
      }
  })
  .catch((err) => console.error(err.message))
}

module.exports = { showUserIndex, showFavorite, addToFavorite, deleteFromFavorite};






