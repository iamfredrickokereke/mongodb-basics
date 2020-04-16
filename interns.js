
// import the assert module for checks

const assert = require('assert');

// create the function to export

const theMovies = (db, callback) => {

    //creating the myMovies collection

    let myMovies = db.collection("movies");

    //available Documents
    let movies = 

    [ 
      {movie: "The Banker", year: "2020", rating: 8},  
      {movie: "Bad Boys", year: "2020", rating: 7}, 
      {movie: "The Hunt", year: "2020", rating: 7}, 
      {movie: "Bloodshot", year: "2020", rating: 7.5},
      {movie: "First Cow", year: "2020", rating: 6.5} 
    ]

    //insert movies into the collection and checking for error
    myMovies.insertMany(movies, function(err, result){
    assert.equal(err, null);
    assert.equal(5, result.result.n);
    assert.equal(5, result.ops.length);
    console.log("The total number of Movies inserted: "+ result.insertedCount);
    callback(result);
    });
 };

module.exports = insertMovies;
