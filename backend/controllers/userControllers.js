const moviesModel = require("../models/moviesModel");

// GET for /user (private)
// Loads homepage for logged user 
function showUserIndex (req, res) {
  moviesModel.find({})
  .then(data => {
    res.json(data, req.user); 
  })
  .catch((err) => console.errror(err.message))
}

// GET for /user/watchlist (private)
// Loads watchlist page
function showWatchlist (req, res) {
  moviesModel.find({})
  .then(data => {
    res.json(data); 
  })
  .catch((err) => console.errror(err.message))
}

// POST for /user/watchlist
// Adds movie to watchlist
const addToWatchlist = function (req, res) {
  movieModel.find({_id: req.params.id}) // DON'T KNOW!!
        .then(data => {
            console.log(data);
            res.status(200).json(data)
        })
        .catch((err) => console.errror(err.message))
}


// Deletes movie from watchlist by Id // watchlistModel DOES NOT EXIST FOR NOW
const deleteFromWatchlist = function (req, res) {
  watchlistModel.findByIdAndRemove({_id: req.params.id})
  .then(data => {
      if(!err) {
        console.log(data);
        res.status(200).json(data)
      }
  })
  .catch((err) => console.errror(err.message))
}

module.exports = { showUserIndex, showWatchlist, addToWatchlist, deleteFromWatchlist};










//FIRST APPROACH WITH ASYNC FUNCTION
/* async function showHomepage (req, res) {
    try{
        const data = await moviesModel.find({}).select('poster');
        res.render('index', {movies: data});
    } catch(err) {
        console.log(err)
    }
}; */

//THIS IS TO FILTER OBJECT: moviesModel.find({}).select('poster')






